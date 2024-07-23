// route to handle /apply form submission

import dbConnect from "@/db/db"
import Apply from "@/db/models/Apply"
import { sendMail } from "@/lib/sendMail"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {

    interface FormData {
        first_name: string
        last_name: string
        email: string
        phone: string
        intro: string
        uncover_the_problem: string
        more_about_problems: string
        solutions_tried: string
        future_state: string
        beliefs: string
        commitment: string
        why_you: string
        thank_you: string
    }

    const formData: FormData = await request.json()
    console.log("🚀 ~ POST ~ formData:", formData)

    const {
        first_name,
        last_name,
        email,
        phone,
        intro,
        uncover_the_problem,
        more_about_problems,
        solutions_tried,
        future_state,
        beliefs,
        commitment,
        why_you,
        thank_you,
    } = formData

    if ( !first_name || !last_name || !email || !phone || !intro || !uncover_the_problem || !more_about_problems || !solutions_tried || !future_state || !beliefs || !commitment || !why_you) {
        return NextResponse.json({ message: "Invalid input" })
    }

    let newApply = null

    try {
        await dbConnect()

        newApply = new Apply({
            first_name,
            last_name,
            email,
            phone,
            intro,
            uncover_the_problem,
            more_about_problems,
            solutions_tried,
            future_state,
            beliefs,
            commitment,
            why_you,
            thank_you,
        })

        await newApply.save()

    } catch (error) {
        return NextResponse.json({ message: "There was an error saving your application, please try again.", code: "application.save" })
    }

    try {
        const message = [
            `<p>first_name: ${first_name}`,
            `last_name: ${last_name}`,
            `email: ${email}`,
            `phone: ${phone}`,
            `intro: ${intro}`,
            `uncover_the_problem: ${uncover_the_problem}`,
            `more_about_problems: ${more_about_problems}`,
            `solutions_tried: ${solutions_tried}`,
            `future_state: ${future_state}`,
            `beliefs: ${beliefs}`,
            `commitment: ${commitment}`,
            `why_you: ${why_you}`,
            `thank_you: ${thank_you ?? ""}</p>`,
        ].join("<br>")
        console.log("🚀 ~ POST ~ message:", message)

        const subject = `New Application from ${first_name} ${last_name}`
        console.log("🚀 ~ POST ~ subject:", subject)

        await sendMail({
            name: `${first_name} ${last_name}`,
            email,
            message,
            subject,
        }).catch(console.error)

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "There was an error sending your application.", code: "application.send" })
    }

    return NextResponse.json({
        message: "Application received",
        code: "application.success",
        data: newApply,
    })
}
