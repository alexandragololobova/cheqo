/* File: apps/web/src/pages/ReceiptDetailPage.tsx */
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

type LineItem = {
	description: string;
	amount: number;
};

type Receipt = {
	id: string;
	vendor: string;
	date: string;
	total: number;
	currency: string;
	confidence: number;
	tags: string[];
	address: string;
	time: string;
	lineItems: LineItem[];
};

const MOCK_RECEIPTS: Record<string, Receipt> = {
	"1": {
		id: "1",
		vendor: "Whole Foods Market",
		date: "2026-03-24",
		total: 127.48,
		currency: "USD",
		confidence: 0.94,
		tags: ["GROCERIES", "FOOD"],
		address: "399 Post St, San Francisco, CA 94102",
		time: "14:32 PM",
		lineItems: [
			{ description: "Organic Vegetables", amount: 24.99 },
			{ description: "Fresh Fruit Bundle", amount: 18.5 },
			{ description: "Dairy Products", amount: 31.25 },
			{ description: "Bakery Items", amount: 15.74 },
			{ description: "Beverages", amount: 37.0 },
		],
	},
	"2": {
		id: "2",
		vendor: "Amazon Web Services",
		date: "2026-03-22",
		total: 89.23,
		currency: "USD",
		confidence: 0.91,
		tags: ["BUSINESS", "CLOUD"],
		address: "410 Terry Ave N, Seattle, WA 98109",
		time: "09:15 AM",
		lineItems: [
			{ description: "EC2 Instance (t3.medium)", amount: 45.12 },
			{ description: "S3 Storage (50GB)", amount: 23.0 },
			{ description: "Data Transfer", amount: 21.11 },
		],
	},
	"3": {
		id: "3",
		vendor: "Starbucks Coffee",
		date: "2026-03-20",
		total: 12.75,
		currency: "USD",
		confidence: 0.76,
		tags: ["FOOD", "COFFEE"],
		address: "1 Market St, San Francisco, CA 94105",
		time: "08:45 AM",
		lineItems: [
			{ description: "Oat Milk Latte", amount: 6.5 },
			{ description: "Blueberry Muffin", amount: 4.25 },
			{ description: "Extra Shot", amount: 2.0 },
		],
	},
	"4": {
		id: "4",
		vendor: "Office Depot",
		date: "2026-03-18",
		total: 234.56,
		currency: "USD",
		confidence: 0.88,
		tags: ["BUSINESS", "SUPPLIES"],
		address: "2185 Market St, San Francisco, CA 94114",
		time: "11:20 AM",
		lineItems: [
			{ description: "Printer Paper (Case)", amount: 89.99 },
			{ description: "Ink Cartridges x4", amount: 79.96 },
			{ description: "Desk Organizer", amount: 34.99 },
			{ description: "Sticky Notes Bundle", amount: 29.62 },
		],
	},
	"5": {
		id: "5",
		vendor: "Shell Gas Station",
		date: "2026-03-16",
		total: 58.32,
		currency: "USD",
		confidence: 0.72,
		tags: ["TRANSPORTATION", "FUEL"],
		address: "800 Fell St, San Francisco, CA 94117",
		time: "07:03 AM",
		lineItems: [
			{ description: "Unleaded 87 (15.2 gal)", amount: 54.32 },
			{ description: "Car Wash", amount: 4.0 },
		],
	},
};

export function ReceiptDetailPage() {
	const { id } = useParams<{ id: string }>();
	const receipt = id ? MOCK_RECEIPTS[id] : undefined;

	const [tags, setTags] = useState<string[]>(receipt?.tags ?? []);
	const [addingTag, setAddingTag] = useState(false);
	const [newTag, setNewTag] = useState("");

	if (!receipt) {
		return (
			<div className="flex flex-col items-center gap-4 py-24 text-center">
				<p className="text-2xl font-bold text-[#14130F]">RECEIPT_NOT_FOUND</p>
				<Link
					to="/receipts"
					className="text-sm text-[#FF5A00] underline underline-offset-4 font-bold"
				>
					← Back to Receipts
				</Link>
			</div>
		);
	}

	const confidence = Math.round(receipt.confidence * 100);
	const confidenceColor =
		receipt.confidence >= 0.85
			? "#22C55E"
			: receipt.confidence >= 0.6
				? "#F59E0B"
				: "#EF4444";

	function handleAddTag() {
		const trimmed = newTag.trim().toUpperCase();
		if (trimmed && !tags.includes(trimmed)) {
			setTags([...tags, trimmed]);
		}
		setNewTag("");
		setAddingTag(false);
	}

	function handleRemoveTag(tag: string) {
		setTags(tags.filter((t) => t !== tag));
	}

	return (
		<div className="flex flex-col gap-0">
			{/* Top nav bar */}
			<div className="flex items-center justify-between mb-6">
				<div className="flex items-center gap-2 text-sm">
					<Link
						to="/receipts"
						className="flex items-center gap-1 text-[#6B6660] hover:text-[#14130F] font-bold transition-colors"
					>
						<svg
							role="img"
							aria-label="Back"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<line x1="19" y1="12" x2="5" y2="12" />
							<polyline points="12 19 5 12 12 5" />
						</svg>
						Back
					</Link>
					<span className="text-[#C8C5BD]">/</span>
					<span className="text-[#FF5A00] font-bold">
						Receipt R-{receipt.id.padStart(4, "0")}
					</span>
				</div>

				{/* Action buttons */}
				<div className="flex items-center gap-2">
					<HardButton
						label="CSV"
						icon={
							<svg
								role="img"
								aria-label="CSV"
								width="12"
								height="12"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
								<polyline points="7 10 12 15 17 10" />
								<line x1="12" y1="15" x2="12" y2="3" />
							</svg>
						}
					/>
					<HardButton
						label="JSON"
						icon={
							<svg
								role="img"
								aria-label="JSON"
								width="12"
								height="12"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
								<polyline points="14 2 14 8 20 8" />
							</svg>
						}
					/>
					{/* Delete — red on hover */}
					<div className="relative shrink-0">
						<div className="absolute inset-0 translate-x-[3px] translate-y-[3px] bg-[#14130F]" />
						<button
							type="button"
							className="relative flex items-center gap-2 px-3 py-2 border-2 border-[#14130F] bg-white text-[#14130F] text-xs font-bold hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors"
						>
							<svg
								role="img"
								aria-label="Delete"
								width="12"
								height="12"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<polyline points="3 6 5 6 21 6" />
								<path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
								<path d="M10 11v6M14 11v6" />
								<path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Split pane */}
			<div className="grid grid-cols-2 gap-6">
				{/* LEFT — receipt preview */}
				<div className="bg-[#14130F] p-8 flex items-start justify-center min-h-[600px]">
					{/* Receipt paper */}
					<div className="w-full max-w-xs bg-white shadow-[8px_8px_0px_rgba(255,90,0,0.5)] -rotate-1 hover:rotate-0 transition-transform duration-300">
						{/* Zigzag top */}
						<div
							className="w-full h-4"
							style={{
								background: "white",
								maskImage:
									"repeating-linear-gradient(90deg, transparent, transparent 6px, black 6px, black 12px)",
								WebkitMaskImage:
									"repeating-linear-gradient(90deg, transparent, transparent 6px, black 6px, black 12px)",
								borderTop: "8px solid #14130F",
							}}
						/>
						<div className="px-6 py-4 flex flex-col gap-3 font-mono text-[#14130F]">
							{/* Vendor */}
							<div className="text-center">
								<p className="text-sm font-bold uppercase tracking-widest border-b-2 border-dashed border-[#14130F] pb-2">
									{receipt.vendor}
								</p>
								<p className="text-[10px] text-[#6B6660] mt-2">
									{receipt.address}
								</p>
							</div>

							{/* Date / time */}
							<div className="flex justify-between text-[10px] border-b border-dashed border-[#C8C5BD] pb-2">
								<span>{receipt.date}</span>
								<span>{receipt.time}</span>
							</div>

							{/* Line items */}
							<div className="flex flex-col gap-1.5">
								{receipt.lineItems.map((item) => (
									<div
										key={item.description}
										className="flex justify-between text-[11px]"
									>
										<span className="truncate mr-2">{item.description}</span>
										<span className="tabular-nums shrink-0">
											${item.amount.toFixed(2)}
										</span>
									</div>
								))}
							</div>

							{/* Totals block */}
							<div className="border-t-2 border-dashed border-[#14130F] pt-2 flex flex-col gap-1">
								<div className="flex justify-between text-[10px] text-[#6B6660]">
									<span>SUBTOTAL</span>
									<span className="tabular-nums">
										${receipt.total.toFixed(2)}
									</span>
								</div>
								<div className="flex justify-between text-[10px] text-[#6B6660]">
									<span>TAX</span>
									<span className="tabular-nums">$0.00</span>
								</div>
								<div className="flex justify-between text-sm font-bold mt-1">
									<span>TOTAL</span>
									<span className="tabular-nums">
										${receipt.total.toFixed(2)}
									</span>
								</div>
							</div>

							{/* Footer */}
							<div className="text-center text-[9px] text-[#6B6660] border-t border-dashed border-[#C8C5BD] pt-2">
								<p>THANK YOU FOR SHOPPING</p>
								<p>STORE {receipt.id.padStart(4, "0")} / REG 4</p>
								<p className="mt-1 font-bold">*** CUSTOMER COPY ***</p>
							</div>
						</div>
						{/* Zigzag bottom */}
						<div
							className="w-full h-4"
							style={{
								background: "white",
								maskImage:
									"repeating-linear-gradient(90deg, transparent, transparent 6px, black 6px, black 12px)",
								WebkitMaskImage:
									"repeating-linear-gradient(90deg, transparent, transparent 6px, black 6px, black 12px)",
								borderBottom: "8px solid #14130F",
							}}
						/>
					</div>
				</div>

				{/* RIGHT — extracted data */}
				<div className="flex flex-col gap-4">
					{/* Extraction status */}
					<div className="relative">
						<div className="absolute inset-0 translate-x-[3px] translate-y-[3px] bg-[#14130F]" />
						<div className="relative border-2 border-[#14130F] bg-white px-4 py-3 flex items-center justify-between">
							<div className="flex items-center gap-2">
								<svg
									role="img"
									aria-label="Complete"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#22C55E"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
									<polyline points="22 4 12 14.01 9 11.01" />
								</svg>
								<span className="text-xs font-bold tracking-widest text-[#14130F]">
									EXTRACTION_COMPLETE
								</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-[10px] text-[#6B6660] tracking-widest">
									AI CONFIDENCE:
								</span>
								<span
									className="px-2 py-0.5 border-2 text-xs font-bold tabular-nums"
									style={{
										borderColor: confidenceColor,
										color: confidenceColor,
									}}
								>
									{confidence}%
								</span>
							</div>
						</div>
					</div>

					{/* Metadata fields */}
					<div className="relative">
						<div className="absolute inset-0 translate-x-[3px] translate-y-[3px] bg-[#14130F]" />
						<div className="relative border-2 border-[#14130F] bg-white p-5 flex flex-col gap-4">
							<div className="flex items-center gap-2 border-b border-[#E8E5DD] pb-3">
								<span className="text-[#FF5A00] text-xs font-bold">❯</span>
								<span className="text-xs font-bold tracking-widest text-[#14130F]">
									METADATA
								</span>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<Field label="VENDOR NAME" value={receipt.vendor} />
								<Field label="DATE" value={receipt.date} />
								<Field
									label="TOTAL AMOUNT"
									value={`$ ${receipt.total.toFixed(2)}`}
									highlight
								/>
								<Field label="CURRENCY" value={receipt.currency} />
							</div>
						</div>
					</div>

					{/* Tags */}
					<div className="relative">
						<div className="absolute inset-0 translate-x-[3px] translate-y-[3px] bg-[#14130F]" />
						<div className="relative border-2 border-[#14130F] bg-white p-5 flex flex-col gap-3">
							<span className="text-[10px] font-bold tracking-widest text-[#6B6660]">
								APPLIED TAGS
							</span>
							<div className="flex flex-wrap gap-2">
								{tags.map((tag) => (
									<div
										key={tag}
										className="flex items-center gap-1 px-2 py-1 bg-[#14130F] text-white text-[10px] font-bold tracking-wide"
									>
										{tag}
										<button
											type="button"
											onClick={() => handleRemoveTag(tag)}
											className="ml-1 hover:text-[#FF5A00] transition-colors"
										>
											×
										</button>
									</div>
								))}
								{addingTag ? (
									<input
										ref={(el) => {
											el?.focus();
										}}
										type="text"
										value={newTag}
										onChange={(e) => setNewTag(e.target.value)}
										onKeyDown={(e) => {
											if (e.key === "Enter") handleAddTag();
											if (e.key === "Escape") {
												setAddingTag(false);
												setNewTag("");
											}
										}}
										onBlur={handleAddTag}
										placeholder="TAG NAME"
										className="px-2 py-1 border-2 border-dashed border-[#FF5A00] text-[10px] font-bold tracking-wide outline-none w-24 placeholder-[#C8C5BD]"
									/>
								) : (
									<button
										type="button"
										onClick={() => setAddingTag(true)}
										className="px-2 py-1 border-2 border-dashed border-[#14130F] text-[10px] font-bold tracking-wide text-[#6B6660] hover:border-[#FF5A00] hover:text-[#FF5A00] transition-colors"
									>
										+ ADD TAG
									</button>
								)}
							</div>
						</div>
					</div>

					{/* Line items */}
					<div className="relative">
						<div className="absolute inset-0 translate-x-[3px] translate-y-[3px] bg-[#14130F]" />
						<div className="relative border-2 border-[#14130F] bg-white">
							<div className="flex items-center justify-between px-5 py-3 border-b-2 border-[#14130F]">
								<div className="flex items-center gap-2">
									<span className="text-[#FF5A00] text-xs font-bold">❯</span>
									<span className="text-xs font-bold tracking-widest text-[#14130F]">
										LINE_ITEMS
									</span>
								</div>
								<span className="text-[10px] text-[#6B6660] font-bold">
									{receipt.lineItems.length} ITEMS
								</span>
							</div>
							{/* Header row */}
							<div className="grid grid-cols-[1fr_80px] gap-4 px-5 py-2 border-b border-[#E8E5DD] bg-[#F5F2EA]">
								<span className="text-[10px] font-bold tracking-widest text-[#6B6660]">
									DESCRIPTION
								</span>
								<span className="text-[10px] font-bold tracking-widest text-[#6B6660] text-right">
									AMOUNT
								</span>
							</div>
							{receipt.lineItems.map((item, i) => (
								<div
									key={item.description}
									className={`grid grid-cols-[1fr_80px] gap-4 px-5 py-3 items-center hover:bg-[#FFF5F0] transition-colors ${i < receipt.lineItems.length - 1 ? "border-b border-[#E8E5DD]" : ""}`}
								>
									<span className="text-xs text-[#14130F]">
										{item.description}
									</span>
									<span className="text-xs font-bold tabular-nums text-right text-[#14130F]">
										${item.amount.toFixed(2)}
									</span>
								</div>
							))}
							{/* Total row */}
							<div className="grid grid-cols-[1fr_80px] gap-4 px-5 py-3 border-t-2 border-[#14130F] bg-[#F5F2EA]">
								<span className="text-xs font-bold text-[#14130F]">TOTAL</span>
								<span className="text-xs font-bold tabular-nums text-right text-[#FF5A00]">
									${receipt.total.toFixed(2)}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function Field({
	label,
	value,
	highlight = false,
}: {
	label: string;
	value: string;
	highlight?: boolean;
}) {
	return (
		<div className="flex flex-col gap-1.5">
			<span className="text-[10px] font-bold tracking-widest text-[#6B6660]">
				{label}
			</span>
			<div
				className="px-3 py-2 border-2 border-[#14130F] text-sm font-bold focus-within:border-[#FF5A00] transition-colors"
				style={{ color: highlight ? "#FF5A00" : "#14130F" }}
			>
				{value}
			</div>
		</div>
	);
}

function HardButton({
	label,
	icon,
}: {
	label: string;
	icon?: React.ReactNode;
}) {
	return (
		<div className="relative shrink-0">
			<div className="absolute inset-0 translate-x-[3px] translate-y-[3px] bg-[#14130F]" />
			<button
				type="button"
				className="relative flex items-center gap-2 px-3 py-2 border-2 border-[#14130F] bg-white text-[#14130F] text-xs font-bold tracking-widest uppercase hover:bg-[#14130F] hover:text-white transition-colors"
			>
				{icon}
				{label}
			</button>
		</div>
	);
}
