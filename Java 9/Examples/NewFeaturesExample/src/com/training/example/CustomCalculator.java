/**
 * 
 */
package com.training.example;

/**
 * @author Admin
 *
 */
public interface CustomCalculator {

	public void show();

	public default String showNames() {

		return "Hello from Default Method, nameLength: " + this.getLength("Ankit");
	}

	public default String showCity() {

		return "Hello from Chennai, nameLength: " + this.getLength("Chennai");
	}
	
	private int getLength(String msg) {
		
		return msg.length();
	}
}