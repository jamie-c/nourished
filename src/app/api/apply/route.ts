// route to handle /apply form submission

import dbConnect from "@/db/db";
import Apply from "@/db/models/Apply";
import { sendMail } from "@/lib/sendMail";
import { type FormData, validateFormData } from "@/types/apply-form";
import { type NextRequest, NextResponse } from "next/server";

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

    console.log("🚀 ~ POST ~ message", message);
    console.log("🚀 ~ POST ~ code", code);

    try {
        const emailMessage = [
            `<p>first_name: ${formData.first_name}`,
            `last_name: ${formData.last_name}`,
            `email: ${formData.email}`,
            `phone: ${formData.phone}`,
            `intro: ${formData.intro}`,
            `uncover_the_problem: ${formData.uncover_the_problem}`,
            `more_about_problems: ${formData.more_about_problems}`,
            `solutions_tried: ${formData.solutions_tried}`,
            `future_state: ${formData.future_state}`,
            `beliefs: ${formData.beliefs}`,
            `commitment: ${formData.commitment}`,
            `why_you: ${formData.why_you}`,
            `thank_you: ${formData.thank_you ?? ""}</p>`,
        ].join("</p><p>");
        console.log("🚀 ~ POST ~ message:", message)

        const subject = `New Application from ${formData.first_name} ${formData.last_name}`

        console.log("🚀 ~ POST ~ subject:", subject)
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

    console.log("🚀 ~ POST ~ message", message);
    console.log("🚀 ~ POST ~ code", code);

    return NextResponse.json({
        message,
        code,
        data: newApply,
    })
}
