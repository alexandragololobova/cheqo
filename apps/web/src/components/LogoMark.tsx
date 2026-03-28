type Props = {
	size?: number;
	color?: string;
};

export function LogoMark({ size = 40, color = "#7B6FFF" }: Props) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 280 280"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Cheqo Mark</title>
			<path
				d="M 168 52 A 95 95 0 1 0 168 208"
				stroke={color}
				strokeWidth="34"
				strokeLinecap="round"
			/>
			<line
				x1="40"
				y1="101"
				x2="146"
				y2="101"
				stroke={color}
				strokeWidth="12"
				strokeLinecap="round"
				opacity="0.75"
			/>
			<line
				x1="37"
				y1="123.5"
				x2="115"
				y2="123.5"
				stroke={color}
				strokeWidth="12"
				strokeLinecap="round"
				opacity="0.6"
			/>
			<line
				x1="37"
				y1="146"
				x2="133"
				y2="146"
				stroke={color}
				strokeWidth="12"
				strokeLinecap="round"
				opacity="0.4"
			/>
			<line
				x1="40"
				y1="168.5"
				x2="100"
				y2="168.5"
				stroke={color}
				strokeWidth="12"
				strokeLinecap="round"
				opacity="0.25"
			/>
		</svg>
	);
}
