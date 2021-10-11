package edu.osu.cse5234.business.orderprocessing;

public class PaymentInfo {
	private String number;
	private String expiration;
	private String security;
	
	public PaymentInfo() {
		
	}
	
	public PaymentInfo(String number, String expiration, String security) {
		this.number = number;
		this.expiration = expiration;
		this.security = security;
	}
	
	public String getNumber() {
		return number;
	}
	
	public void setNumber(String number) {
		this.number = number;
	}
	
	public String getExpiration() {
		return expiration;
	}
	
	public void setExpiration(String expiration) {
		this.expiration = expiration;
	}
	
	public String getSecurity() {
		return security;
	}
	
	public void setSecurity(String security) {
		this.security = security;
	}
}
