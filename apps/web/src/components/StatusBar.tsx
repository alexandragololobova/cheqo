type Shortcut = {
	key: string;
	label: string;
};

type Props = {
	mode: string;
	shortcuts?: Shortcut[];
};

export function StatusBar({ mode, shortcuts = [] }: Props) {
	return (
		<div
			className="fixed bottom-0 left-0 right-0 h-8 bg-[#14130F] flex items-center justify-between px-4 z-50"
			style={{ fontFamily: "'JetBrains Mono', monospace" }}
		>
			{/* Left — online indicator + mode */}
			<div className="flex items-center gap-3">
				<div className="flex items-center gap-1.5">
					<span className="pulse-dot w-2 h-2 rounded-full bg-[#FF5A00] inline-block" />
					<span className="text-[#FF5A00] text-xs font-bold tracking-widest">
						SYSTEM_ONLINE
					</span>
				</div>
				<span className="text-[#6B6660] text-xs tracking-widest">
					MODE: {mode}
				</span>
			</div>

			{/* Right — keyboard shortcuts */}
			{shortcuts.length > 0 && (
				<div className="flex items-center gap-4">
					{shortcuts.map((s) => (
						<span key={s.key} className="text-[#6B6660] text-xs tracking-wide">
							<span className="text-[#9B9690]">[{s.key}]</span>
							{" → "}
							{s.label}
						</span>
					))}
				</div>
			)}
		</div>
	);
}
