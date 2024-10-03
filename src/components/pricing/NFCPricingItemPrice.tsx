interface NFCPricingItemPriceProps {
	amount: string;
	label: string;
	description: string;
}

const NFCPricingItemPrice: React.FC<NFCPricingItemPriceProps> = ({
	amount,
	label,
	description,
}) => (
	<>
		<p className="mt-6 flex items-baseline gap-x-1 text-darkgreen-600">
			<span className="text-5xl font-bold tracking-tight">{amount}</span>
			<span className="text-sm font-semibold leading-6">{label}</span>
		</p>
		<p className="mt-3 text-sm leading-6 text-brightgreen-600">{description}</p>
	</>
);

export default NFCPricingItemPrice;
