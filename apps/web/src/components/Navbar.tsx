import { NavLink } from "react-router-dom";
import { Logo } from "./Logo.tsx";
import { LogoMark } from "./LogoMark.tsx";

export function Navbar() {
	return (
		<nav className={"bg-[#0F0F14] border-b border-[#2A2A38"}>
			<div
				className={"mx-auto max-w-7xl px-6 grid grid-cols-3 items-center h-16"}
			>
				{/* Logo */}
				<div className={"flex items-center gap-0"}>
					<LogoMark size={45} />
					<div className={"hidden sm:block"}>
						<Logo height={35} />
					</div>
				</div>

				{/* Nv links */}
				<div className={"flex items-center justify-center gap-1"}>
					<NavLink
						to={"/receipts"}
						className={({ isActive }) =>
							`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
								isActive
									? "text-white bg-white/10"
									: "text-[#9CA3AF] hover:text-white hover:bg-white/5"
							}`
						}
					>
						Receipts
					</NavLink>
					<NavLink
						to={"/dashboard"}
						className={({ isActive }) =>
							`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
								isActive
									? "text-white bg-white/10"
									: "text-[#9CA3AF] hover:text-white hover:bg-white/5"
							}`
						}
					>
						Dashboard
					</NavLink>
				</div>

				{/* Avatar placeholder */}
				<div className={"flex justify-end"}>
					<div
						className={
							"w-8 h-8 rounded-full bg-[#7B6FFF] flex items-center justify-center text-white text-xs font-medium"
						}
					>
						A
					</div>
				</div>
			</div>
		</nav>
	);
}
