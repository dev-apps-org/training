/**
 * 
 */
package com.training.bill.payment.pack3;

import java.util.Map;

import com.training.bill.payment.pack1.Customer;
import com.training.custom.reflector.pack1.Reflector;

/**
 * @author Admin
 *
 */
public class Application {

	/**
	 * @param args
	 * @throws IllegalAccessException
	 * @throws IllegalArgumentException
	 */
	public static void main(String[] args) throws IllegalArgumentException, IllegalAccessException {
		Customer customer = new Customer("Test", "8888");
		Map<String, Object> properties = Reflector.getProperties(customer);
		System.out.println(properties);
	}
}
