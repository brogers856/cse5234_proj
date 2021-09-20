

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class IWorkWithJSPServlet
 */
@WebServlet("/greetingsServletNew")
public class IWorkWithJSPServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public IWorkWithJSPServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Object counter = request.getSession().getAttribute("counter");
		if(counter == null) request.getSession().setAttribute("counter","1");
		else {
			Integer countInt = Integer.parseInt(counter.toString());
			countInt++;
			request.getSession().setAttribute("counter", countInt.toString());
		}
		String name = request.getParameter("name");
		request.setAttribute("personalizedGreeting", "Hello " + name + "! You visited " + request.getSession().getAttribute("counter").toString() + " times!!");
		RequestDispatcher rs = request.getServletContext().getRequestDispatcher("/WEB-INF/jsp/NewGreetingsJSP.jsp");
		rs.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
