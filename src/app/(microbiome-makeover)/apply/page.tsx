"use client";

import FullWidthColorBackground from "@/components/FullWidthColorBackground";
import FullWidthImageBehindGradient from "@/components/FullWidthImageBehindGradient";
import { type NFCApplyFormData, validateFormData } from "@/types/apply-form";
import { NFCButton, NFCRadio, NFCText, NFCTextArea } from "@nourishedco/ui";
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
	const [formData, setFormData] = useState<NFCApplyFormData>({
		first_name: "",
		last_name: "",
		email: "",
		phone: "",
		intro: "",
		uncover_the_problem: "",
		more_about_problems: "",
		solutions_tried: "",
		future_state: "",
		beliefs: "",
		commitment: "",
		why_you: "",
		thank_you: "",
	});

	const [response, setResponse] = useState<
		{ data: NFCApplyFormData } & { type: string; message: string }
	>({
		type: "",
		message: "",
		data: {
			first_name: "",
			last_name: "",
			phone: "",
			email: "",
			intro: "",
			uncover_the_problem: "",
			more_about_problems: "",
			solutions_tried: "",
			future_state: "",
			beliefs: "",
			commitment: "",
			why_you: "",
			thank_you: "",
		},
	});

	const [errors, setErrors] = useState<Partial<
		Record<keyof NFCApplyFormData, string>
	> | null>(null);

	const [loading, setLoading] = useState(false);

	function validate() {
		const { isValid, errors } = validateFormData(formData);
		if (!isValid) {
			setErrors(errors);
		}
	}

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();

		const { isValid, errors, data } = validateFormData(formData);
		if (!isValid) {
			console.error("Invalid input", errors);
			setErrors(errors);
			return;
		}

		setLoading(true);

		const JSONdata = JSON.stringify(formData);
		const endpoint = "/api/apply";
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
			console.log("🚀 ~ handleSubmit ~ json:", json);

			if (json.code === "success.application") {
				setResponse({
					data: {
						...json.data,
					},
					type: "success",
					message:
						"You're application has been received and I am excited for you!",
				});
			} else {
				setResponse({
					data: {
						...formData,
					},
					type: "error",
					message:
						json.message ?? "An error occurred while submitting the form.",
				});
			}
		} catch (error) {
			console.error("Error:", error);
			setResponse({
				type: "error",
				message: "An error occurred while submitting the form.",
				data: {
					first_name: "",
					last_name: "",
					email: "",
					phone: "",
					intro: "",
					uncover_the_problem: "",
					more_about_problems: "",
					solutions_tried: "",
					future_state: "",
					beliefs: "",
					commitment: "",
					why_you: "",
					thank_you: "",
				},
			});
		}
		setLoading(false);
	};
	return (
		<main className="top-0 w-full flex min-h-screen flex-col items-center justify-start mb-24">
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
				<div className="text-darkgreen-500 space-y-4 pt-8 text-2xl">
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
			{response?.type !== "success" ? (
				<form
					className="font-transat-bold flex flex-col gap-10 w-full max-w-screen-sm p-2"
					onSubmit={handleSubmit}
					method="POST"
				>
					<NFCText
						label="First Name"
						placeholder="First Name"
						value={formData.first_name}
						error={errors?.first_name ?? ""}
						required
						onChange={(e) => {
							setFormData({ ...formData, first_name: e.target.value });
							setErrors({ ...errors, first_name: "" });
							validate();
						}}
					/>
					<NFCText
						label="Last Name"
						placeholder="Last Name"
						value={formData.last_name}
						error={errors?.last_name ?? ""}
						required
						onChange={(e) => {
							setFormData({ ...formData, last_name: e.target.value });
							setErrors({ ...errors, last_name: "" });
							validate();
						}}
					/>
					<NFCText
						label="Email"
						placeholder="Email"
						value={formData.email}
						error={errors?.email ?? ""}
						required
						onChange={(e) => {
							setFormData({ ...formData, email: e.target.value });
							setErrors({ ...errors, email: "" });
							validate();
						}}
					/>
					<NFCText
						label="Phone"
						placeholder="Phone"
						value={formData.phone}
						error={errors?.phone ?? ""}
						required
						onChange={(e) => {
							setFormData({ ...formData, phone: e.target.value });
							setErrors({ ...errors, phone: "" });
							validate();
						}}
					/>
					<NFCTextArea
						label="Intro"
						placeholder="How did you hear about coaching with Nourished Co?"
						value={formData.intro}
						error={errors?.intro ?? ""}
						required
						onChange={(e) => {
							setFormData({ ...formData, intro: e.target.value });
							setErrors({ ...errors, intro: "" });
							validate();
						}}
					/>
					<div className="flex flex-col gap-6">
						<span className="p-1 text-bluegreen-500 text-lg font-transat-black">
							What problems are you currently facing with your gut or health?
						</span>
						<NFCTextArea
							label="Uncover The Problem"
							placeholder="Ex: bloating, constipation, joint pain, fatigue"
							value={formData.uncover_the_problem}
							error={errors?.uncover_the_problem ?? ""}
							required
							onChange={(e) => {
								setFormData({
									...formData,
									uncover_the_problem: e.target.value,
								});
								setErrors({ ...errors, uncover_the_problem: "" });
								validate();
							}}
						/>
					</div>
					<NFCTextArea
						label="More About Problems"
						placeholder="HOW IS THIS IMPACTING YOUR LIFE ON A DAY-TO-DAY BASIS?"
						value={formData.more_about_problems}
						error={errors?.more_about_problems ?? ""}
						required
						onChange={(e) => {
							setFormData({ ...formData, more_about_problems: e.target.value });
							setErrors({ ...errors, more_about_problems: "" });
							validate();
						}}
					/>
					<NFCTextArea
						label="Solutions Tried"
						placeholder="WHAT HAVE YOU TRIED TO RESOLVE THESE PROBLEMS?"
						value={formData.solutions_tried}
						error={errors?.solutions_tried ?? ""}
						required
						onChange={(e) => {
							setFormData({ ...formData, solutions_tried: e.target.value });
							setErrors({ ...errors, solutions_tried: "" });
							validate();
						}}
					/>
					<NFCTextArea
						label="Future State"
						placeholder="WHAT ARE YOUR TOP 3 HEALTH GOALS?"
						value={formData.future_state}
						error={errors?.future_state ?? ""}
						required
						onChange={(e) => {
							setFormData({ ...formData, future_state: e.target.value });
							setErrors({ ...errors, future_state: "" });
							validate();
						}}
					/>
					<div className="flex flex-col gap-6">
						<span className="p-1 text-bluegreen-500 text-lg font-transat-black">
							Do you believe you can and will achieve your desired health goals?
						</span>
						<NFCTextArea
							label="Intro"
							placeholder="Yes? No? Unsure? Feel free to share your full thoughts here."
							value={formData.beliefs}
							error={errors?.beliefs ?? ""}
							required
							onChange={(e) => {
								setFormData({ ...formData, beliefs: e.target.value });
								setErrors({ ...errors, beliefs: "" });
								validate();
							}}
						/>
					</div>
					<NFCRadio
						name="commitment"
						label="How willing are you to take action and invest in the growth of your health right now?"
						help="Microbiome Makeover is a high-touch 1:1 coaching program designed to help transform your health (and life) from the inside out."
						options={commitmentOptions}
						value={formData.commitment}
						error={errors?.commitment ?? ""}
						required
						onChange={(e) => {
							setFormData({ ...formData, commitment: e.target.value });
							setErrors({ ...errors, commitment: "" });
							validate();
						}}
					/>
					<div className="flex flex-col gap-6">
						<span className="p-1 text-bluegreen-500 text-lg font-transat-black">
							This program is designed for action-oriented women who are ready
							to learn, grow, be coached, and invest in themselves.
						</span>
						<NFCTextArea
							label="Intro"
							placeholder="Please share a few words about why you are a good fit for a coaching spot. Anything I need to know to move forward with you?"
							value={formData.why_you}
							error={errors?.why_you ?? ""}
							required
							onChange={(e) => {
								setFormData({ ...formData, why_you: e.target.value });
								setErrors({ ...errors, why_you: "" });
								validate();
							}}
						/>
					</div>
					<div className="flex flex-col gap-6">
						<span className="p-1 text-bluegreen-500 text-lg font-transat-black">
							Thank you for sharing more about your health goals.
						</span>
						<NFCTextArea
							label="Thank You"
							placeholder="If you have anything questions you'd like answered, feel free to leave them here."
							value={formData.thank_you ?? ""}
							error={errors?.thank_you ?? ""}
							onChange={(e) => {
								setFormData({ ...formData, thank_you: e.target.value });
								setErrors({ ...errors, thank_you: "" });
								validate();
							}}
						/>
					</div>
					{response?.type === "error" && (
						<p className="text-red-500 text-center">
							There was an error: &quot;{response.message}&quot;
						</p>
					)}
					<NFCButton type="submit" loading={loading} classes="h-10 relative">
						SUBMIT
					</NFCButton>
				</form>
			) : (
				<FullWidthColorBackground variant="white" textColor="dark">
					<p className="text-center text-4xl">{`Hi ${response.data.first_name}! ${response.message}`}</p>
				</FullWidthColorBackground>
			)}
		</main>
	);
}
