package edu.osu.cse5234.business.orderprocessing;

import javax.json.bind.Jsonb;
import javax.json.bind.JsonbBuilder;
import javax.json.bind.JsonbConfig;
import javax.json.bind.config.PropertyNamingStrategy;
import javax.ws.rs.POST;
import javax.ws.rs.Consumes;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.Path;

@Path("order")
public class OrderProcessingService {
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response submitOrder(String jsonOrder) {
		JsonbConfig config = new JsonbConfig()
		.withPropertyNamingStrategy(PropertyNamingStrategy.CASE_INSENSITIVE);
		
		Jsonb jsonb = JsonbBuilder.create(config);
		Order submittedOrder = jsonb.fromJson(jsonOrder, Order.class);

		for (Item itemInCart : submittedOrder.getCart()) {
			if (itemInCart.getQuantity() > itemInCart.getAvailableQuantity()) {
				return Response.status(418, "Insufficient Quantity: " + itemInCart.getProduct()).build();
			}
		}
		
		return Response.status(200).entity("Order accepted!").build();
	}
}
