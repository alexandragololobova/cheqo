import { type ReactNode, useState } from "react";
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const DAILY_SPENDING = [
	{ date: "Mar 14", amount: 0 },
	{ date: "Mar 16", amount: 58.32 },
	{ date: "Mar 18", amount: 234.56 },
	{ date: "Mar 20", amount: 12.75 },
	{ date: "Mar 22", amount: 89.23 },
	{ date: "Mar 24", amount: 127.48 },
	{ date: "Mar 26", amount: 58.32 },
];

const TAG_SPENDING = [
	{ tag: "Business", amount: 323.79, color: "#7B6FFF" },
	{ tag: "Groceries", amount: 127.48, color: "#10B981" },
	{ tag: "Transportation", amount: 58.32, color: "#F59E0B" },
	{ tag: "Food", amount: 140.23, color: "#38BDF8" },
	{ tag: "Supplies", amount: 234.56, color: "#F43F5E" },
];

const RECENT_RECEIPTS = [
	{ vendor: "Whole Foods Market", date: "March 24, 2026", total: 127.48 },
	{ vendor: "Amazon Web Services", date: "March 22, 2026", total: 89.23 },
	{ vendor: "Starbucks Coffee", date: "March 20, 2026", total: 12.75 },
	{ vendor: "Office Depot", date: "March 18, 2026", total: 234.56 },
	{ vendor: "Shell Gas Station", date: "March 16, 2026", total: 58.32 },
];

const MAX_TAG_AMOUNT = Math.max(...TAG_SPENDING.map((entry) => entry.amount));

export function DashboardPage() {
	return (
		<div className="flex flex-col gap-6">
			{/* Header */}
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold text-white">Dashboard</h1>
				<button
					type="button"
					className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1C1C27] border border-[#2A2A38] text-[#D4D7DC] text-sm hover:text-white hover:border-[#7B6FFF] transition-colors"
				>
					<svg
						role="img"
						aria-label="Calendar"
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
						<line x1="16" y1="2" x2="16" y2="6" />
						<line x1="8" y1="2" x2="8" y2="6" />
						<line x1="3" y1="10" x2="21" y2="10" />
					</svg>
					March 2026
				</button>
			</div>

			{/* Stat card */}
			<div className="grid grid-cols-3 gap-6">
				<StatCard
					icon={<DollarIcon />}
					iconBg="from-[#7B6FFF] to-[#5B4FD4]"
					accentColor="#7B6FFF"
					value="$522.34"
					label="Total Spent"
				/>
				<StatCard
					icon={<ReceiptIcon />}
					iconBg="from-[#10B981] to-[#059669]"
					accentColor="#10B981"
					value="5"
					label="Receipts"
				/>
				<StatCard
					icon={<TrendIcon />}
					iconBg="from-[#F59E0B] to-[#D97706]"
					accentColor="#F59E0B"
					value="$104.47"
					label="Average per Receipt"
				/>
			</div>
		</div>
	);
}

// sub components

type StatCardProps = {
	icon: ReactNode;
	iconBg: string;
	accentColor: string;
	value: string;
	label: string;
};

function StatCard({ icon, iconBg, accentColor, value, label }: StatCardProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<button
			type="button"
			className="relative overflow-hidden bg-[#1C1C27] rounded-xl border p-6 flex flex-col gap-4 transition-all group text-left w-full"
			style={{
				borderColor: isHovered ? `${accentColor}18` : `${accentColor}15`,
				boxShadow: isHovered
					? `0 0 27px -2px ${accentColor}45`
					: `0 0 15px -2px ${accentColor}35`,
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div
				className="absolute -top-7 -right-6 w-30 h-30 rounded-full blur-2xl pointer-events-none opacity-45 transition-all duration-300 group-hover:scale-150 group-hover:opacity-65"
				style={{ backgroundColor: `${accentColor}25` }}
			/>
			<div
				className={`relative w-11 h-11 rounded-xl flex items-center justify-center bg-linear-to-br ${iconBg}`}
				style={{ boxShadow: `0 0 20px ${accentColor}80` }}
			>
				{icon}
			</div>
			<div className="relative transition-transform duration-300 group-hover:-translate-y-0.5">
				<p className="text-2xl font-bold text-white">{value}</p>
				<p className="text-[#6B7280] text-sm mt-0.5">{label}</p>
			</div>
		</button>
	);
}

// icon components

function DollarIcon() {
	return (
		<svg
			role="img"
			aria-label="Dollar"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="white"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="12" y1="1" x2="12" y2="23" />
			<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
		</svg>
	);
}

function ReceiptIcon() {
	return (
		<svg
			role="img"
			aria-label="Receipt"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="white"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M14 2H6a2 2 0 0 0-2 3v16l4-2 4 2 4-2 4 2V8z" />
			<line x1="9" y1="10" x2="15" y2="10" />
			<line x1="9" y1="14" x2="13" y2="14" />
		</svg>
	);
}

function TrendIcon() {
	return (
		<svg
			role="img"
			aria-label="Trend"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="white"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
			<polyline points="17 6 23 6 23 12" />
		</svg>
	);
}
