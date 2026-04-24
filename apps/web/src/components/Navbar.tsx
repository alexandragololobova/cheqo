import { NavLink } from "react-router-dom";
import { Logo } from "./Logo.tsx";
import { LogoMark } from "./LogoMark.tsx";

export function Navbar() {
	return (
		<nav
			className="bg-white border-b-2 border-[#14130F] sticky top-0 z-40"
			style={{ fontFamily: "'JetBrains Mono', monospace" }}
		>
			<div className="mx-auto max-w-7xl px-6 flex items-center h-14 gap-6">
				{/* Logo lockup */}
				<div className="flex items-center gap-3 shrink-0">
					<LogoMark size={32} />
					{/* Vertical divider */}
					<div className="w-px h-5 bg-[#14130F]" />
					<Logo />
				</div>

				{/* Nav links */}
				<div className="flex items-center gap-0">
					<NavLink
						to="/dashboard"
						className={({ isActive }) =>
							`px-4 py-1.5 text-sm font-bold tracking-wide transition-colors border-b-2 ${
								isActive
									? "text-[#FF5A00] border-[#FF5A00]"
									: "text-[#14130F] border-transparent hover:text-[#FF5A00]"
							}`
						}
					>
						Dashboard
					</NavLink>
					<NavLink
						to="/"
						className={({ isActive }) =>
							`px-4 py-1.5 text-sm font-bold tracking-wide transition-colors border-b-2 ${
								isActive
									? "text-[#FF5A00] border-[#FF5A00]"
									: "text-[#14130F] border-transparent hover:text-[#FF5A00]"
							}`
						}
					>
						Upload
					</NavLink>
					<NavLink
						to="/receipts"
						className={({ isActive }) =>
							`px-4 py-1.5 text-sm font-bold tracking-wide transition-colors border-b-2 ${
								isActive
									? "text-[#FF5A00] border-[#FF5A00]"
									: "text-[#14130F] border-transparent hover:text-[#FF5A00]"
							}`
						}
					>
						Receipts
					</NavLink>
				</div>

				{/* Right side — ⌘K chip + settings */}
				<div className="ml-auto flex items-center gap-3">
					{/* Search chip — visual only for now */}
					<div className="flex items-center gap-2 px-3 py-1.5 border-2 border-[#14130F] bg-white shadow-[2px_2px_0px_#14130F] text-xs text-[#6B6660] cursor-pointer hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
						<svg
							width="12"
							height="12"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							role="img"
							aria-label="Search"
						>
							<circle cx="11" cy="11" r="8" />
							<line x1="21" y1="21" x2="16.65" y2="16.65" />
						</svg>
						<span>Search receipts...</span>
						<span className="flex items-center gap-0.5 ml-1">
							<kbd className="px-1 py-0.5 border border-[#14130F] text-[10px] font-bold">
								⌘
							</kbd>
							<kbd className="px-1 py-0.5 border border-[#14130F] text-[10px] font-bold">
								K
							</kbd>
						</span>
					</div>

					{/* Settings cog */}
					<button
						type="button"
						className="p-1.5 border-2 border-[#14130F] bg-white shadow-[2px_2px_0px_#14130F] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
						aria-label="Settings"
					>
						<svg
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#14130F"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							role="img"
							aria-label="Settings icon"
						>
							<circle cx="12" cy="12" r="3" />
							<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
						</svg>
					</button>
				</div>
			</div>
		</nav>
	);
}
