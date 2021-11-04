package edu.osu.cse5234.business.orderprocessing;

import javax.json.bind.annotation.JsonbProperty;

public class Order {
	@JsonbProperty("cart")
	private Item[] cart;
	
	private int total;
	
	private String status;
	
	@JsonbProperty("paymentInfo")
	private PaymentInfo paymentDetails;
	
	@JsonbProperty("shippingInfo")
	private ShippingInfo shippingDetails;
	
	public Order() {
		
	}
	
	public Order(Item[] cart, int total, PaymentInfo payDetails, ShippingInfo shipDetails) {
		this.cart = cart;
		this.total = total;
		this.paymentDetails = payDetails;
		this.shippingDetails = shipDetails;
	}
	
	public Item[] getCart() {
		return cart;
	}
	
	public void setCart(Item[] cart) {
		this.cart = cart;
	}
	
	public PaymentInfo getPaymentDetails() {
		return paymentDetails;
	}
	
	public void setPaymentDetails(PaymentInfo paymentDetails) {
		this.paymentDetails = paymentDetails;
	}
	
	public ShippingInfo getShippingDetails() {
		return shippingDetails;
	}
	
	public void setShippingDetails(ShippingInfo shippingDetails) {
		this.shippingDetails = shippingDetails;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}	
	
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}	
}
