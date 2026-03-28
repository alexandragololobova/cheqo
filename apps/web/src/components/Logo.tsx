type Props = {
	height: number;
	textColor?: string;
	accentColor?: string;
};

export function Logo({
	height = 36,
	textColor = "#F0EFEA",
	accentColor = "#7B6FFF",
}: Props) {
	return (
		<svg
			height={height}
			viewBox="0 0 480 155"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Cheqo Logo</title>
			<text
				x="240"
				y="112"
				textAnchor="middle"
				fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
				fontWeight="800"
				fontSize="112"
				letterSpacing="-6"
				fill={textColor}
			>
				cheqo
			</text>
			<line
				x1="350"
				y1="35"
				x2="405"
				y2="125"
				stroke={textColor}
				strokeWidth="35"
				strokeLinecap="round"
			/>
			<line
				x1="350"
				y1="35"
				x2="405"
				y2="125"
				stroke={accentColor}
				strokeWidth="22"
				strokeLinecap="round"
			/>
		</svg>
	);
}
