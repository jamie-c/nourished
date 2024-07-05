import ConvertKitForm from "./ConvertKitForm/ConvertKitForm";

export default function NewsletterForm() {
	return (
		<ConvertKitForm
			scriptSrc="https://f.convertkit.com/ckjs/ck.5.js"
			actionUrl="https://app.convertkit.com/forms/3036294/subscriptions"
			dataForm="3036294"
			dataUid="1da5d3eed3"
			successMessage="Success! Now check your email to confirm your subscription."
		/>
	);
}
