// route to handle contact form submission

import dbConnect from "@/db/db";
import Contact from "@/db/models/Contact";
import { sendMail } from "@/lib/sendMail";
import {
	type NFCContactFormData,
	validateFormData,
} from "@/types/contact-form";
import { type NextRequest, NextResponse } from "next/server";

await dbConnect();

export async function POST(request: NextRequest) {
	const formData: NFCContactFormData = await request.json();

	const { isValid, errors, data } = validateFormData(formData);

    if (!isValid) {
        return NextResponse.json({ response_message: errors?.[0] ?? "Invalid input", code: "error.application.invalid" });
    }

    let newContact = null;
    let response_message: string | null = "Message received";
    let code: string | null = "success.contact";

    try {
        newContact = new Contact({...formData});
        await newContact.save();

    } catch (error) {
        console.error("Error saving application:", error);
        response_message = "There was an error saving your message, please try again.";
        code = "error.contact.save";
    }

	try{
	const subject = "New message from the Nourished contact form";

	await sendMail({
		name: `${formData.first_name} ${formData.last_name}`,
		email: formData.email,
		message: formData.message,
		subject,
	}).catch(console.error);

	} catch (error) {
		console.error("Error sending Contact email:", error);
		response_message = "There was an error sending your message, please try again.";
		code = "error.contact.email";
	}

	return NextResponse.json({ response_message, code, data: newContact });
}
