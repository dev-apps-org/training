/**
 * 
 */
package com.training.payment.app.pack1;

import java.util.ArrayList;
import java.util.List;
import java.util.ServiceLoader;

/**
 * @author Admin
 *
 */
public interface PaymentDueService {

	public String notify(String msg);

	static List<PaymentDueService> getInstance() {
		ServiceLoader<PaymentDueService> serviceLoader = ServiceLoader.load(PaymentDueService.class);
		List<PaymentDueService> paymentDueServices = new ArrayList<>();
		serviceLoader.iterator().forEachRemaining(paymentDueServices::add);
		return paymentDueServices;
	}
}