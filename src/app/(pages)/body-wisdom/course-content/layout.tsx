import { auth } from "@/auth";
import StyledLink from "@/components/StyledLink";
import type { ReactNode } from "react";

function BodyWisdomCourseLayout({ children }: { children: ReactNode | ReactNode[] }) {
    const session = Promise.resolve(auth());
    console.log("🚀 ~ file: layout.tsx:10 ~ session:", session)
    if (!session) {
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
    return (children)
}

export default BodyWisdomCourseLayout;