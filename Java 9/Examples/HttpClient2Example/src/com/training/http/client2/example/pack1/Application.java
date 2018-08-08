/**
 * 
 */
package com.training.http.client2.example.pack1;

/**
 * @author Admin
 *
 */
public class Application {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		TestApiService.getMsg();
		TestApiService.msgWithName();
		TestApiService.msgWithNameWithAsync();
	}
}
