package com.bloodbank.hospital.services;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

import javax.net.ssl.HttpsURLConnection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bloodbank.hospital.model.donor;
import com.bloodbank.hospital.repositories.DonorRepository;

@Service
public class smsService {

	@Autowired
	private DonorRepository donorRepo;

	// filtering out donors to be messaged
	public List<String> getDonorNumbers(String blood_group) {
		String number = "";
		List<String> numberList= new ArrayList<>();
		List<donor> donorList = donorRepo.findByBloodGroup(blood_group);
		System.out.println(donorList);
		List<donor> filteredList = new ArrayList<>();
		for (donor d : donorList) {
			if (d.getDonation_date().plusWeeks(8).compareTo(java.time.LocalDate.now()) < 0) {
				filteredList.add(d);
			}
		}
		System.out.println("Filtered List is ");
		String message = "Hello donor, we are very greatful for your donations so far but we at the blood bank are running short of "
				+ " " + blood_group
				+ " since you are eligible to donate blood again we request you to step up for this noble cause and save some more "
				+ " lives. Regards- Prateek Blood Bank.";
		System.out.println(filteredList);

		if (filteredList.isEmpty()) {
			System.out.println("No donor is eligible to donate yet");
		} else {
			for (donor d : filteredList) {
				System.out.println(d.getDonor_phone_number());
				number = d.getDonor_phone_number();
				numberList.add(number);
				sendMessage(message, d.getDonor_phone_number());
			}
		}
		return numberList;
	}

	// ============================================================================================

	public static void sendMessage(String message, String number) {
//		System.out.println(message);
//		System.out.println(number);
		try {

			String apiKey = "";
			String sendId = "FastSM";
			// important step...
			message = URLEncoder.encode(message, "UTF-8");
			String language = "english";

			String route = "p";

			String myUrl = "https://www.fast2sms.com/dev/bulk?authorization=" + apiKey + "&sender_id=" + sendId
					+ "&message=" + message + "&language=" + language + "&route=" + route + "&numbers=" + number;

			// sending get request using java..

			URL url = new URL(myUrl);

			HttpsURLConnection con = (HttpsURLConnection) url.openConnection();

			con.setRequestMethod("GET");

			con.setRequestProperty("User-Agent", "Mozilla/5.0");
			con.setRequestProperty("cache-control", "no-cache");
			System.out.println("Wait..............");

			int code = con.getResponseCode();

			System.out.println("Response code : " + code);

			StringBuffer response = new StringBuffer();

			BufferedReader br = new BufferedReader(new InputStreamReader(con.getInputStream()));

			while (true) {
				String line = br.readLine();
				if (line == null) {
					break;
				}
				response.append(line);
			}

			System.out.println(response);

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}

	}
}
