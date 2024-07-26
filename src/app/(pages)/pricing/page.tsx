import { CheckCircleIcon } from "@/components/icons/CheckCircleIcon";
import { NFCButton } from "@nourishedco/ui";

const tiers = [
	{
		name: "Basic",
		id: "tier-basic",
		href: "#",
		price: {
			amount: "$97",
			label: "/month",
			description: "charged monthly, cancel anytime",
		},
		description: "Everything necessary to get started.",
		features: [
			"Messaging during office hours",
			"Action plans and resources",
			"Access to recipes and nutrition guides",
			"48-hour support response time",
		],
	},
	{
		name: "3 Month One-On-One Program",
		id: "tier-essential",
		href: "https://my.practicebetter.io/#/6452605f4c15a8e1b30dd2df/bookings?p=66301ec9c01b5ef9124c0b97",
		price: {
			amount: "$2700",
			label: "if paid in full",
			description: "installment plan available",
		},
		description:
			"Everything in Basic, plus essential tools for growing your business.",
		features: [
			"6 bi-weekly 1:1 sessions",
			"Access to weekly office hours",
			"Unlimited messaging outside of sessions",
			"Personalized Action plans",
			"Access to all resources and tools",
			"8-hour support response time",
		],
	},
	{
		name: "6 Month One-On-One Program",
		id: "tier-growth",
		href: "https://my.practicebetter.io/#/6452605f4c15a8e1b30dd2df/bookings?p=6685401beb7a33b10c4c0ad5",
		price: {
			amount: "$5000",
			label: "if paid in full",
			description: "installment plan available",
		},
		description:
			"Everything in Essential, plus collaboration tools and deeper insights.",
		features: [
			"12 bi-weekly 1:1 sessions",
			"Access to weekly office hours",
			"Unlimited messaging outside of sessions",
			"Personalized Action plans",
			"Access to all resources and tools",
			"Access to the Microbiome Makeover Program",
			"Access to the Microbiome Makeover private podcast",
			"Recipes, nutrition guides, and more",
		],
	},
];

export default function Page() {
	return (
		<div className="py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-4xl sm:text-center">
					<h2 className="text-2xl font-transat-bold leading-7 text-bluegreen-500">
						Pricing
					</h2>
					<p className="mt-2 text-4xl font-bold tracking-tight text-darkgreen-500 sm:text-5xl">
						Choose the right plan for&nbsp;you
					</p>
				</div>
				<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">
					Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
					quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
				</p>
				<div className="mt-20 flow-root">
					<div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
						{tiers.map((tier) => (
							<div key={tier.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
								<h3
									id={tier.id}
									className="text-base font-transat-bold leading-7 text-darkgreen-500"
								>
									{tier.name}
								</h3>
								<p className="mt-6 flex items-baseline gap-x-1 text-darkgreen-600">
									<span className="text-5xl font-bold tracking-tight">
										{tier.price.amount}
									</span>
									<span className="text-sm font-semibold leading-6">
										{tier.price.label}
									</span>
								</p>
								<p className="mt-3 text-sm leading-6 text-brightgreen-600">
									{tier.price.description}
								</p>
								<div aria-describedby="tier.id" className="mt-10">
									<NFCButton as="a" href={tier.href} classes="h-10">
										<span className="mx-auto">BUY PLAN</span>
									</NFCButton>
								</div>
								<p className="mt-10 text-sm font-semibold leading-6 text-darkgreen-500">
									{tier.description}
								</p>
								<ul className="mt-6 space-y-3 text-sm leading-6 text-darkgreen-600">
									{tier.features.map((feature) => (
										<li key={feature} className="flex gap-x-3">
											<div className="h-6 w-5 flex-none" aria-hidden="true">
												<CheckCircleIcon />
											</div>
											{feature}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
