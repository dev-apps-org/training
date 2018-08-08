/**
 * 
 */
package com.training.bill.payment.pack1;

/**
 * @author Admin
 *
 */
public class Customer {

	private String name;

	private String number;

	public Customer(String name, String number) {
		super();
		this.name = name;
		this.number = number;
	}

	public String showCustomerDetails() {

		return "Name: Ankit, Amount_Due: 4500";
	}

	public String getName() {
		return name;
	}

	public String getNumber() {
		return number;
	}
}