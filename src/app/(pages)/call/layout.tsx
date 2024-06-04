"use client";

import type React from "react";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<section className="flex flex-col items-center justify-center w-full">
				{children}
				{/* <!-- Practice Better Booking Widget: start --> */}
				<div
					className="better-inline-booking-widget relative flex flex-col items-center overflow-hidden w-full max-w-3xl"
					data-url="https://my.practicebetter.io"
					data-service="64527318ed3b9cd1ae61ff22"
					data-hash="6452605f4c15a8e1b30dd2df"
					data-theme="789d4a"
					data-theme-accent="f94525"
					data-scrollbar-visible="false"
					style={{
						minHeight: "800px",
					}}
				>
					<iframe
						title="Practice Better Booking Widget"
						className="absolute inset-0 w-full h-full border-0 px-2 pt-8 flex flex-col items-center ml-auto mr-auto"
						src="https://my.practicebetter.io?fl_wtc=789D4A&amp;fl_wtac=F94525#/6452605f4c15a8e1b30dd2df/widgets/bookings?s=64527318ed3b9cd1ae61ff22"
						style={{
							maxWidth: "550px",
							minHeight: "fit-content",
						}}
					/>
				</div>

				{/* <!-- Practice Better Booking Widget: end --> */}
			</section>
		</>
	);
}
