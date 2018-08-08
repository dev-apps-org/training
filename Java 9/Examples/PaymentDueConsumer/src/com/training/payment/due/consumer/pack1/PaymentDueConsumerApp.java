/**
 * 
 */
package com.training.payment.due.consumer.pack1;

import com.training.payment.app.pack1.PaymentDueService;

/**
 * @author Admin
 *
 */
public class PaymentDueConsumerApp {

	/**
	 * @param args
	 */
	public static void main(String[] args) {

		PaymentDueService.getInstance().iterator().forEachRemaining(service -> {
			System.out.println(service.notify("87451"));
		});
	}

}
