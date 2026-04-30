export function Logo() {
	return (
		<div className="flex items-center gap-0 select-none">
			<span
				style={{ fontFamily: "'JetBrains Mono', monospace" }}
				className="text-[#14130F] font-bold text-lg tracking-tight leading-none"
			>
				cheqo
			</span>
			{/* Blinking orange block caret */}
			<span
				className="blink inline-block w-[9px] h-[18px] bg-[#FF5A00] ml-[2px] align-middle"
				aria-hidden="true"
			/>
		</div>
	);
}
