package io.github.adrianovictorn.lembrete;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LembreteApplication {

	public static void main(String[] args) {
		if (System.getProperty("spring.config.additional-location") == null
			&& System.getenv("SPRING_CONFIG_ADDITIONAL_LOCATION") == null) {
			System.setProperty("spring.config.additional-location", "optional:file:./src/main/resources/");
		}

		SpringApplication.run(LembreteApplication.class, args);
	}

}
