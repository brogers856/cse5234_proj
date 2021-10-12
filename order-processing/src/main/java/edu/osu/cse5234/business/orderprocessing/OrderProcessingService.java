package edu.osu.cse5234.business.orderprocessing;

import java.io.IOException;

import javax.json.bind.Jsonb;
import javax.json.bind.JsonbBuilder;
import javax.json.bind.JsonbConfig;
import javax.json.bind.config.PropertyNamingStrategy;
import javax.ws.rs.POST;
import javax.ws.rs.Consumes;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.Path;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;


@Path("order")
public class OrderProcessingService {
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response submitOrder(String jsonOrder) throws IOException {
		JsonbConfig config = new JsonbConfig()
		.withPropertyNamingStrategy(PropertyNamingStrategy.CASE_INSENSITIVE);
		
		Jsonb jsonb = JsonbBuilder.create(config);
		Order submittedOrder = jsonb.fromJson(jsonOrder, Order.class);

		for (Item itemInCart : submittedOrder.getCart()) {
			Client client = ClientBuilder.newClient();
			Response response = client.target("http://localhost:9080/inventory-management/inventory/items")
					.path(String.valueOf(itemInCart.getKey()))
					.request(MediaType.APPLICATION_JSON)
					.get(Response.class);
			String body = response.readEntity(String.class);
			Item item = jsonb.fromJson(body, Item.class);
			if (itemInCart.getQuantity() > item.getAvailableQuantity()) {
				return Response.status(418).entity("Insufficient Quantity: " + itemInCart.getProduct()).build();
			}
		}
		
		return Response.status(200).entity("Order accepted!").build();
	}
}
