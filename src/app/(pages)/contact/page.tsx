"use client";

import FullWidthColorBackground from "@/components/FullWidthColorBackground";
import {
	type NFCContactFormData,
	validateFormData,
} from "@/types/contact-form";
import { NFCButton, NFCText, NFCTextArea } from "@nourishedco/ui";
import { useState } from "react";

const Form = () => {
	const [formData, setFormData] = useState<NFCContactFormData>({
		first_name: "",
		last_name: "",
		email: "",
		message: "",
	});

	const [response, setResponse] = useState<
		NFCContactFormData & { type: string; response_message: string }
	>({
		type: "",
		response_message: "",
		first_name: "",
		last_name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();

		const { isValid, errors, data } = validateFormData(formData);
		if (!isValid) {
			console.error("Invalid input", errors);
			setResponse({
				...formData,
				type: "error",
				response_message: errors?.[0] ?? "Invalid input",
			});
			return;
		}

		setLoading(true);

		const JSONdata = JSON.stringify(formData);
		const endpoint = "/api/contact";
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSONdata,
		};
		try {
			const res = await fetch(endpoint, options);
			const json = await res.json();

			if (json.code === "success.contact") {
				setResponse({
					...json.data,
					type: "success",
					response_message:
						"We've received your message and will be in touch shortly.",
				});
			} else {
				setResponse({
					...formData,
					type: "error",
					response_message:
						json.message ?? "An error occurred while submitting the form.",
				});
			}
		} catch (error) {
			console.error("Error:", error);
			setResponse({
				...formData,
				type: "error",
				response_message: "An error occurred while submitting the form.",
			});
		}
		setLoading(false);
	};

	if (response?.type !== "success") {
		return (
			<form
				className="font-transat-bold flex flex-col gap-10"
				onSubmit={handleSubmit}
				method="POST"
			>
				<NFCText
					label="First Name"
					placeholder="First Name"
					value={formData.first_name}
					onChange={(e) =>
						setFormData({ ...formData, first_name: e.target.value })
					}
				/>
				<NFCText
					label="Last Name"
					placeholder="Last Name"
					value={formData.last_name}
					onChange={(e) =>
						setFormData({ ...formData, last_name: e.target.value })
					}
				/>
				<NFCText
					label="Email"
					placeholder="Email"
					value={formData.email}
					onChange={(e) => setFormData({ ...formData, email: e.target.value })}
				/>
				<NFCTextArea
					label="Message"
					placeholder="Your Questions or Comments:"
					value={formData.message}
					onChange={(e) =>
						setFormData({ ...formData, message: e.target.value })
					}
				/>
				{response?.type === "error" && (
					<p className="text-red-500 text-center">
						Error: &quot;{response.response_message}
						&quot;
					</p>
				)}
				<NFCButton type="submit" loading={loading} classes="h-10 relative">
					SEND
				</NFCButton>
			</form>
		);
	}
	return (
		<FullWidthColorBackground variant="white" textColor="dark">
			<p className="text-center text-4xl">{`Hi ${response.first_name}. ${response.response_message}`}</p>
		</FullWidthColorBackground>
	);
};

function Page() {
	return (
		<>
			<FullWidthColorBackground variant="dark">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={0.8}
					stroke="currentColor"
					className="w-32 h-32 mx-auto mb-8"
				>
					<title>Chat Icon</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
					/>
				</svg>
				<p className="font-transat-bold uppercase text-4xl sm:text-6xl mb-6 drop-shadow-lg">
					Want to Chat?
				</p>
				<p>We&apos;ll respond as soon as possible.</p>
			</FullWidthColorBackground>
			<FullWidthColorBackground variant="white" textColor="dark">
				<p className="uppercase font-transat">
					To get in touch with us, fill out the form.
				</p>
			</FullWidthColorBackground>
			<div className="px-4 mx-auto max-w-3xl mb-24">
				<Form />
			</div>
		</>
	);
}

export default Page;
