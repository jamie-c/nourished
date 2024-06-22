"use client";

import Script from "next/script";

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
	const options = {
		settings: {
			after_subscribe: {
				action: "message",
				success_message: successMessage,
				redirect_url: "",
			},
			analytics: {
				google: null,
				fathom: null,
				facebook: null,
				segment: null,
				pinterest: null,
				sparkloop: null,
				googletagmanager: null,
			},
			modal: {
				trigger: "timer",
				scroll_percentage: null,
				timer: 5,
				devices: "all",
				show_once_every: 15,
			},
			powered_by: {
				show: false,
				url: "https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic",
			},
			recaptcha: { enabled: false },
			return_visitor: { action: "show", custom_content: "" },
			slide_in: {
				display_in: "bottom_right",
				trigger: "timer",
				scroll_percentage: null,
				timer: 5,
				devices: "all",
				show_once_every: 15,
			},
			sticky_bar: {
				display_in: "top",
				trigger: "timer",
				scroll_percentage: null,
				timer: 5,
				devices: "all",
				show_once_every: 15,
			},
		},
		version: "5",
	};

	return (
		<>
			<Script src={scriptSrc} />
			<form
				action={actionUrl}
				className="font-transat-bold seva-form formkit-form w-full max-w-2xl px-4"
				method="post"
				data-sv-form={dataForm}
				data-uid={dataUid}
				data-format="inline"
				data-version="5"
				data-options={JSON.stringify(options)}
				min-width="400 500 600 700 800"
			>
				<div data-style="clean">
					<ul
						className="formkit-alert formkit-alert-error"
						data-element="errors"
						data-group="alert"
					/>
					<div
						data-element="fields"
						data-stacked="false"
						className="seva-fields formkit-fields"
					>
						<div className="formkit-field relative">
							<input
								id="email_address"
								className="formkit-input peer h-10 p-4 w-full rounded-md border-3 border-bluegreen-500 text-black placeholder-transparent focus:outline-none focus:border-3"
								name="email_address"
								aria-label="EMAIL:"
								placeholder="EMAIL:"
								required
								type="email"
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
						<div className="formkit-field relative mt-10">
							<input
								id="first_name"
								className="formkit-input peer h-10 p-4 w-full rounded-md border-3 border-bluegreen-500 text-black placeholder-transparent focus:outline-none focus:border-3"
								aria-label="FIRST NAME:"
								name="fields[first_name]"
								required
								placeholder="FIRST NAME:"
								type="text"
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
						<button
							type="submit"
							data-element="submit"
							className="formkit-submit formkit-submit mt-10 mb-32 pb-2 pt-3 rounded-md bg-bluegreen-500 hover:bg-opacity-90 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer"
						>
							<div className="formkit-spinner" />
							<span className="">SUBSCRIBE</span>
						</button>
					</div>
				</div>
			</form>
		</>
	);
}
