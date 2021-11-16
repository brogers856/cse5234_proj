package edu.osu.cse5234.business.paymentprocessing;

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
@WebServlet("/process-payment")
public class PaymentProcessingServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	@Inject
	@JMSConnectionFactory("jms/shipmentQCF")
	private JMSContext jmsContext;
	
	@Resource(lookup="jms/paymentQ")
	private Queue queue;
	
	@Resource(lookup="jms/paymentQ2")
	private Queue queue2;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PaymentProcessingServlet() {
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
				System.out.println("PAYMENT PROCESSING: Received: " + textMessage.getText());
				out.println("PAYMENT PROCESSING: Received: " + textMessage.getText());
				String res_message = "Confirmation Num: 2017182818828182881";
				jmsContext.createProducer().send(queue2, res_message);
				System.out.println("PAYMENT PROCESSING: Sending message...");
			} catch (JMSException e) {
				out.println("PAYMENT PROCESSING: Error: " + e.getMessage());
			}
		} else {
			System.out.println("PAYMENT PROCESSING: Unknown or missing message content");
			out.println("PAYMENT PROCESSING: Unknown or missing message content");
		}
	}

}
