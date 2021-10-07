package edu.osu.cse5234.business.inventorymanagement;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

@Path("inventory")
public class InventoryManagementService {
	
	private Inventory currentInventory;
	
	public InventoryManagementService() {
		Inventory currentInventory = new Inventory();
		List<Item> availableItems = new ArrayList<Item>();
		availableItems.add(new Item(1, "Laptop", "Like new", 20, 50000));
		availableItems.add(new Item(2, "Headphones", "Lightly used", 30, 5000));
		availableItems.add(new Item(3, "Keyboard", "Brand new", 35, 2500));
		availableItems.add(new Item(4, "Monitor", "Lightly used", 15, 7500));
		availableItems.add(new Item(5, "Desktop", "Heavy use, scratches/dents", 10, 80000));
		currentInventory.setItems(availableItems);
		this.currentInventory = currentInventory;
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Inventory getInventory() {
		return currentInventory;
	}
	
	@GET
	@Path("/items/{id}")
	@Produces("application/json")
	public Response getItemById(@PathParam("id") int id) {
		List<Item> items = currentInventory.getItems();
        for (int i = 0; i < items.size(); i++) {
            Item curItem = items.get(i);
            if(curItem.getId() == id) {
            	return Response.status(200).entity(curItem).build();
            }
        }
		return Response.status(400).entity("Item with id " + id + " does not exist").build();
	}
	
	@GET
	@Path("/items")
	@Produces("application/json")
	public Response getItemByName(@QueryParam("name") String name) {
		List<Item> items = currentInventory.getItems();
        for (int i = 0; i < items.size(); i++) {
            Item curItem = items.get(i);
            if(curItem.getName().equals(name)) {
            	return Response.status(200).entity(curItem).build();
            }
        }
		return Response.status(400).entity("Item with name " + name + " does not exist").build();
	}
}
