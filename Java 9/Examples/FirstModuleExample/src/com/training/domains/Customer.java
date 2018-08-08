/**
 * 
 */
package com.training.domains;

import com.training.domains.model.Address;

/**
 * @author Admin
 *
 */
@SuppressWarnings("exports")
public class Customer {

	private long customerNumber;
	private String customerName;
	private double amountDue;
	private Address address;

	public Customer() {
		super();
	}

	public Customer(long customerNumber, String customerName, double amountDue, Address address) {
		super();
		this.customerNumber = customerNumber;
		this.customerName = customerName;
		this.amountDue = amountDue;
		this.address = address;
	}

	public long getCustomerNumber() {
		return customerNumber;
	}

	public void setCustomerNumber(long customerNumber) {
		this.customerNumber = customerNumber;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public double getAmountDue() {
		return amountDue;
	}

	public void setAmountDue(double amountDue) {
		this.amountDue = amountDue;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "Customer [customerNumber=" + customerNumber + ", customerName=" + customerName + ", amountDue="
				+ amountDue + ", address=" + address + "]";
	}
}