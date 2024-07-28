import ConvertKitForm from "./ConvertKitForm";

export default function FreeGuideForm() {
	return (
		<ConvertKitForm
			scriptSrc="https://f.convertkit.com/ckjs/ck.5.js"
			actionUrl="https://app.convertkit.com/forms/6850889/subscriptions"
			dataForm="6850889"
			dataUid="d64529369f"
			successMessage="Success! 🎉 Now check your email to confirm your email and get your free download."
		/>
	);
}
