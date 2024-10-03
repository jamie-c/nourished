import { NFCButton } from "@nourishedco/ui";
import NFCPricingItemIncludesList from "./NFCPricingItemIncludesList";
import NFCPricingItemPrice from "./NFCPricingItemPrice";
import NFCPricingItemShortDescription from "./NFCPricingItemShortDescription";
import NFCPricingItemTitle from "./NFCPricingItemTitle";

interface NFCPricingCardTier {
	name: string;
	id: string;
	href: string;
	price: {
		amount: string;
		label: string;
		description: string;
	};
	description: string;
	features: string[];
}

interface NFCPricingCardProps {
	tier: NFCPricingCardTier;
}

const NFCPricingCard: React.FC<NFCPricingCardProps> = ({ tier }) => (
	<>
		<NFCPricingItemTitle id={tier.id} name={tier.name} />
		<NFCPricingItemPrice {...tier.price} />
		<div aria-describedby="tier.id" className="mt-10">
			<NFCButton as="a" href={tier.href} classes="h-10">
				<span className="mx-auto">BUY PLAN</span>
			</NFCButton>
		</div>
		<NFCPricingItemShortDescription description={tier.description} />
		<NFCPricingItemIncludesList features={tier.features} />
	</>
);

export default NFCPricingCard;
