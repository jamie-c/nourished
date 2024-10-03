import { CheckCircleIcon } from "../icons/CheckCircleIcon";

interface NFCPricingItemIncludesListItemProps {
	feature: string;
}

const NFCPricingItemIncludesListItem: React.FC<
	NFCPricingItemIncludesListItemProps
> = ({ feature }) => (
	<li key={feature} className="flex gap-x-3">
		<div className="h-6 w-5 flex-none" aria-hidden="true">
			<CheckCircleIcon />
		</div>
		{feature}
	</li>
);

export default NFCPricingItemIncludesListItem;
