import ConvertKitForm from "./ConvertKitForm/ConvertKitForm";

export default function NewsletterForm() {
	// {/* <Script src="https://f.convertkit.com/ckjs/ck.5.js" /> */}
	// {/*  action="https://app.convertkit.com/forms/3036294/subscriptions" */}
	return (
		<ConvertKitForm
			scriptSrc="https://f.convertkit.com/ckjs/ck.5.js"
			formAction="https://app.convertkit.com/forms/3036294/subscriptions"
			dataForm="3036294"
			dataFormId="1da5d3eed3"
			successMessage="Success! Now check your email to confirm your subscription."
		/>
	);
}
