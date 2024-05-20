import { NFCNavLinksVertical } from "../NFCNavLinks/NFCNavLinks";

type Props = {
	active: string;
};

const HamburgerIcon = ({ active }: Props) => {
	const display = active === "active" ? "fixed" : "hidden";

	return (
		<>
			<svg
				className={`ham z-50 hamRotate ${active}`}
				viewBox="0 0 100 100"
				width="50"
			>
				<title>Menu</title>
				<path
					className="line top stroke-white"
					d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
				/>
				<path className="line middle stroke-white" d="m 70,50 h -40" />
				<path
					className="line bottom stroke-white"
					d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
				/>
			</svg>
			<div className={`${display} top-16 right-0 w-screen h-screen z-50`}>
				<NFCNavLinksVertical />
			</div>
		</>
	);
};

export default HamburgerIcon;
