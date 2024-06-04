"use client";
import { useSession } from "next-auth/react";

function Page() {
	const { data: session } = useSession();
	if (!session) return <div>Please sign in to view this content...</div>;
	if (session.user) {
		return (
			<div className="min-h-screen w-full flex flex-col items-center">
				<div className="max-w-7xl w-full sm:w-7xl pl-4 pt-16">
					<h1 className="text-3xl mb-10">Welcome to the Body Wisdom Course!</h1>
					{session && (
						<>
							<p>{session?.user.name}</p>
							<p>{session?.user.email}</p>
						</>
					)}
				</div>
			</div>
		);
	}
}

export default Page;
