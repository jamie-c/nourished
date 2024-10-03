interface NFCPricingItemShortDescriptionProps {
	description: string;
}

const NFCPricingItemShortDescription: React.FC<
	NFCPricingItemShortDescriptionProps
> = ({ description }) => (
	<p className="mt-10 text-sm font-semibold leading-6 text-darkgreen-500">
		{description}
	</p>
);

export default NFCPricingItemShortDescription;
