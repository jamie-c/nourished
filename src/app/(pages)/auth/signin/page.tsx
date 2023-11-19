import { transatBold } from "@/app/fonts/fonts"
import FullWidthColorBackground from "@/components/FullWidthColorBackground"
import SignInForm from "@/components/SignInForm"
import IconAccountCircleOutline from "@/components/icons/IconAccountCircleOutline"

const SignInPage = () => {
    return (
        <>
            <FullWidthColorBackground variant="tertiary">
                <IconAccountCircleOutline className="w-32 h-32 mx-auto mb-8" />
                <p
                    className={`${transatBold.className} uppercase text-4xl sm:text-6xl mb-6`}
                >
                    Sign In
                </p>
                <p>
                    Submit your email to receive a one-time link to sign in to
                    your account.
                </p>
            </FullWidthColorBackground>
            <div className="w-full h-32"></div>
            <SignInForm />
        </>
    )
}

export default SignInPage
