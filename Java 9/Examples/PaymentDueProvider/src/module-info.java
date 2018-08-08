import com.training.payment.app.pack1.PaymentDueService;
import com.training.payment.due.provider.pack1.PaymentDueServiceImpl;

/**
 * 
 */
/**
 * @author Admin
 *
 */
module com.training.payment.due.provider {

	requires com.training.payment.app;

	// provider for the service
	provides PaymentDueService with PaymentDueServiceImpl;
}