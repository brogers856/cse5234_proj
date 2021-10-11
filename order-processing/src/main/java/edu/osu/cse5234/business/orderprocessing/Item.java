package edu.osu.cse5234.business.orderprocessing;

public class Item {
	private int key;
	private String product;
	private String description;
	private int availableQuantity;
	private int price;
	private int quantity;
	
	public Item() {
		
	}
	
	public Item(int key, String product, String description, int availableQuantity, int price) {
		this.key = key;
		this.product = product;
		this.description = description;
		this.availableQuantity = availableQuantity;
		this.price = price;
	}
	
	public int getKey() {
		return key;
	}
	
	public void setKey(int key) {
		this.key = key;
	}
	
	public String getProduct() {
		return product;
	}
	
	public void setProduct(String product) {
		this.product = product;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
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

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
}
