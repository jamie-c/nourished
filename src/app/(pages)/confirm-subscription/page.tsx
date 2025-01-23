import FullWidthColorBackground from "@/components/FullWidthColorBackground"

export default function Page() {
    return (
        <>
            <main className="top-0 w-full flex flex-col items-center justify-start">
                <FullWidthColorBackground variant="white" textColor="secondary">
                    <h2 className="font-transat-bold text-4xl text-center uppercase mb-16 text-darkgreen-500">
                        Subscription Confirmed!
                    </h2>
                    <p className="max-w-2xl text-balance">
                        Boom! You&apos;re officially confirmed and on the list.
                        Expect some great emails headed your way very soon.
                    </p>
                </FullWidthColorBackground>
            </main>
        </>
    )
}
