/**
 * 
 */
package com.training.card.payment.pack1;

import com.training.bill.payment.pack1.Customer;

/**
 * @author Admin
 *
 */
public class Application {

	/**
	 * @param args
	 */
	public static void main(String[] args) {

		Customer customer = new Customer("ankit", "9875");
		System.out.println(customer.showCustomerDetails());
	}
}
