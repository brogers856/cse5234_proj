package edu.osu.cse5234.business.inventorymanagement;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.bson.Document;

import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Indexes;

@Path("inventory")
public class InventoryManagementService {
	@Inject
	MongoDatabase db;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Inventory getInventory() {
		MongoCollection<Document> coll = db.getCollection("items");
		FindIterable<Item> result = coll.find(Item.class);
		Iterator<Item> iter = result.iterator();
		List<Item> items = new ArrayList<Item>();
		while(iter.hasNext()) {
			items.add(iter.next());
		}
		Inventory currentInventory = new Inventory();
		currentInventory.setItems(items);
		return currentInventory;
	}
	
	@GET
	@Path("/items/{id}")
	@Produces("application/json")
	public Response getItemById(@PathParam("id") int key) {
		MongoCollection<Document> coll = db.getCollection("items");
		Iterator<Item> iter = coll.find(Filters.eq("key", key),Item.class).iterator();
		while(iter.hasNext()) {
			return Response.status(200).entity(iter.next()).build();
		}
		return Response.status(400).entity("Item with id " + key + " does not exist").build();
	}
	
	@GET
	@Path("/items")
	@Produces("application/json")
	public Response getItemByName(@QueryParam("name") String name) {
		MongoCollection<Document> coll = db.getCollection("items");
		coll.createIndex(Indexes.text("name"));
		Iterator<Item> iter = coll.find(Filters.text(name),Item.class).iterator();
		while(iter.hasNext()) {
			return Response.status(200).entity(iter.next()).build();
		}
		return Response.status(400).entity("Item with name " + name + " does not exist").build();
	}
}
