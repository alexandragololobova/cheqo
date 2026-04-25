type Props = {
	size?: number;
};

export function LogoMark({ size = 32 }: Props) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			aria-label="Cheqo mark"
		>
			{/* Outer square tile with hard offset shadow effect via border */}
			<rect
				x="1"
				y="1"
				width="30"
				height="30"
				fill="white"
				stroke="#14130F"
				strokeWidth="2"
			/>
			{/* Inner rounded rect for the icon container */}
			<rect
				x="6"
				y="6"
				width="20"
				height="20"
				rx="4"
				fill="white"
				stroke="#14130F"
				strokeWidth="1.5"
			/>
			{/* Orange < chevron */}
			<polyline
				points="18,10 12,16 18,22"
				stroke="#FF5A00"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			{/* Small black bar at bottom of inner rect — receipt edge */}
			<line
				x1="9"
				y1="23"
				x2="23"
				y2="23"
				stroke="#14130F"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
}
