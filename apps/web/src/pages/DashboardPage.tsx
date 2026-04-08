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
	return <div>Dashboard Page</div>;
}
