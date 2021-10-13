package edu.osu.cse5234.business.inventorymanagement;

import static org.bson.codecs.configuration.CodecRegistries.fromProviders;
import static org.bson.codecs.configuration.CodecRegistries.fromRegistries;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Disposes;
import javax.enterprise.inject.Produces;

import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.PojoCodecProvider;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

@ApplicationScoped
public class MongoProducer {

    @Produces
    public MongoClient createMongo() {
		ConnectionString connectionString = new ConnectionString("mongodb+srv://ecommerce:ecommerce@cluster0.x1i05.mongodb.net/inventory?retryWrites=true&w=majority");
		MongoClientSettings settings = MongoClientSettings.builder()
		        .applyConnectionString(connectionString)
		        .build();
		MongoClient mongoClient = MongoClients.create(settings);
		return mongoClient;
    }

    @Produces
    public MongoDatabase createDB(MongoClient client) {
        CodecRegistry pojoCodecRegistry = fromRegistries(MongoClientSettings.getDefaultCodecRegistry(),
                fromProviders(PojoCodecProvider.builder().automatic(true).build()));
		return client.getDatabase("inventory").withCodecRegistry(pojoCodecRegistry);
    }

    public void close(@Disposes MongoClient toClose) {
        toClose.close();
    }
}
