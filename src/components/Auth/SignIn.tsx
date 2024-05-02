import { signIn } from "@/auth";
 
function SignIn() {
	return (
		<form
			action={async () => {
				"use server";
				await signIn("github", { redirectTo: "/" });
			}}
		>
			<button
				type="submit"
				className="text-white h-full uppercase font-transat-bold text-xl"
			>
				Sign In
			</button>
		</form>
	);
}

export default SignIn;