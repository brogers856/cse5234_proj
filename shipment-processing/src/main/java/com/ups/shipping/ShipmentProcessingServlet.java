package com.ups.shipping;

import java.io.IOException;
import java.io.PrintWriter;

import javax.inject.Inject;
import javax.jms.*;
import javax.annotation.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ShipmentProcessingServlet
 */
@WebServlet("/initiation")
public class ShipmentProcessingServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	@Inject
	@JMSConnectionFactory("jms/shipmentQCF")
	private JMSContext jmsContext;
	
	@Resource(lookup="jms/shipmentQ")
	private Queue queue;
	
	@Resource(lookup="jms/shipmentQ2")
	private Queue queue2;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ShipmentProcessingServlet() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("Receiving message...");
		PrintWriter out = response.getWriter();
		Message message = jmsContext.createConsumer(queue).receive(5000);
		if (message != null && message instanceof TextMessage) {
			TextMessage textMessage = (TextMessage) message;
			try {
				System.out.println("Received: " + textMessage.getText());
				out.println("Received: " + textMessage.getText());
				String res_message = "Label Num: 54321";
				jmsContext.createProducer().send(queue2, res_message);
				System.out.println("Sending message...");
			} catch (JMSException e) {
				out.println("Error: " + e.getMessage());
			}
		} else {
			System.out.println("Unknown or missing message content");
			out.println("Unknown or missing message content");
		}
	}

}
