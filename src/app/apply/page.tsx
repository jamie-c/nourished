"use client";

import FullWidthColorBackground from "@/components/FullWidthColorBackground";
import FullWidthImageBehindGradient from "@/components/FullWidthImageBehindGradient";
import { NFCRadio, NFCText, NFCTextArea } from "@nourishedco/ui";
import { useState } from "react";

const commitmentOptions = [
	{
		label: "I'm fully committed and ready to invest.",
		value: "I'm fully committed and ready to invest.",
	},
	{
		label: "I'm ready and need more information.",
		value: "I'm ready and need more information.",
	},
	{
		label: "I'm ready, but cannot invest financially right now.",
		value: "I'm ready, but cannot invest financially right now.",
	},
	{ label: "I'm not willing.", value: "I'm not willing." },
];

export default function Home() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
		intro: "",
		uncover_the_problem: "",
		commitment: "",
		more_about_problems: "",
		solutions_tried: "",
		future_state: "",
		beliefs: "",
		why_you: "",
		thank_you: "",
	});

	const [response, setResponse] = useState({
		type: "",
		message: "",
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		intro: "",
		uncover_the_problem: "",
		commitment: "",
		more_about_problems: "",
		solutions_tried: "",
		future_state: "",
		beliefs: "",
		why_you: "",
		thank_you: "",
	});

	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		setLoading(true);
		e.preventDefault();

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

			if (res.ok) {
				setResponse({
					...json.data,
					type: "success",
					message: "We've received your message and will be in touch shortly.",
				});
			} else {
				setResponse({
					type: "error",
					message: json.formData.message,
					firstName: "",
					lastName: "",
					email: "",
					phone: "",
					intro: "",
					uncover_the_problem: "",
					commitment: "",
					more_about_problems: "",
					solutions_tried: "",
					future_state: "",
					beliefs: "",
					why_you: "",
					thank_you: "",
				});
			}
		} catch (error) {
			console.error("Error:", error);
			setResponse({
				type: "error",
				message: "An error occurred while submitting the form.",
				firstName: "",
				lastName: "",
				email: "",
				phone: "",
				intro: "",
				uncover_the_problem: "",
				commitment: "",
				more_about_problems: "",
				solutions_tried: "",
				future_state: "",
				beliefs: "",
				why_you: "",
				thank_you: "",
			});
		}
		setLoading(false);
	};
	return (
		<main className="top-0 w-full flex min-h-screen flex-col items-center justify-start">
			<FullWidthImageBehindGradient
				variant="primary"
				imageUrl="/images/lindsey-headshots-032.jpg"
				align="center"
			>
				<p className="font-transat-bold w-full text-center drop-shadow-lg uppercase">
					Application
				</p>
			</FullWidthImageBehindGradient>
			<FullWidthColorBackground variant="white" textColor="secondary">
				<h1 className="font-transat-black text-balance pt-2 sm:pt-3 text-3xl sm:text-5xl text-center">
					<span className="text-lightgreen-500 uppercase">Your </span>
					<span className="text-brightgreen-500 uppercase">
						Microbiome Makeover
					</span>
					<span className="text-bluegreen-500 uppercase"> Application</span>
				</h1>
				<div className="text-darkgreen-500 space-y-4 py-8 text-2xl">
					<p>Your 1:1 Coaching Program to Restore Your Gut Health and</p>
					<p className="underline underline-offset-4 decoration-current font-transat-bold">
						transform your health from the inside out…
					</p>
					<p>
						Once you complete and submit your application, you will be
						automatically redirected to a new page where you can schedule your
						one-on-one Strategy Session with me.
					</p>
				</div>
			</FullWidthColorBackground>
			<form
				className="font-transat-bold flex flex-col gap-10 w-full max-w-screen-sm p-2"
				onSubmit={handleSubmit}
				method="POST"
			>
				<NFCText
					label="First Name"
					placeholder="First Name"
					value={formData.firstName}
					onChange={(e) =>
						setFormData({ ...formData, firstName: e.target.value })
					}
				/>
				<NFCText
					label="Last Name"
					placeholder="Last Name"
					value={formData.lastName}
					onChange={(e) =>
						setFormData({ ...formData, lastName: e.target.value })
					}
				/>
				<NFCText
					label="Email"
					placeholder="Email"
					value={formData.email}
					onChange={(e) => setFormData({ ...formData, email: e.target.value })}
				/>
				<NFCText
					label="Phone"
					placeholder="Phone"
					value={formData.phone}
					onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
				/>
				<NFCTextArea
					label="Intro"
					placeholder="How did you hear about coaching with Nourished Co?"
					value={formData.intro}
					onChange={(e) => setFormData({ ...formData, intro: e.target.value })}
				/>
				<NFCTextArea
					label="Uncover The Problem"
					placeholder="WHAT PROBLEMS ARE YOU CURRENTLY FACING WITH YOUR GUT OR HEALTH? Ex: bloating, constipation, joint pain, fatigue"
					value={formData.uncover_the_problem}
					onChange={(e) =>
						setFormData({ ...formData, uncover_the_problem: e.target.value })
					}
				/>
				<NFCTextArea
					label="More About Problems"
					placeholder="HOW IS THIS IMPACTING YOUR LIFE ON A DAY-TO-DAY BASIS?"
					value={formData.more_about_problems}
					onChange={(e) =>
						setFormData({ ...formData, more_about_problems: e.target.value })
					}
				/>
				<NFCTextArea
					label="Solutions Tried"
					placeholder="WHAT HAVE YOU TRIED TO RESOLVE THESE PROBLEMS?"
					value={formData.solutions_tried}
					onChange={(e) =>
						setFormData({ ...formData, solutions_tried: e.target.value })
					}
				/>
				<NFCTextArea
					label="Future State"
					placeholder="WHAT ARE YOUR TOP 3 HEALTH GOALS?"
					value={formData.future_state}
					onChange={(e) =>
						setFormData({ ...formData, future_state: e.target.value })
					}
				/>
				<NFCTextArea
					label="Intro"
					placeholder="DO YOU BELIEVE YOU CAN AND WILL ACHIEVE YOUR DESIRED HEALTH GOALS? Yes? No? Unsure? Feel free to share your full thoughts here."
					value={formData.beliefs}
					onChange={(e) =>
						setFormData({ ...formData, beliefs: e.target.value })
					}
				/>
				<NFCRadio
					name="commitment"
					label="How willing are you to take action and invest in the growth of your health right now?"
					help="Microbiome Makeover is a high-touch 1:1 coaching program designed to help transform your health (and life) from the inside out."
					options={commitmentOptions}
					value={formData.commitment}
					onChange={(e) =>
						setFormData({ ...formData, commitment: e.target.value })
					}
				/>
				<NFCTextArea
					label="Intro"
					placeholder="THIS PROGRAM IS DESIGNED FOR ACTION-ORIENTED WOMEN WHO ARE READY TO LEARN, GROW, BE COACHED, AND INVEST IN THEMSELVES. Please share a few words about why you are a good fit for a coaching spot. Anything I need to know to move forward with you?"
					value={formData.why_you}
					onChange={(e) =>
						setFormData({ ...formData, why_you: e.target.value })
					}
				/>
				<NFCTextArea
					label="Thank You"
					placeholder="THANK YOU FOR SHARING MORE ABOUT YOUR HEALTH GOALS. If you have anything questions you'd like answered, feel free to leave them here."
					value={formData.thank_you}
					onChange={(e) =>
						setFormData({ ...formData, thank_you: e.target.value })
					}
				/>
			</form>
		</main>
	);
}
