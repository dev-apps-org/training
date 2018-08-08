/**
 * 
 */
package com.training;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Admin
 *
 */
public class AddMainClass {

	public static void main(String[] args) {

		AddInterface addInterface = (int a, int b) -> {
			return a + b;
		};
		System.out.println(addInterface.add(10, 60));

		List<String> names = new ArrayList<>();
		names.add("Ankit");
		names.add("Anil");

		names.forEach(System.out::println);
	}
}