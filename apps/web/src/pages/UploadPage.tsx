export function UploadPage() {
	return (
		<div className="flex flex-col items-center py-16 gap-12">
			<Hero />
			<Dropzone />
			<Features />
		</div>
	);
}

function Hero() {
	return (
		<div className="flex flex-col items-center gap-4 text-center">
			<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B6FFF]/10 border border-[#7B6FFF]/20 shadow-[0_0_20px_rgba(123,111,255,0.2)]">
				<span className="text-[#7B6FFF] text-xs font-medium">
					✦ AI-powered receipt extraction
				</span>
			</div>
			<h1 className="text-5xl font-bold text-white tracking-tight">
				Drop your receipt here
			</h1>
			<p className="text-[#9CA3AF] text-lg max-w-md">
				Upload a photo or PDF and let AI extract all the details
			</p>
		</div>
	);
}

function Dropzone() {
	return (
		<div className="w-full max-w-2xl border-2 border-dashed border-[#7B6FFF]/50 rounded-2xl bg-[#1C1C27] p-16 flex flex-col items-center gap-6 hover:border-[#7B6FFF]/80 transition-all cursor-pointer shadow-[0_0_60px_-10px_rgba(123,111,255,0.3)] hover:shadow-[0_0_80px_-10px_rgba(123,111,255,0.5)]">
			<div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(123,111,255,0.5)] bg-linear-to-br from-[#9B8FFF] to-[#6B5FEF]">
				<svg
					role="img"
					aria-label="Upload file"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="white"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
					<polyline points="17 8 12 3 7 8" />
					<line x1="12" y1="3" x2="12" y2="15" />
				</svg>
			</div>
			<div className="flex flex-col items-center gap-2 text-center">
				<p className="text-white font-medium text-lg">
					Choose a file or drag it here
				</p>
				<p className="text-[#6B7280] text-sm">
					Supports JPG, PNG, PDF · Max 10MB
				</p>
			</div>
			<button
				type="button"
				className="px-6 py-2.5 text-white text-sm font-medium rounded-lg transition-all shadow-[0_0_20px_rgba(123,111,255,0.4)] bg-linear-to-br from-[#9B8FFF] to-[#6B5FEF] hover:shadow-[0_0_30px_rgba(123,111,255,0.6)] hover:from-[#A89FFF] hover:to-[#7B6FFF]"
			>
				Browse files
			</button>
		</div>
	);
}

function Features() {
	return (
		<div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
			<FeatureCard
				icon="⚡"
				title="AI Extraction"
				description="Automatically extract vendor, date, total, and line-items"
			/>
			<FeatureCard
				icon="🔍"
				title="Smart Search"
				description="Find receipts instantly by vendor, amount, date, or custom tags"
			/>
			<FeatureCard
				icon="📤"
				title="Easy Export"
				description="Export your data to CSV or JSON"
			/>
		</div>
	);
}

type FeatureCardProps = {
	icon: string;
	title: string;
	description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
	return (
		<div className="bg-[#1C1C27] rounded-xl p-5 flex flex-col gap-3 border border-[#2A2A38]">
			<div className="w-10 h-10 rounded-lg bg-[#7B6FFF]/15 border border-[#7B6FFF]/20 flex items-center justify-center shadow-[0_0_12px_rgba(123,111,255,0.15)]">
				<span className="text-lg">{icon}</span>
			</div>
			<div className="flex flex-col gap-1">
				<p className="text-white text-sm font-medium">{title}</p>
				<p className="text-[#6B7280] text-xs">{description}</p>
			</div>
		</div>
	);
}
