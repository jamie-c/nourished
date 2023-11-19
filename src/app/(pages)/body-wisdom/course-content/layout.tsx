import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import StyledLink from "@/components/StyledLink"
import { getServerSession } from "next-auth/next"

export default function BodyWisdomCourseLayout({
    children,
}: {
    children: React.ReactNode | React.ReactNode[]
}) {
    const session = getServerSession(authOptions)
    if (session && session.user?.email) {
        return { children }
    } else
        return (
            <>
                <div className="flex flex-col items-center justify-center w-full h-screen">
                    <p className="text-4xl">
                        You must be signed in to access this page.
                    </p>
                    <p className="text-4xl">
                        Please{" "}
                        <StyledLink href="/api/auth/signin">sign in</StyledLink>{" "}
                        or{" "}
                        <StyledLink href="/api/auth/signup">sign up</StyledLink>
                        .
                    </p>
                </div>
            </>
        )
}
