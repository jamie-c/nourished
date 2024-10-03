import NFCPricingItemIncludesListItem from "./NFCPricingItemIncludesListItem";

interface NFCPricingItemIncludesListProps {
	features: string[];
}

const NFCPricingItemIncludesList: React.FC<NFCPricingItemIncludesListProps> = ({
	features,
}) => (
	<ul className="mt-6 space-y-3 text-sm leading-6 text-darkgreen-600">
		{features.map((feature) => (
			<NFCPricingItemIncludesListItem feature={feature} key={feature} />
		))}
	</ul>
);

export default NFCPricingItemIncludesList;
