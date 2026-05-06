export function UploadPage() {
	return (
		<div className="flex flex-col gap-8">
			<PageHeader />
			<Dropzone />
			<SystemStatus />
		</div>
	);
}

function PageHeader() {
	return (
		<div className="flex flex-col gap-1 border-l-4 border-[#FF5A00] pl-4">
			<h1 className="text-2xl font-bold tracking-widest uppercase text-[#14130F]">
				INGEST DATA
			</h1>
			<p className="text-sm text-[#6B6660]">Upload receipt images or PDFs</p>
		</div>
	);
}

function Dropzone() {
	return (
		<div className="relative">
			<div className="absolute inset-0 translate-x-[6px] translate-y-[6px] bg-[#14130F]" />
			<div className="relative border-2 border-dashed border-[#FF5A00] bg-white p-16 flex flex-col items-center gap-6">
				{/* Upload icon tile */}
				<div className="relative">
					<div className="absolute inset-0 translate-x-[4px] translate-y-[4px] bg-[#14130F]" />
					<div className="relative w-16 h-16 border-2 border-[#14130F] bg-white flex items-center justify-center">
						<svg
							role="img"
							aria-label="Upload file"
							width="28"
							height="28"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#FF5A00"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<polyline points="16 16 12 12 8 16" />
							<line x1="12" y1="12" x2="12" y2="21" />
							<path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
						</svg>
					</div>
				</div>

				{/* Text */}
				<div className="flex flex-col items-center gap-2 text-center">
					<p className="text-[#14130F] font-bold text-lg tracking-wide">
						Drop files here to upload
					</p>
					<p className="text-[#6B6660] text-sm">JPEG, PNG, PDF up to 10MB</p>
				</div>

				{/* CTA row */}
				<div className="flex items-center gap-4">
					{/* Primary button */}
					<div className="relative">
						<div className="absolute inset-0 translate-x-[3px] translate-y-[3px] bg-[#14130F]" />
						<button
							type="button"
							className="relative px-6 py-2.5 bg-[#14130F] text-white text-sm font-bold tracking-widest uppercase border-2 border-[#14130F] hover:bg-[#FF5A00] hover:border-[#FF5A00] transition-colors"
						>
							BROWSE FILES
						</button>
					</div>

					{/* Keyboard hint */}
					<div className="flex items-center gap-2 text-sm text-[#6B6660]">
						<span>OR press</span>
						<kbd className="px-2 py-1 border-2 border-[#14130F] text-xs font-bold bg-white shadow-[2px_2px_0px_#14130F]">
							U
						</kbd>
						<span>to upload</span>
					</div>
				</div>
			</div>
		</div>
	);
}

function SystemStatus() {
	return (
		<div className="relative">
			<div className="absolute inset-0 translate-x-[6px] translate-y-[6px] bg-[#14130F]" />
			<div className="relative border-2 border-[#14130F] bg-[#14130F] p-6 flex flex-col gap-3">
				{/* Header */}
				<div className="flex items-center gap-2">
					<svg
						role="img"
						aria-label="System"
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#FF5A00"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<rect x="2" y="3" width="20" height="14" rx="2" />
						<path d="M8 21h8M12 17v4" />
					</svg>
					<span className="text-[#FF5A00] text-xs font-bold tracking-widest">
						⌘ SYSTEM_STATUS
					</span>
				</div>

				{/* Log lines */}
				<div className="flex flex-col gap-2 font-mono">
					<div className="flex gap-3 text-xs">
						<span className="text-[#FF5A00] font-bold shrink-0">[INFO]</span>
						<span className="text-[#9B9690]">
							Cheqo AI Engine initialized. Ready for processing.
						</span>
					</div>
					<div className="flex gap-3 text-xs">
						<span className="text-[#FF5A00] font-bold shrink-0">[INFO]</span>
						<span className="text-[#9B9690]">
							Storage capacity: 4.2GB available.
						</span>
					</div>
				</div>

				{/* Prompt line */}
				<div className="flex items-center gap-1 mt-1">
					<span className="text-[#FF5A00] text-sm font-bold">❯</span>
					<span className="blink inline-block w-[8px] h-[14px] bg-[#F5F2EA]" />
				</div>
			</div>
		</div>
	);
}
