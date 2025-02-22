import type { NextRequest, NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

export async function GET(request: NextRequest, response: NextResponse) {
	const fileName = request.headers.get("file-name");

	const filePath = fileName
		? path.join(
				process.cwd(),
				"src/app/(pages)/body-wisdom/assets/static/files",
				fileName,
		  )
		: "";

	try {
		const fileContent = fs.readFileSync(filePath);

		if (response) {
			response.headers?.set("Content-Type", "application/pdf");
			response.headers?.set(
				"Content-Disposition",
				`attachment; filename="${fileName}"`,
			);

			return new Response(fileContent, response);
		}
			throw new Error("Response object is undefined");
	} catch (error) {
		console.error(error);
		return new Response("Internal Server Error", {
			status: 500,
		});
	}
}
