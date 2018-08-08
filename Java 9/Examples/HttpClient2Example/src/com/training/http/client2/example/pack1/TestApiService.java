/**
 * 
 */
package com.training.http.client2.example.pack1;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import jdk.incubator.http.HttpClient;
import jdk.incubator.http.HttpRequest;
import jdk.incubator.http.HttpResponse;
import jdk.incubator.http.HttpRequest.BodyPublisher;

/**
 * @author Admin
 *
 */
public class TestApiService {

	private static final String TEST_API_BASE_URL = "http://localhost:8091/testapi";

	private static final String TEST_API_GET_MSG_URL = "/getMsg";

	private static final String TEST_API_MSG_WITH_NAME_URL = "/msgWithName";

	private static HttpClient httpClient = HttpClient.newHttpClient();

	public static void getMsg() {
		try {
			HttpRequest httpRequest = HttpRequest.newBuilder().uri(new URI(TEST_API_BASE_URL + TEST_API_GET_MSG_URL))
					.GET().build();
			HttpResponse<String> httpResponse = getResponse(httpRequest);
			System.out.println(httpResponse.body());
		} catch (IOException | InterruptedException | URISyntaxException e) {
			e.printStackTrace();
		}
	}

	public static void msgWithName() {
		try {
			HttpRequest httpRequest = HttpRequest.newBuilder()
					.uri(new URI(TEST_API_BASE_URL + TEST_API_MSG_WITH_NAME_URL))
					.POST(BodyPublisher.fromString("Ankit")).build();
			HttpResponse<String> httpResponse = getResponse(httpRequest);
			System.out.println(httpResponse.body());
		} catch (IOException | InterruptedException | URISyntaxException e) {
			e.printStackTrace();
		}
	}

	public static void msgWithNameWithAsync() {
		try {
			HttpRequest httpRequest = HttpRequest.newBuilder()
					.uri(new URI(TEST_API_BASE_URL + TEST_API_MSG_WITH_NAME_URL))
					.POST(BodyPublisher.fromString("Ankit")).build();
			CompletableFuture<HttpResponse<String>> httpResponse = httpClient.sendAsync(httpRequest,
					HttpResponse.BodyHandler.asString());
			System.out.println(httpResponse.get().body());
			System.out.println("Async call completed : " + httpResponse.isDone());
		} catch (InterruptedException | URISyntaxException | ExecutionException e) {
			e.printStackTrace();
		}
	}

	private static HttpResponse<String> getResponse(HttpRequest httpRequest) throws IOException, InterruptedException {

		return httpClient.send(httpRequest, HttpResponse.BodyHandler.asString());
	}
}