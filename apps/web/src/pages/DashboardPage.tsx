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
	{ tag: "Business", amount: 323.79, color: "#FF5A00" },
	{ tag: "Groceries", amount: 127.48, color: "#14130F" },
	{ tag: "Transportation", amount: 58.32, color: "#14130F" },
	{ tag: "Food", amount: 140.23, color: "#14130F" },
	{ tag: "Supplies", amount: 234.56, color: "#14130F" },
];

const RECENT_RECEIPTS = [
	{
		id: "R-1042",
		vendor: "Whole Foods Market",
		date: "2026-03-24",
		amount: 127.48,
		tags: ["GROCERIES", "FOOD"],
	},
	{
		id: "R-1041",
		vendor: "Amazon Web Services",
		date: "2026-03-22",
		amount: 89.23,
		tags: ["BUSINESS", "SOFTWARE"],
	},
	{
		id: "R-1040",
		vendor: "Starbucks Coffee",
		date: "2026-03-21",
		amount: 12.75,
		tags: ["FOOD", "MEETING"],
	},
	{
		id: "R-1039",
		vendor: "Office Depot",
		date: "2026-03-18",
		amount: 234.56,
		tags: ["SUPPLIES", "BUSINESS"],
	},
	{
		id: "R-1038",
		vendor: "Shell Gas Station",
		date: "2026-03-15",
		amount: 58.32,
		tags: ["TRANSPORTATION"],
	},
];

const MAX_TAG_AMOUNT = Math.max(...TAG_SPENDING.map((entry) => entry.amount));

// custom chart tooltip

type TooltipProps = {
	active?: boolean;
	payload?: { value: number }[];
	label?: string;
};

function ChartTooltip({ active, payload, label }: TooltipProps) {
	if (!active || !payload || payload.length === 0) return null;

	return (
		<div className="border-2 border-[#14130F] bg-white px-3 py-2 shadow-[3px_3px_0px_#14130F]">
			<p className="text-[#6B6660] text-xs">{label}</p>
			<p className="text-[#FF5A00] text-sm font-bold mt-0.5">
				${payload[0]?.value.toFixed(2)}
			</p>
		</div>
	);
}

export function DashboardPage() {
	return (
		<div className="flex flex-col gap-6">
			{/* Header */}
			<div className="flex items-start justify-between">
				<div className="flex flex-col gap-1 border-l-4 border-[#FF5A00] pl-4">
					<div className="flex items-center gap-2">
						<svg
							role="img"
							aria-label="Analytics"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#FF5A00"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<line x1="18" y1="20" x2="18" y2="10" />
							<line x1="12" y1="20" x2="12" y2="4" />
							<line x1="6" y1="20" x2="6" y2="14" />
						</svg>
						<h1 className="text-2xl font-bold tracking-widest uppercase text-[#14130F]">
							ANALYTICS OVERVIEW
						</h1>
					</div>
					<p className="text-sm text-[#6B6660]">March 2026 • All Tags</p>
				</div>

				{/* Export button */}
				<HardButton
					label="EXPORT REPORT"
					icon={
						<svg
							role="img"
							aria-label="Export"
							width="12"
							height="12"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
							<polyline points="14 2 14 8 20 8" />
						</svg>
					}
				/>
			</div>

			{/* KPI cards */}

			{/* Chart + Tag distribution */}
			<div>
				{/* Spend velocity chart*/}
				<div>
					<div />
					<div>
						<div>
							<div>
								<svg
									role="img"
									aria-label="Velocity"
									width="14"
									height="14"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#FF5A00"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
								</svg>
								<span className="text-xs font-bold tracking-widest text-[#14130F] uppercase">
									SPEND VELOCITY
								</span>
							</div>
							{/* Time range pills */}
							<div>
								{["30D", "90D", "1Y"].map((r, i) => (
									<button
										key={r}
										type="button"
										className={`px-2 py-0.5 text-xs font-bold border border-[#14130F] transition-colors ${
											i === 0
												? "bg-[#14130F] text-white"
												: "bg-white text-[#6B6660] hover:text-[#14130F]"
										}`}
									>
										{r}
									</button>
								))}
							</div>
						</div>
						<ResponsiveContainer>
							<AreaChart data={DAILY_SPENDING}>
								<defs></defs>
								<CartesianGrid />
								<XAxis />
								<YAxis />
								<Tooltip />
								<Area
									type="step"
									dataKey="amount"
									stroke="#FF5A00"
									strokeWidth={2}
									fill="url(#orangeGrad)"
									dot={false}
								/>
							</AreaChart>
						</ResponsiveContainer>
					</div>
				</div>

				{/* Tag distribution */}
				<div>
					<div />
					<div>
						<div>
							<svg
								role="img"
								aria-label="Tags"
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
							<span className="text-xs font-bold tracking-widest text-[#14130F] uppercase">
								TAG DISTRIBUTION
							</span>
						</div>
						<div className="flex flex-col gap-4">
							{TAG_SPENDING.map((item) => (
								<TagBar key={item.tag} {...item} max={MAX_TAG_AMOUNT} />
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Recent transactions */}
			<div>
				<div />
				<div>
					{/* Table header */}
					<div>
						<div>
							<svg
								role="img"
								aria-label="Recent"
								width="14"
								height="14"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#FF5A00"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
							</svg>
							<span className="text-xs font-bold tracking-widest text-[#14130F] uppercase">
								RECENT_TRANSACTIONS
							</span>
						</div>
						<button
							type="button"
							className="text-xs font-bold text-[#6B6660] hover:text-[#FF5A00] tracking-widest transition-colors underline underline-offset-4"
						>
							VIEW ALL
						</button>
					</div>

					{/* Column headers */}
					<div className="grid grid-cols-[80px_1fr_140px_120px_1fr_60px] gap-4 px-6 py-2 border-b border-[#E8E5DD]">
						{["ID", "VENDOR", "DATE", "AMOUNT", "TAGS", "STATUS"].map((h) => (
							<span
								key={h}
								className="text-[10px] font-bold tracking-widest text-[#6B6660] uppercase"
							>
								{h}
							</span>
						))}
					</div>

					{/* Rows */}
				</div>
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

type TagBarProps = {
	tag: string;
	amount: number;
	color: string;
	max: number;
};

function TagBar({ tag, amount, color }: TagBarProps) {
	const percent = (amount / MAX_TAG_AMOUNT) * 100;
	return (
		<div className="flex flex-col gap-1.5">
			<div className="flex items-center justify-between">
				<span className="text-[#9CA3AF] text-sm">{tag}</span>
				<span className="text-white text-sm font-medium">
					${amount.toFixed(2)}
				</span>
			</div>
			<div className="h-1.5 rounded-full bg-[#2A2A38]">
				<div
					className="h-1.5 rounded-full transition-all"
					style={{ width: `${percent}%`, backgroundColor: color }}
				/>
			</div>
		</div>
	);
}

type RecentReceiptRowProps = {
	vendor: string;
	date: string;
	total: number;
};

function RecentReceiptRow({ vendor, date, total }: RecentReceiptRowProps) {
	return (
		<div className="flex items-center justify-between px-4 py-3 bg-[#16161F] rounded-xl hover:bg-[#1E1E2E] transition-colors">
			<div>
				<p className="text-white text-sm font-medium">{vendor}</p>
				<p className="text-[#6B7280] text-xs mt-0.5">{date}</p>
			</div>
			<p className="text-[#7B6FFF] font-semibold text-sm">
				${total.toFixed(2)}
			</p>
		</div>
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

type HardButtonProps = {
	label: string;
	icon?: ReactNode;
};

function HardButton({ label, icon }: HardButtonProps) {
	return (
		<div className="relative shrink-0">
			<div className="absolute inset-0 translate-x-[3px] translate-y-[3px] bg-[#14130F]" />
			<button
				type="button"
				className="relative flex items-center gap-2 px-4 py-2 border-2 border-[#14130F] bg-white text-[#14130F] text-xs font-bold tracking-widest uppercase hover:bg-[#14130F] hover:text-white transition-colors"
			>
				{icon}
				{label}
			</button>
		</div>
	);
}
