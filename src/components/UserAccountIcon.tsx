"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import type React from "react";
import { useState } from "react";

const Button: React.FC = () => {
	return (
		<button type="button" className="size-6 cursor-pointer">
			<svg
				className="stroke-white cursor-pointer stroke-1 hover:stroke-2"
				width="100%"
				height="100%"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>Sign In</title>
				<path
					d="M18 18.7023C18 15.6706 14.5 15 12 15C9.5 15 6 15.6706 6 18.7023M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</button>
	);
};

const UserAccountIcon: React.FC = () => {
	const { data: session } = useSession();
	const [open, setOpen] = useState(true);

	if (!session) {
		return <Button />;
	}
	if (session?.user?.image) {
		return (
			<div className="size-7">
				<Image
					src={session.user.image}
					alt="User Account"
					width={100}
					height={100}
					className="rounded-full border-2 border-white/75 hover:border-white transition-all duration-150 cursor-pointer"
				/>
			</div>
		);
	}
	return <div className="size-8">{session?.user?.name?.charAt(0)}</div>;
};

export default UserAccountIcon;
