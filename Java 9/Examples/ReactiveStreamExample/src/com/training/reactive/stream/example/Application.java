/**
 * 
 */
package com.training.reactive.stream.example;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Flow;
import java.util.concurrent.SubmissionPublisher;

/**
 * @author Admin
 *
 */
public class Application {

	public static void main(String[] args) {

		ExecutorService executorService = Executors.newFixedThreadPool(1);
		SubmissionPublisher<Freelancer> publisher = new SubmissionPublisher<>(executorService,
				Flow.defaultBufferSize());
		
		try(publisher) {
			publisher.subscribe(new MySubscriber());
			publisher.submit(new Freelancer("111", "Ankit A", "Developer"));
			publisher.submit(new Freelancer("112", "Ankit B", "Tester"));
			publisher.submit(new Freelancer("113", "Ankit C", "DevOps"));
			publisher.submit(new Freelancer("114", "Ankit D", "Manager"));
		}
		finally {
			executorService.shutdown();
		}
	}
}