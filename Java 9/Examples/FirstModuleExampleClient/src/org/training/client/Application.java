/**
 * 
 */
package org.training.client;

import java.util.List;

import com.training.domains.Customer;
import com.training.domains.model.Address;

/**
 * @author Admin
 *
 */
public class Application {

	public static void main(String[] args) {

		Customer nike = new Customer(1001, "Nike", 9850, new Address("Hyd"));
		Customer puma = new Customer(2000, "Puma", 20000.0, new Address("BLR"));
		Customer adidas = new Customer(3000, "Adidas", 1000.0, new Address("CHEN"));
		Customer reebok = new Customer(4000, "Reebok", 40000.0, new Address("DEL"));

		List<Customer> customers = List.of(nike, puma, adidas, reebok);
		customers.forEach(System.out::println);

		System.out.println("Customer with amount due >= 5000");
		customers.stream().filter(customer -> customer.getAmountDue() >= 5000).forEach(customer -> {
			System.out.println(customer);
		});
	}
}
