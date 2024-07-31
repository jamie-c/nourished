import type { NFCSubscribeFormData } from "@/types/subscribe-form";
import { validateFormData } from "@/types/subscribe-form";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: NextRequest) {
    const formData: NFCSubscribeFormData = await request.json();

    const {isValid, errors, data} = validateFormData(formData);

    if (!isValid) {
        return NextResponse.json({ message: errors?.[0] ?? "Invalid input", code: "error.application.invalid" });
    }
    const body = await request.json()
    const api_key = process.env.CONVERTKIT_API_KEY
    const api_secret = process.env.CONVERTKIT_API_SECRET

    try {
        const results = await fetch(
            `https://api.convertkit.com/v3/forms/${body.dataForm}/subscribe`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json; charset=utf-8" },
                body: JSON.stringify({
                    api_key,
                    email: body.email,
                    first_name: body?.first_name,
                }),
            }
        )
        const subscription = await results.json()
        return NextResponse.json(subscription)
    } catch (error) {
        console.error(error)
        return NextResponse.error()
    }
}
