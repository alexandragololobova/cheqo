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
			{/*<ReceiptsList receipts={MOCK_RECEIPTS} />*/}
		</div>
	);
}

function PageHeader({ count }: { count: number }) {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-3">
				<h1 className="text-2xl font-bold text-white">You Receipt</h1>
				<span className="px-3 py-1 rounded-full bg-[#7B6FFF]/20 text-[#7B6FFF] text-xs font-medium border border-[#7B6FFF]/25">
					{count}
				</span>
				<button
					type="button"
					className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-linear-to-br from-[#9B8FFF] to-[#6B5FEF] hover:from-[#A89FFF] hover:to-[#7B6FFF] transition-all shadow-[0_0_20px_rgba(123,111,255,0.3)]"
				>
					Upload Receipt
				</button>
			</div>
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
					className="flex-1 bg-transparent test-sm text-white placeholder-#6B7280] outline-none"
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
