"use client"

import { transatBold } from "@/app/fonts/fonts"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import FullWidthColorBackground from "./FullWidthColorBackground"

const SignUpForm = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: "",
    })
    const [message, setMessage] = useState("")

    const [response, setResponse] = useState({
        type: "",
        message: "",
        firstName: "",
        lastName: "",
        email: "",
    })

    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        setMessage("Signing in...")
        try {
            const signInResponse = await signIn("email", {
                email: formData.email,
                redirect: false,
            })
            console.log(
                "🚀 ~ file: SignInForm.tsx:33 ~ handleSubmit ~ signInResponse:",
                signInResponse
            )
            if (!signInResponse || signInResponse.ok !== true) {
                // console.error("Error:", signInResponse.error)
                setMessage("Something went wrong!")
            } else {
                router.refresh()
            }
        } catch (error) {
            console.error("Error:", error)
            setMessage("Something went wrong!")
        }
        setResponse({ ...response, message: message })
    }

    if (!response?.message) {
        return (
            <div className="px-4 mx-auto max-w-3xl">
                <form
                    className={`${transatBold.className}`}
                    onSubmit={handleSubmit}
                    method="POST"
                >
                    <div className="mt-10 relative">
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="peer h-10 p-4 w-full rounded-md
                        border-3 
                        border-nblg-500 
                        text-bnlg-500 placeholder-transparent 
                        focus:outline-none focus:border-3"
                            placeholder="Email:"
                            required
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    email: e.target.value,
                                })
                            }
                        />
                        <label
                            htmlFor="email"
                            className="absolute capitalize left-1 -top-5 
                        text-npag-500 text-sm 
                        transition-all 
                        peer-placeholder-shown:left-4
                        peer-placeholder-shown:text-base 
                        peer-placeholder-shown:text-nblg-500 
                        peer-placeholder-shown:top-2.5 
                        peer-placeholder-shown:uppercase
                        peer-focus:-top-5 
                        peer-focus:left-1 
                        peer-focus:text-npag-500 
                        peer-focus:text-sm 
                        peer-focus:capitalize"
                        >
                            Email:
                        </label>
                    </div>
                    {loading ? (
                        <span className="w-full flex flex-row items-center justify-center py-4">
                            <div
                                className="text-nblg-500 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] cursor-not-allowed"
                                role="status"
                            >
                                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                    Loading...
                                </span>
                            </div>
                        </span>
                    ) : (
                        <input
                            type="submit"
                            value="SEND"
                            className="mt-10 mb-32 pb-2 pt-3 rounded-md bg-nblg-500 hover:bg-opacity-90 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer"
                        />
                    )}
                </form>
            </div>
        )
    }
    if (response?.message) {
        return (
            <FullWidthColorBackground variant="white" textColor="dark">
                <p className="text-center text-4xl">{`Hi ${response.firstName}. ${response.message}`}</p>
            </FullWidthColorBackground>
        )
    }
}

export default SignUpForm
