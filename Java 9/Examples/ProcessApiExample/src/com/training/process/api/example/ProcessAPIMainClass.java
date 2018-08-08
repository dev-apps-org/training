/**
 * 
 */
package com.training.process.api.example;

import java.io.IOException;

/**
 * @author Admin
 *
 */
public class ProcessAPIMainClass {

	public static void main(String[] args) throws IOException, InterruptedException {
		ProcessHandle currentProcess = ProcessHandle.current();
		System.out.println("Process ID: " + currentProcess.pid());

		ProcessBuilder processBuilder = new ProcessBuilder("C:\\Program Files\\Internet Explorer\\iexplore.exe");
		Process start = processBuilder.start();
		Thread.sleep(15000);
		start.destroy();
	}
}