// route to return course sections

import type { NextRequest, NextResponse } from "next/server"
import { bodyWisdomCourseSections } from "../courseSections"

export async function GET(request: NextRequest, response: NextResponse) {
    // return all course sections
    return new Response(JSON.stringify(bodyWisdomCourseSections), {
        headers: {
            "content-type": "application/json",
        },
    })
}
