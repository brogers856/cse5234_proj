package edu.osu.cse5234.business.inventorymanagement;
import org.bson.types.ObjectId;

public class Item {
	private ObjectId _id;
	private int key;
	private String name;
	private String desc;
	private int availableQuantity;
	private int price;
	
	public Item() {
		
	}
	
	public Item(ObjectId _id, int key, String name, String desc, int availableQuantity, int price) {
		this._id = _id;
		this.key = key;
		this.name = name;
		this.desc = desc;
		this.availableQuantity = availableQuantity;
		this.price = price;
	}
	
	public ObjectId getId() {
		return _id;
	}
	
	public void setId(ObjectId _id) {
		this._id = _id;
	}
	
	public int getKey() {
		return key;
	}
	
	public void setKey(int key) {
		this.key = key;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getDesc() {
		return desc;
	}
	
	public void setDesc(String desc) {
		this.desc = desc;
	}
	
	public int getAvailableQuantity() {
		return availableQuantity;
	}
	
	public void setAvailableQuantity(int availableQuantity) {
		this.availableQuantity = availableQuantity;
	}
	
	public int getPrice() {
		return price;
	}
	
	public void setPrice(int price) {
		this.price = price;
	}
	
}
