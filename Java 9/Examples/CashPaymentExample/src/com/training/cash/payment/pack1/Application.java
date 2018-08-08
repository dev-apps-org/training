/**
 * 
 */
package com.training.cash.payment.pack1;

import com.training.bill.payment.pack2.SalesMan;

/**
 * @author Admin
 *
 */
public class Application {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		
		SalesMan salesMan = new SalesMan();
		System.out.println(salesMan.showSalesManDetails());
	}
}
