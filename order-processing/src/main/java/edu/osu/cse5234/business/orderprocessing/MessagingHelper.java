package edu.osu.cse5234.business.orderprocessing;

import javax.annotation.Resource;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.jms.ConnectionFactory;
import javax.jms.JMSConnectionFactory;
import javax.jms.JMSConsumer;
import javax.jms.JMSContext;
import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.Queue;

@RequestScoped
@Resource(name = "jms/shipmentQCF", lookup = "jms/shipmentQCF", type = ConnectionFactory.class)

public class MessagingHelper {
	@Inject
	@JMSConnectionFactory("java:comp/env/jms/shipmentQCF")
	private JMSContext jmsContext;
	
	@Resource(lookup = "jms/shipmentQ")
	private Queue shipmentQueue;
	
	@Resource(lookup = "jms/shipmentQ2")
	private Queue shipmentQueue2;
	
	@Resource(lookup = "jms/paymentQ")
	private Queue paymentQueue;
	
	@Resource(lookup = "jms/paymentQ2")
	private Queue paymentQueue2;
	
	
	private Integer itemCount(Order order) {
		Integer count = 0;
		Item[] items = order.getCart();
		for (Item item : items) {
			count += item.getQuantity();
		}
		return count;
	}
	public void initiateShipping(Order order) throws JMSException {
		ShippingInfo shipping = order.getShippingDetails();
		String message = "Address: " + shipping.getAddressLine1() + " " + shipping.getAddressLine2() + " " + shipping.getState() + " " + shipping.getZip() + "\n"
				+ "Email: " + shipping.getEmail() + "\n"
				+ "Number of items: " + itemCount(order) + "\n"
				+ "Business: OldEgg\n"
				+ "Account Num: 1234";
		System.out.println("ORDER-PROCESSING: Sending message: \n" + message);
		jmsContext.createProducer().send(shipmentQueue, message);
		System.out.println("ORDER-PROCESSING: Message Sent!");
	}
	
	public void receiveShipmentLabel() throws JMSException {
		JMSConsumer consumer = jmsContext.createConsumer(shipmentQueue2);
		Message message = consumer.receive();
		System.out.println("ORDER-PROCESSING: Received: " + message.getBody(String.class));
	}
	
	public void initiatePayment(Order order) throws JMSException {
		PaymentInfo payment = order.getPaymentDetails();
		String message = "Card Number: " + payment.getNumber() + "\n"
				+ "Expiration Date: " + payment.getExpiration() + "\n"
				+ "Security Code: " + payment.getSecurity() + "\n"
				+ "Total Cost: " + order.getTotal() + "\n"
				+ "Account Num: 1234";
		System.out.println("ORDER-PROCESSING: Sending message: \n" + message);
		jmsContext.createProducer().send(paymentQueue, message);
		System.out.println("ORDER-PROCESSING: Message Sent!");
	}
	
	public void receivePaymentLabel() throws JMSException {
		JMSConsumer consumer = jmsContext.createConsumer(paymentQueue2);
		Message message = consumer.receive();
		System.out.println("ORDER-PROCESSING: Received: " + message.getBody(String.class));
	}
}
