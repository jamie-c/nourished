import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const api_key = process.env.CONVERTKIT_API_KEY;
    const api_secret = process.env.CONVERTKIT_API_SECRET;

	const results = await fetch( `https://api.convertkit.com/v3/forms/${body.dataForm}/subscribe`, {
            method: 'POST',
            headers: {"Content-Type": "application/json; charset=utf-8"},
			body: JSON.stringify({
				api_key,
				email: body.email,
                first_name: body?.first_name,
			}),
		},
	);
    const subscription = await results.json();
    return Response.json({subscription});
}
