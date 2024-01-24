import { transatBold } from "@/app/fonts/fonts"
import FullWidthColorBackground from "@/components/FullWidthColorBackground"
import IconAccountCircleOutline from "@/components/icons/IconAccountCircleOutline"

const SignupPage = () => {
    return (
        <>
            <FullWidthColorBackground variant="tertiary">
                <IconAccountCircleOutline className="w-32 h-32 mx-auto mb-8" />
                <p
                    className={`${transatBold.className} uppercase text-4xl sm:text-6xl mb-6`}
                >
                    Sign Up
                </p>
                <p>Fill out the form to create an account.</p>
            </FullWidthColorBackground>
            <div className="w-full h-32"></div>
            {/* <SignUpForm /> */}
        </>
    )
}

export default SignupPage
