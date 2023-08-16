// route to handle contact form submission

import { sendMail } from "@/lib/sendMail"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const formData = await req.json()

    const { firstName, lastName, email, message } = formData
    
    if (req.method !== "POST") {
        return NextResponse.json({ message: "Method not allowed" })
    }
    
    if (!firstName || !lastName || !email || !message) {
        return NextResponse.json({ message: "Invalid input" })
    }

    const sent = await sendMail({name:`${firstName} ${lastName}`, email, message}).catch(console.error)
    
    return NextResponse.json({ sent })

}