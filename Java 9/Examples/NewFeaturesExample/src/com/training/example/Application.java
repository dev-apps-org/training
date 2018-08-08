/**
 * 
 */
package com.training.example;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.util.List;

/**
 * @author Admin
 *
 */
public class Application implements CustomCalculator {

	/**
	 * @param args
	 * @throws IOException
	 */
	public static void main(String[] args) throws IOException {

		interfaceWithPrivateMethodExample();

		newTryWithResourceExample();

		parallelStreamExample();
	}

	private static void parallelStreamExample() {

		List<Integer> numbers = List.of(450, 500, 22, 11, 56, 1899, 56);

		System.out.println("Max Number ::::");
		// Find the max number
		numbers.parallelStream().reduce((n1, n2) -> n1 > n2 ? n1 : n2).ifPresent(System.out::println);

		System.out.println("Min Number ::::");
		// Find the min number
		numbers.stream().parallel().reduce((n1, n2) -> n1 < n2 ? n1 : n2).ifPresent(System.out::println);
		
		System.out.println("Numbers till 11 ::::");
		// Print the numbers till it find '11' in the list
		numbers.stream().takeWhile(num -> num > 11).forEach(System.out::println);
		
		System.out.println("Numbers after 22 ::::");
		// Print the numbers after it find '22' in the list
		numbers.stream().dropWhile(num -> num == 11).forEach(System.out::println);
	}

	private static void newTryWithResourceExample() throws IOException, FileNotFoundException {

		ObjectOutputStream objectOutputStream = new ObjectOutputStream(new FileOutputStream("abc.txt"));
		final FileWriter fileWriter = new FileWriter("test.txt");
		try (objectOutputStream; fileWriter) {
			fileWriter.write("Hello!!! try with resource example!!!");
			objectOutputStream.writeInt(66);
		}
	}

	private static void interfaceWithPrivateMethodExample() {
		Application application = new Application();
		System.out.println(application.showNames());
		System.out.println(application.showCity());
		application.show();
	}

	@Override
	public void show() {
		System.out.println("This is show method");
	}
}