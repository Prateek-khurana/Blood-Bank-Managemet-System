package com.bloodbank.hospital.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
import static springfox.documentation.builders.PathSelectors.regex;


@Configuration
@EnableSwagger2
public class swaggerConfig {
	@Bean
	public Docket postsApi() {
		return new Docket(DocumentationType.SWAGGER_2).groupName("bloodbank").apiInfo(apiInfo()).select()
				.paths(regex("/hospital.*")).build();
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder().title("Hospital")
				.description("Swagger for rest api")
				.licenseUrl("no Url Rewuired").version("1.0").build();
	}
	
}

