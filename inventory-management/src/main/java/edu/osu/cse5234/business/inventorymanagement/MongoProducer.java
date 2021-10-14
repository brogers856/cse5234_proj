package edu.osu.cse5234.business.inventorymanagement;

import static org.bson.codecs.configuration.CodecRegistries.fromProviders;
import static org.bson.codecs.configuration.CodecRegistries.fromRegistries;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Disposes;
import javax.enterprise.inject.Produces;
import javax.inject.Inject;

import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.PojoCodecProvider;
import org.eclipse.microprofile.config.inject.ConfigProperty;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

@ApplicationScoped
public class MongoProducer {
	
	@Inject
	@ConfigProperty(name = "mongo_connection")
	String connection;

    @Produces
    public MongoClient createMongo() {
		ConnectionString connectionString = new ConnectionString(connection);
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
