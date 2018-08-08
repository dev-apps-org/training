/**
 * 
 */
/**
 * @author Admin
 *
 */
module com.training.billpayment {

	// exports <package name> to <module name>
	exports com.training.bill.payment.pack1 to com.training.cardpayment, com.training.chequepayment, com.training.custom.reflector;
	exports com.training.bill.payment.pack2 to com.training.cashpayment;

	opens com.training.bill.payment.pack1; // making the files under this package available for reflection to other
											// modules
	requires com.training.custom.reflector;
}