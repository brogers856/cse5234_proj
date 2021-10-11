package edu.osu.cse5234.business.orderprocessing;

public class ShippingInfo {
	private String addressLine1;
	private String addressLine2;
	private String method;
	private String email;
	private String state;
	private String zip;
	
	public ShippingInfo() {
		
	}
	
	public ShippingInfo(String addr1, String addr2, String method, String email, String state, String zip) {
		this.addressLine1 = addr1;
		this.addressLine2 = addr2;
		this.method = method;
		this.email = email;
		this.state = state;
		this.zip = zip;
	}
	
	public String getAddressLine1() {
		return addressLine1;
	}
	
	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}
	
	public String getAddressLine2() {
		return addressLine2;
	}
	
	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}
	
	public String getMethod() {
		return method;
	}
	
	public void setMethod(String method) {
		this.method = method;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZip() {
		return zip;
	}

	public void setZip(String zip) {
		this.zip = zip;
	}
}
