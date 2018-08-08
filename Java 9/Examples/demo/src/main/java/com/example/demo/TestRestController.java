/**
 * 
 */
package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Admin
 *
 */
@RestController
public class TestRestController {

	@GetMapping(value = "/getMsg", produces = "application/json")
	public String getMsg() {

		return "This is test rest api";
	}

	@PostMapping(value = "/msgWithName", produces = "application/json")
	public String msgWithName(@RequestBody String name) {

		return "Welcome to Java 9 Training, " + name;
	}
}
