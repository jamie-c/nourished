// route to return course sections

import { NextRequest, NextResponse } from "next/server"
import { bodyWisdomCourseSections } from "../courseSections"

export async function GET(request: NextRequest, response: NextResponse) {
    const sections = bodyWisdomCourseSections.map((section) => {
        return section.title
    })
    // return course sections
    return new Response(JSON.stringify(sections), {
        headers: {
            "content-type": "application/json",
        },
    })
}
