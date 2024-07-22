// route to handle contact form submission

import dbConnect from "@/db/db";
import Contact from "@/db/models/Contact";
import { sendMail } from "@/lib/sendMail";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
	interface FormData {
		firstName: string;
		lastName: string;
		email: string;
		message: string;
	}

	await dbConnect();

	const formData: FormData = await request.json();

	const { firstName, lastName, email, message }: FormData = formData;

	if (request.method !== "POST") {
		return NextResponse.json({ message: "Method not allowed" });
	}

	if (!firstName || !lastName || !email || !message) {
		return NextResponse.json({ message: "Invalid input" });
	}

	const newContact = new Contact({
		firstName,
		lastName,
		email,
		message,
	});

	await newContact.save();

	await sendMail({ name: `${firstName} ${lastName}`, email, message }).catch(
		console.error,
	);

	return NextResponse.json({ message: "Message received", data: newContact });
}
