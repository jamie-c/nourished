"use client"
import { useSession } from "next-auth/react"

function Page() {
    const { data: session } = useSession()
    return (
        <div className="min-h-screen w-screen flex flex-col items-center">
            <div className="max-w-7xl w-screen sm:w-7xl pl-4 pt-16">
                <h1 className="text-3xl mb-10">
                    Welcome to the Body Wisdom Course!
                </h1>
                {session && (
                    <>
                        <p>{session?.user.name}</p>
                        <p>{session?.user.email}</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default Page
