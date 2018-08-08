/**
 * 
 */
package com.training.reactive.stream.example;

import java.util.concurrent.Flow.Subscriber;
import java.util.concurrent.Flow.Subscription;

/**
 * @author Admin
 */
public class MySubscriber implements Subscriber<Freelancer> {

	private Subscription subscription;

	@Override
	public void onSubscribe(Subscription subscription) {

		System.out.println("Inside onSubscribe");
		this.subscription = subscription;
		this.subscription.request(1);
	}

	@Override
	public void onNext(Freelancer item) {
		System.out.println("Inside onNext");
		System.out.println("Item: " + item);
		this.subscription.request(2);
	}

	@Override
	public void onError(Throwable throwable) {
		System.out.println("Inside onError");
		System.out.println("Error: " + throwable);
	}

	@Override
	public void onComplete() {
		System.out.println("Inside onComplete");
	}
}