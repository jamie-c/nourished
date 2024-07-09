import ConvertKitForm from "./ConvertKitForm/ConvertKitForm";

export default function WaitlistForm() {
	return (
		<ConvertKitForm
			scriptSrc="https://f.convertkit.com/ckjs/ck.5.js"
			actionUrl="https://app.convertkit.com/forms/6504564/subscriptions"
			dataForm="6504564"
			dataUId="24a6d965c0"
			successMessage="Success! 🎉 We'll keep you posted on all the probiotic-packed details. Now check your email to confirm your subscription."
		/>
	);
}
