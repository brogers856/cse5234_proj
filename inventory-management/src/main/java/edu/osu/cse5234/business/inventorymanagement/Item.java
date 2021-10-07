package edu.osu.cse5234.business.inventorymanagement;

public class Item {
	private int id;
	private String name;
	private String desc;
	private int availableQuantity;
	private int price;
	
	public Item(int id, String name, String desc, int availableQuantity, int price) {
		this.id = id;
		this.name = name;
		this.desc = desc;
		this.availableQuantity = availableQuantity;
		this.price = price;
	}
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
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
