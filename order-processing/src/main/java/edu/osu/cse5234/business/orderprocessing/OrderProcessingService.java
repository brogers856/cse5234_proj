package edu.osu.cse5234.business.orderprocessing;

import java.io.IOException;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.jms.JMSException;
import javax.json.bind.Jsonb;
import javax.json.bind.JsonbBuilder;
import javax.json.bind.JsonbConfig;
import javax.json.bind.config.PropertyNamingStrategy;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.bson.Document;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

@RequestScoped
@Path("order")
public class OrderProcessingService {
	@Inject
	MongoDatabase db;
	
	@Inject
	MessagingHelper messagingHelper;
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response submitOrder(String jsonOrder) throws IOException, JMSException {
		JsonbConfig config = new JsonbConfig()
		.withPropertyNamingStrategy(PropertyNamingStrategy.CASE_INSENSITIVE);
		
		Jsonb jsonb = JsonbBuilder.create(config);
		Order submittedOrder = jsonb.fromJson(jsonOrder, Order.class);

		for (Item itemInCart : submittedOrder.getCart()) {
			Client client = ClientBuilder.newClient();
			Response inventory = client.target("http://localhost:9080/inventory-management/inventory/items")
					.path(String.valueOf(itemInCart.getKey()))
					.request(MediaType.APPLICATION_JSON)
					.get(Response.class);
			client.close();
			Item itemInventory = jsonb.fromJson(inventory.readEntity(String.class), Item.class);
			
			if (itemInCart.getQuantity() > itemInventory.getAvailableQuantity()) {
				return Response.status(418).entity("Insufficient Quantity: " + itemInCart.getProduct()).build();
			}			
		}
		
		MongoCollection<Document> ordersMongoDBCollection = db.getCollection("orders");
		Document orderDetails = Document.parse(jsonOrder);
		ordersMongoDBCollection.insertOne(orderDetails);
		messagingHelper.initiateShipping(submittedOrder);
		Client client = ClientBuilder.newClient();
		client.target("http://localhost:9080/shipment-processing/initiation")
			.request(MediaType.APPLICATION_JSON)
			.get();
		messagingHelper.receiveLabel();
		
		return Response.status(200).entity("Order accepted!").build();
	}
}
