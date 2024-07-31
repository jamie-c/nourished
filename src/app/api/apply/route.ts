// route to handle /apply form submission

import dbConnect from "@/db/db";
import Apply from "@/db/models/Apply";
import { sendMail } from "@/lib/sendMail";
import { type FormData, validateFormData } from "@/types/apply-form";
import { type NextRequest, NextResponse } from "next/server";

export const runtime = 'edge';

await dbConnect();

export async function POST(request: NextRequest) {
    const formData: FormData = await request.json();

    const {isValid, errors, data} = validateFormData(formData);

    if (!isValid) {
        return NextResponse.json({ message: errors?.[0] ?? "Invalid input", code: "error.application.invalid" });
    }

    let newApply = null;
    let message: string | null = "Application received";
    let code: string | null = "success.application";

    try {
        newApply = new Apply({...formData});
        await newApply.save();

    } catch (error) {
        console.error("Error saving application submission:", error);
        message = "There was an error saving your application, please try again.";
        code = "error.application.save";
    }

    try {
        const emailMessage = [
            `<p>First Name: ${formData.first_name}`,
            `Last Name: ${formData.last_name}`,
            `Email: ${formData.email}`,
            `Phone: ${formData.phone}`,
            `Intro: ${formData.intro}`,
            `Uncover The Problem: ${formData.uncover_the_problem}`,
            `More About Problems: ${formData.more_about_problems}`,
            `Solutions Tried: ${formData.solutions_tried}`,
            `Future State: ${formData.future_state}`,
            `Beliefs: ${formData.beliefs}`,
            `Commitment: ${formData.commitment}`,
            `Why You: ${formData.why_you}`,
            `Thank You: ${formData.thank_you ?? ""}</p>`,
        ].join("</p><p>");

        const subject = `New Application from ${formData.first_name} ${formData.last_name}`

        await sendMail({
            name: `${formData.first_name} ${formData.last_name}`,
            email: formData.email,
            message: emailMessage,
            subject,
        }).catch(console.error)
    } catch (error) {
        console.error("Error sending Apply email:", error);
        message = "There was an error sending your application, please try again."
        code = "error.application.send"
    }

    return NextResponse.json({
        message,
        code,
        data: newApply,
    })
}
