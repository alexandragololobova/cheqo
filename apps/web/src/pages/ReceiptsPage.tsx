type Receipt = {
	id: string;
	vendor: string;
	date: string;
	total: number;
	currency: string;
	confidence: number;
	tags: string[];
	imageUrl: string;
};

const MOCK_RECEIPTS: Receipt[] = [
	{
		id: "1",
		vendor: "Whole Foods Market",
		date: "March 24, 2026",
		total: 127.48,
		currency: "USD",
		confidence: 0.94,
		tags: ["Groceries", "Food"],
		imageUrl: "",
	},
	{
		id: "2",
		vendor: "Amazon Web Services",
		date: "March 22, 2026",
		total: 89.23,
		currency: "USD",
		confidence: 0.91,
		tags: ["Business", "Cloud"],
		imageUrl: "",
	},
	{
		id: "3",
		vendor: "Starbucks Coffee",
		date: "March 20, 2026",
		total: 12.75,
		currency: "USD",
		confidence: 0.76,
		tags: ["Food", "Coffee"],
		imageUrl: "",
	},
	{
		id: "4",
		vendor: "Office Depot",
		date: "March 18, 2026",
		total: 234.56,
		currency: "USD",
		confidence: 0.88,
		tags: ["Business", "Supplies"],
		imageUrl: "",
	},
	{
		id: "5",
		vendor: "Shell Gas Station",
		date: "March 16, 2026",
		total: 58.32,
		currency: "USD",
		confidence: 0.72,
		tags: ["Transportation", "Fuel"],
		imageUrl: "",
	},
];

export function ReceiptsPage() {
	return (
		<div className="flex flex-col gap-6">
			<PageHeader count={MOCK_RECEIPTS.length} />
			<Toolbar />
			<ReceiptsList receipts={MOCK_RECEIPTS} />
		</div>
	);
}

function PageHeader({ count }: { count: number }) {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-3">
				<h1 className="text-2xl font-bold text-white">Your Receipts</h1>
				<span className="px-3 py-1 rounded-full bg-[#7B6FFF]/15 text-[#7B6FFF] text-xs font-medium border border-[#7B6FFF]/25 shadow-[0_0_10px_rgba(123,111,255,0.2)]">
					{count}
				</span>
			</div>
			<button
				type="button"
				className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-linear-to-br from-[#7B6FFF] to-[#5B4FD4] hover:from-[#8B7FFF] hover:to-[#6B5FEF] transition-all shadow-[0_0_20px_rgba(123,111,255,0.4)] hover:shadow-[0_0_30px_rgba(123,111,255,0.6)]"
			>
				Upload Receipt
			</button>
		</div>
	);
}

function Toolbar() {
	return (
		<div className="flex items-center gap-3">
			<div className="flex-1 flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1C1C27] border border-[#2A2A38]">
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#6B7280"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-label="Search"
					role="img"
				>
					<circle cx="11" cy="11" r="8" />
					<line x1="21" y1="21" x2="16.65" y2="16.65" />
				</svg>
				<input
					type="text"
					placeholder="Search by vendor, amount, or tg..."
					className="flex-1 bg-transparent text-sm text-white placeholder-[#6B7280] outline-none"
				/>
			</div>
			<button
				type="button"
				className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1C1C27] border border-[#2A2A38] text-[#9CA3AF] text-sm hover:text-white hover:border-[#7B6FFF]/50 transition-colors"
			>
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-label="Filters"
					role="img"
				>
					<line x1="4" y1="6" x2="20" y2="6" />
					<line x1="8" y1="12" x2="16" y2="12" />
					<line x1="11" y1="18" x2="13" y2="18" />
				</svg>
				Filters
			</button>
		</div>
	);
}

function ReceiptsList({ receipts }: { receipts: Receipt[] }) {
	if (receipts.length === 0) {
		return <EmptyState />;
	}

	return (
		<div className="flex flex-col gap-3">
			{receipts.map((receipt) => (
				<ReceiptRow key={receipt.id} receipt={receipt} />
			))}
		</div>
	);
}

function ReceiptRow({ receipt }: { receipt: Receipt }) {
	const confidenceColor =
		receipt.confidence >= 0.85
			? "#10B981"
			: receipt.confidence >= 0.6
				? "#F59E0B"
				: "#F43F5E";

	return (
		<div className="flex items-center gap-4 p-5 pt-4 bg-[#1C1C27] rounded-xl border border-[#2A2A38] hover:border-[#7B6FFF]/30 hover:bg-[#1E1E2E] transition-all cursor-pointer">
			{/* Thumbnail */}
			<div className="w-12 h-12 rounded-lg bg-[#2A2A38] shrink-0 overflow-hidden">
				{receipt.imageUrl ? (
					<img
						src={receipt.imageUrl}
						alt={receipt.vendor}
						className="w-full h-full object-cover"
					/>
				) : (
					<div className="w-full h-full bg-[#2A2A38]" />
				)}
			</div>

			{/* Vendor + data */}
			<div className={"flex-1 min-w-0"}>
				<p className="text-white font-medium text-sm truncate">
					{receipt.vendor}
				</p>
				<p className="text-[#6B7280] text-xs mt-0.5">{receipt.date}</p>
			</div>

			{/* Confidence bar */}
			<div className="flex items-center gap-2 w-32">
				<div className="flex-1 h-1 rounded-full bg-[#2A2A38]">
					<div
						className="h-1 rounded-full transition-all"
						style={{
							width: `${receipt.confidence * 100}%`,
							backgroundColor: confidenceColor,
						}}
					/>
				</div>
			</div>

			{/* Amount */}
			<div className="text-right w-24">
				<p className="text-[#7B6FFF] font-semibold text-sm">
					${receipt.total.toFixed(2)}
				</p>
				<p className="text-[#6B7280] text-xs">{receipt.currency}</p>
			</div>

			{/* Tags */}
			<div className="flex items-center gap-1.5 w-40 justify-end">
				{receipt.tags.map((tag) => (
					<span
						key={tag}
						className="px-2 py-0.5 rounded-full bg-[#7B6FFF]/10 text-[#7B6FFF] text-xs border border-[#7B6FFF]/20 shadow-[0_0_8px_rgba(123,111,255,0.15)]"
					>
						{tag}
					</span>
				))}
			</div>
		</div>
	);
}

function EmptyState() {
	return (
		<div className="flex flex-col items-center gap-4 py-24 text-center">
			<div className="w-14 h-14 rounded-2xl bg-[#7B6FFF]/10 border border-[#7B6FFF]/20 flex items-center justify-center">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#7B6FFF"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
					role="img"
					aria-label="No receipts"
				>
					<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
					<polyline points="14 2 14 8 20 8" />
				</svg>
			</div>
			<div className="flex flex-col gap-1">
				<p className="text-white font-medium">No receipts yet</p>
				<p className="text-[#6B7280] text-sm">
					Upload your first receipt to get started
				</p>
			</div>
			<button
				type="button"
				className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-linear-to-br from-[#9B8FFF] to-[#6B5FEF] hover:from-[#A89FFF] hover:to-[#7B6FFF] transition-all"
			>
				Upload Receipts
			</button>
		</div>
	);
}
