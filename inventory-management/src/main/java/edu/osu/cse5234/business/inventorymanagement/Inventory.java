package edu.osu.cse5234.business.inventorymanagement;

import java.util.List;

public class Inventory {
	
	public Inventory(){}
	
	private List<Item> items;
	
	public List<Item> getItems() {
		return items;
	}
	
	public void setItems(List<Item>newItems) {
		items = newItems;
	}
}
