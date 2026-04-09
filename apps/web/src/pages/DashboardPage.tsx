import type { ReactNode } from "react";
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
		<>
			<div>Dashboard Page</div>
			<div>
				<DollarIcon />
			</div>
			<div>
				<ReceiptIcon />
			</div>
			<div>
				<TrendIcon />
			</div>
		</>
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
			<path d="M14 2H6a2 2 0 0 0-2 2v16l4-2 4 2 4-2 4 2V8z" />
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
