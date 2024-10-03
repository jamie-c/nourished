interface NFCPricingItemTitleProps {
	id: string;
	name: string;
}

const NFCPricingItemTitle: React.FC<NFCPricingItemTitleProps> = ({
	id,
	name,
}) => (
	<h3
		id={id}
		className="text-base font-transat-bold leading-7 text-darkgreen-500"
	>
		{name}
	</h3>
);

export default NFCPricingItemTitle;
