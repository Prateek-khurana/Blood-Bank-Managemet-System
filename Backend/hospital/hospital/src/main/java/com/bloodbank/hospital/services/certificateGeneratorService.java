package com.bloodbank.hospital.services;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bloodbank.hospital.model.donor;
import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Font;
import com.itextpdf.text.Font.FontFamily;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;

@Service
public class certificateGeneratorService {

	@Autowired
	private emailService eService;

	public void generatecertificate(donor d) throws FileNotFoundException, DocumentException {
		System.out.println("Reached int certificate method");
		String name = "C:\\Users\\prate\\OneDrive\\Desktop\\blood bank\\spring intial\\pdf\\" + d.getDonor_name() + "_id_"
				+ d.getDonor_phone_number() + ".pdf";
		Document document = new Document();
		PdfWriter.getInstance(document, new FileOutputStream(name));
		document.open();
		document.addTitle("DONATION CERTIFICATE");
		document.addHeader(d.getDonor_name(), "DONATION CERTIFICATE");
		String para = "This is to Certify that " + d.getDonor_name() + " has donated " + d.getQuantity_donated()
				+ " units of " + d.getDonor_blood_group() + " blood on the date " + d.getDonation_date();
		String para2 = " We are thankful to " + d.getDonor_name() + " and wish them luck for their future. ";
		Font f = new Font(FontFamily.TIMES_ROMAN, 20.0f, Font.UNDERLINE, BaseColor.BLACK);
		Paragraph p = new Paragraph("DONATION CERTIFICATE", f);
		p.setAlignment(Paragraph.ALIGN_CENTER);
		document.add(p);
		p.setSpacingAfter(50);
		document.add(new Paragraph(" "));
		document.add(new Paragraph(" "));
		document.add(new Paragraph(para));
		document.add(new Paragraph(para2));
		document.close();

		try {
			System.out.println("Entered email Service");
			eService.sendSimpleEmail(d.getDonor_email(),"Blood Donation Certificate","Blood donation",name);
			System.out.println("email sent");
		} catch (MessagingException e) {
			System.out.println("Error while sending email");
			e.printStackTrace();
		}

	}
}
