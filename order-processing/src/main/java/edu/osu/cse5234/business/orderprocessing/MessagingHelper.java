package edu.osu.cse5234.business.orderprocessing;

import javax.annotation.Resource;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.jms.ConnectionFactory;
import javax.jms.JMSConnectionFactory;
import javax.jms.JMSContext;
import javax.jms.Queue;

@RequestScoped
@Resource(name = "jms/shipmentQCF", lookup = "jms/shipmentQCF", type = ConnectionFactory.class)

public class MessagingHelper {
	@Inject
	@JMSConnectionFactory("java:comp/env/jms/shipmentQCF")
	private JMSContext jmsContext;
	
	@Resource(lookup = "jms/shipmentQ")
	private Queue queue;
	
	private Integer itemCount(Order order) {
		Integer count = 0;
		Item[] items = order.getCart();
		for (Item item : items) {
			count += item.getQuantity();
		}
		return count;
	}
	public void initiateShipping(Order order) {
		ShippingInfo shipping = order.getShippingDetails();
		String message = "Address: " + shipping.getAddressLine1() + " " + shipping.getAddressLine2() + " " + shipping.getState() + " " + shipping.getZip() + "\n"
				+ "Email: " + shipping.getEmail() + "\n"
				+ "Number of items: " + itemCount(order) + "\n"
				+ "Business: OldEgg\n"
				+ "Account Num: 1234";
		System.out.println("Sending message: \n" + message);
		jmsContext.createProducer().send(queue, message);
		System.out.println("Message Sent!");
	}
}
