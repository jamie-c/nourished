"use client";

import { transatBold } from "@/app/fonts/fonts";
import { useState } from "react";
import FullWidthColorBackground from "./FullWidthColorBackground";

const SignUpForm = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
	});

	const [response, setResponse] = useState({
		type: "",
		message: "",
		firstName: "",
		lastName: "",
		email: "",
	});

	const [loading, setLoading] = useState(false);

	// const handleSubmit = async (e: { preventDefault: () => void }) => {
	//     setLoading(true)
	//     e.preventDefault()

	//     const JSONdata = JSON.stringify(formData)
	//     const endpoint = "/api/contact"
	//     const options = {
	//         method: "POST",
	//         headers: {
	//             "Content-Type": "application/json",
	//         },
	//         body: JSONdata,
	//     }
	//     try {
	//         const res = await fetch(endpoint, options)
	//         const json = await res.json()

	//         if (res.ok) {
	//             setResponse({
	//                 ...json.data,
	//                 type: "success",
	//                 message:
	//                     "We've received your message and will be in touch shortly.",
	//             })
	//         } else {
	//             setResponse({
	//                 type: "error",
	//                 message: json.formData.message,
	//                 firstName: " ",
	//                 lastName: " ",
	//                 email: " ",
	//             })
	//         }
	//     } catch (error) {
	//         console.error("Error:", error)
	//         setResponse({
	//             type: "error",
	//             message: "An error occurred while submitting the form.",
	//             firstName: " ",
	//             lastName: " ",
	//             email: " ",
	//         })
	//     }
	//     setLoading(false)
	// }

	if (!response?.message) {
		return (
			<div className="px-4 mx-auto max-w-3xl">
				<form
					className={`${transatBold.className}`}
					// onSubmit={handleSubmit}
					method="POST"
				>
					<div className="relative">
						<input
							id="first-name"
							type="text"
							name="firstName"
							className="peer h-10 p-4 w-full rounded-md
                        border-3 
                        border-bluegreen-500 
                        text-bnlg-500 placeholder-transparent 
                        focus:outline-none focus:border-3"
							placeholder="First Name:"
							required
							value={formData.firstName}
							onChange={(e) =>
								setFormData({
									...formData,
									firstName: e.target.value,
								})
							}
						/>
						<label
							htmlFor="first-name"
							className="absolute capitalize left-1 -top-5 
                        text-lightgreen-500 text-sm 
                        transition-all 
                        peer-placeholder-shown:left-4
                        peer-placeholder-shown:text-base 
                        peer-placeholder-shown:text-bluegreen-500 
                        peer-placeholder-shown:top-2.5 
                        peer-placeholder-shown:uppercase
                        peer-focus:-top-5 
                        peer-focus:left-1 
                        peer-focus:text-lightgreen-500 
                        peer-focus:text-sm 
                        peer-focus:capitalize"
						>
							First Name:
						</label>
					</div>
					<div className="mt-10 relative">
						<input
							id="last-name"
							type="text"
							name="lastName"
							className="peer h-10 p-4 w-full rounded-md
                        border-3 
                        border-bluegreen-500 
                        text-bnlg-500 placeholder-transparent 
                        focus:outline-none focus:border-3"
							placeholder="Last Name:"
							required
							value={formData.lastName}
							onChange={(e) =>
								setFormData({
									...formData,
									lastName: e.target.value,
								})
							}
						/>
						<label
							htmlFor="last-name"
							className="absolute capitalize left-1 -top-5 
                        text-lightgreen-500 text-sm 
                        transition-all 
                        peer-placeholder-shown:left-4
                        peer-placeholder-shown:text-base 
                        peer-placeholder-shown:text-bluegreen-500 
                        peer-placeholder-shown:top-2.5
                        peer-placeholder-shown:uppercase
                        peer-focus:-top-5 
                        peer-focus:left-1 
                        peer-focus:text-lightgreen-500 
                        peer-focus:text-sm 
                        peer-focus:capitalize"
						>
							Last Name:
						</label>
					</div>
					<div className="mt-10 relative">
						<input
							id="email"
							type="email"
							name="email"
							className="peer h-10 p-4 w-full rounded-md
                        border-3 
                        border-bluegreen-500 
                        text-bnlg-500 placeholder-transparent 
                        focus:outline-none focus:border-3"
							placeholder="Email:"
							required
							value={formData.email}
							onChange={(e) =>
								setFormData({
									...formData,
									email: e.target.value,
								})
							}
						/>
						<label
							htmlFor="email"
							className="absolute capitalize left-1 -top-5 
                        text-lightgreen-500 text-sm 
                        transition-all 
                        peer-placeholder-shown:left-4
                        peer-placeholder-shown:text-base 
                        peer-placeholder-shown:text-bluegreen-500 
                        peer-placeholder-shown:top-2.5 
                        peer-placeholder-shown:uppercase
                        peer-focus:-top-5 
                        peer-focus:left-1 
                        peer-focus:text-lightgreen-500 
                        peer-focus:text-sm 
                        peer-focus:capitalize"
						>
							Email:
						</label>
					</div>
					{loading ? (
						<span className="w-full flex flex-row items-center justify-center py-4">
							<div
								className="text-bluegreen-500 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] cursor-not-allowed"
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
							className="mt-10 mb-32 pb-2 pt-3 rounded-md bg-bluegreen-500 hover:bg-opacity-90 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer"
						/>
					)}
				</form>
			</div>
		);
	}
	if (response?.message) {
		return (
			<FullWidthColorBackground variant="white" textColor="dark">
				<p className="text-center text-4xl">{`Hi ${response.firstName}. ${response.message}`}</p>
			</FullWidthColorBackground>
		);
	}
};

export default SignUpForm;
