"use client";
import { NFCButton } from "@nourishedco/ui";
import { useState } from "react";

export default function ConvertKitForm({
	scriptSrc,
	actionUrl,
	dataForm,
	dataUid,
	successMessage,
}: {
	scriptSrc: string;
	actionUrl: string;
	dataForm: string;
	dataUid: string;
	successMessage: string;
}) {
	const [formData, setFormData] = useState({
		first_name: "",
		email: "",
		actionUrl,
		dataForm,
		dataUid,
	});

	interface FormResponse {
		id: number | null;
		state: string;
		created_at: string;
		source: string | null;
		referrer: string | null;
		subscribable_id: number;
		subscribable_type: string;
		subscriber: {
			id: number | null;
		};
		message?: string;
		error?: string;
	}

	const defaultSubscription: FormResponse = {
		id: null,
		state: "",
		created_at: "",
		source: null,
		referrer: null,
		subscribable_id: 1,
		subscribable_type: "",
		subscriber: {
			id: null,
		},
	};

	const [subscription, setSubscription] = useState<FormResponse>(
		structuredClone(defaultSubscription),
	);

	const [loading, setLoading] = useState(false);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setLoading(true);
		setSubscription(structuredClone(defaultSubscription));

		try {
			const results = await fetch("/api/subscribe", {
				method: "POST",
				headers: {
					"Content-Type": "application/json; charset=utf-8",
				},
				body: JSON.stringify(formData),
			});
			const json = await results.json();
			setSubscription({
				...subscription,
				...json.subscription,
			});
		} catch (error) {
			console.log("error", error);
		}

		setLoading(false);
		setFormData({
			...formData,
			first_name: "",
			email: "",
		});
	}
	return (
		<>
			<form
				className="font-transat-bold seva-form formkit-form w-full max-w-2xl px-4"
				method="post"
				data-sv-form={dataForm}
				data-uid={dataUid}
				data-format="inline"
				data-version="5"
				data-options={`{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;${successMessage}&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:false,&quot;url&quot;:&quot;https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}`}
				min-width="400 500 600 700 800"
				onSubmit={handleSubmit}
			>
				<div data-style="clean">
					<ul
						className="formkit-alert formkit-alert-error"
						data-element="errors"
						data-group="alert"
					>
						<li data-element="error" />
						<div className="text-red-500 w-full text-center">
							{subscription?.message ?? " "}
						</div>
					</ul>
					<div
						data-element="fields"
						data-stacked="false"
						className="seva-fields formkit-fields flex flex-col gap-10 w-full"
					>
						{subscription.subscriber.id !== null && (
							<div className="text-xl text-darkgreen-500 w-full text-center text-balance">
								{successMessage}
							</div>
						)}
						{subscription.subscriber.id === null && (
							<>
								<div className="formkit-field relative">
									<input
										id="email_address"
										className="formkit-input peer h-10 p-4 w-full rounded-md border-3 border-bluegreen-500 text-black placeholder-transparent focus:outline-none focus:border-3"
										name="email_address"
										aria-label="email address"
										placeholder="EMAIL:"
										required
										type="email"
										onChange={(e) =>
											setFormData({ ...formData, email: e.target.value })
										}
									/>
									<label
										htmlFor="email_address"
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
								<div className="formkit-field relative">
									<input
										id="first_name"
										className="formkit-input peer h-10 p-4 w-full rounded-md border-3 border-bluegreen-500 text-black placeholder-transparent focus:outline-none focus:border-3"
										aria-label="first name"
										name="first_name"
										required
										placeholder="FIRST NAME:"
										type="text"
										onChange={(e) =>
											setFormData({ ...formData, first_name: e.target.value })
										}
									/>
									<label
										htmlFor="first_name"
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
							</>
						)}
						{subscription.subscriber.id === null && (
							<NFCButton
								type="submit"
								loading={loading}
								classes="relative w-full h-10"
							>
								SUBSCRIBE
							</NFCButton>
						)}
					</div>
				</div>
			</form>
		</>
	);
}
