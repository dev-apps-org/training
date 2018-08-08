/**
 * 
 */
package com.training.payment.due.provider.pack1;

import com.training.payment.app.pack1.PaymentDueService;

/**
 * @author Admin
 *
 */
public class PaymentDueServiceImpl implements PaymentDueService {

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.training.payment.app.pack1.PaymentDueService#notify(java.lang.String)
	 */
	@Override
	public String notify(String msg) {

		return "Please pay the due amount : " + msg;
	}
}