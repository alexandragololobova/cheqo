import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar.tsx";
import { StatusBar } from "./components/StatusBar.tsx";
import { DashboardPage } from "./pages/DashboardPage.tsx";
//import { ReceiptDetailPage } from "./pages/ReceiptDetailPage.tsx";
import { ReceiptsPage } from "./pages/ReceiptsPage.tsx";
import { UploadPage } from "./pages/UploadPage.tsx";

function AppShell() {
	const location = useLocation();

	const statusConfig: Record<
		string,
		{ mode: string; shortcuts: { key: string; label: string }[] }
	> = {
		"/": {
			mode: "INGEST",
			shortcuts: [
				{ key: "U", label: "Upload" },
				{ key: "/", label: "Search" },
				{ key: "?", label: "Help" },
			],
		},
		"/dashboard": {
			mode: "ANALYTICS",
			shortcuts: [
				{ key: "1-5", label: "Filter Range" },
				{ key: "E", label: "Export" },
				{ key: "/", label: "Search" },
			],
		},
		"/receipts": {
			mode: "RECEIPTS",
			shortcuts: [
				{ key: "/", label: "Search" },
				{ key: "F", label: "Filter" },
				{ key: "E", label: "Export" },
			],
		},
	};

	const routeKey = location.pathname.startsWith("/receipts/")
		? "/receipts/:id"
		: location.pathname;

	const detailConfig = {
		mode: "EDIT",
		shortcuts: [
			{ key: "ESC", label: "Discard" },
			{ key: "⌘S", label: "Save Changes" },
		],
	};

	const config =
		routeKey === "/receipts/:id"
			? detailConfig
			: (statusConfig[routeKey] ?? { mode: "UNKNOWN", shortcuts: [] });

	return (
		<div
			className="min-h-screen bg-[#F5F2EA]"
			style={{ paddingBottom: "2rem" }}
		>
			<Navbar />
			<main className="bg-grid mx-auto max-w-7xl px-6 py-8">
				<Routes>
					<Route path="/" element={<UploadPage />} />
					<Route path="/receipts" element={<ReceiptsPage />} />
					<Route path="/dashboard" element={<DashboardPage />} />
					{/*<Route path="/receipts/:id" element={<ReceiptDetailPage />} /> */}
				</Routes>
			</main>
			<StatusBar mode={config.mode} shortcuts={config.shortcuts} />
		</div>
	);
}

function App() {
	return <AppShell />;
}

export default App;
