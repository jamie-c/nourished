"use client";
import { SessionProvider } from "next-auth/react";
import ReactDOM from "react-dom";

ReactDOM.prefetchDNS("https://my.practicebetter.io");
ReactDOM.preconnect(
	"https://my.practicebetter.io?fl_wtc=789D4A&amp;fl_wtac=F94525#/6452605f4c15a8e1b30dd2df/widgets/bookings?s=64527318ed3b9cd1ae61ff22",
);

export default function ProviderWrapper({
	children,
}: {
	children: React.ReactNode | React.ReactNode[];
}) {
	return <SessionProvider>{children}</SessionProvider>;
}
