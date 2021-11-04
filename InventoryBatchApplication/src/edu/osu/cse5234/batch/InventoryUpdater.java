package edu.osu.cse5234.batch;

import static org.bson.codecs.configuration.CodecRegistries.fromProviders;
import static org.bson.codecs.configuration.CodecRegistries.fromRegistries;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.bson.Document;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.PojoCodecProvider;
import org.bson.conversions.Bson;
import org.bson.types.ObjectId;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Projections;
import com.mongodb.client.model.Updates;

public class InventoryUpdater {
		
	public static void main(String[] args) {
		MongoClient client = createMongo();
		MongoDatabase inventoryDB = createDB(client, "inventory");
		MongoDatabase orderDB = createDB(createMongo(), "order");
		Collection<ObjectId> orderIds = getNewOrders(orderDB);
		Map<Integer, Integer> orderedItems = getOrderedItems(orderIds, orderDB);
		udpateInventory(orderedItems, inventoryDB);
		udpateOrderStatus(orderIds, orderDB);
		client.close();
	}
	
	private static MongoClient createMongo() {
		ConnectionString connectionString = new ConnectionString("mongodb+srv://ecommerce:ecommerce@cluster0.x1i05.mongodb.net/inventory?retryWrites=true&w=majority");
		MongoClientSettings settings = MongoClientSettings.builder()
		        .applyConnectionString(connectionString)
		        .build();
		MongoClient mongoClient = MongoClients.create(settings);
		return mongoClient;
	}
	
	private static MongoDatabase createDB(MongoClient client, String dbName) {
        CodecRegistry pojoCodecRegistry = fromRegistries(MongoClientSettings.getDefaultCodecRegistry(),
                fromProviders(PojoCodecProvider.builder().automatic(true).build()));
		return client.getDatabase(dbName).withCodecRegistry(pojoCodecRegistry);
	}
	
	private static Collection<ObjectId> getNewOrders(MongoDatabase db){
		MongoCollection<Document> coll = db.getCollection("orders");
		Collection<ObjectId> orderIds = new ArrayList<ObjectId>();
		Iterator<Document> iter = coll.find(Filters.eq("status", "New")).iterator();
		while (iter.hasNext()) {
			orderIds.add((ObjectId) iter.next().get("_id"));
		}
		return orderIds;
	}
	
	private static Map<Integer, Integer> getOrderedItems(Collection<ObjectId> orderIds, MongoDatabase db) {
		MongoCollection<Document> coll = db.getCollection("orders");
		Map<Integer, Integer> orderedItems = new HashMap<Integer, Integer>();
		Iterator<Document> iter = coll.find(Filters.in("_id", orderIds)).projection(Projections.include("cart")).iterator();
		while(iter.hasNext()) {
			@SuppressWarnings("unchecked")
			List<Document> cart =  (List<Document>) iter.next().get("cart");
			for (Document doc: cart) {
				int key = doc.getInteger("key");
				int quantity = doc.getInteger("quantity");
				if (!orderedItems.containsKey(key)) {
					orderedItems.put(key, quantity);
				}
				else {
					orderedItems.put(key, orderedItems.get(key)+ quantity);
				}
			}
		}
		return orderedItems;
	}
	
	private static void udpateInventory(Map<Integer, Integer> orderedItems, MongoDatabase db) {
		MongoCollection<Document> coll = db.getCollection("items");
		for (Integer key: orderedItems.keySet()) {
			int quantity = coll.find(Filters.eq("key", key)).first().getInteger("availableQuantity");
			coll.updateOne(Filters.eq("key", key), Updates.set("availableQuantity", quantity - orderedItems.get(key)));
		}
	}
	
	private static void udpateOrderStatus(Collection<ObjectId> orderIds, MongoDatabase db) {
		MongoCollection<Document> coll = db.getCollection("orders");
		Bson updates = Updates.set("status", "Processed");
		coll.updateMany(Filters.in("_id", orderIds), updates);
	}

}
