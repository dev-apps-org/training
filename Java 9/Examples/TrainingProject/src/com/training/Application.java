/**
 * 
 */
package com.training;

import java.util.List;

/**
 * @author Admin
 *
 */
public class Application {

	public static void main(String[] args) {

		Customer nike = new Customer(1000, "Nike", 2500.0);
		Customer puma = new Customer(2000, "Puma", 20000.0);
		Customer adidas = new Customer(3000, "Adidas", 1000.0);
		Customer reebok = new Customer(4000, "Reebok", 40000.0);
		List<Customer> customers = List.of(nike, puma, adidas, reebok);
		customers.forEach(System.out::println);

		System.out.println("Customer with amount due >= 5000");
		customers.stream().filter(customer -> customer.getAmountDue() >= 5000)
				.forEach(customer -> {
					System.out.println(customer);
				});
	}
}