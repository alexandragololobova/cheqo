import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar.tsx";
import { DashboardPage } from "./pages/DashboardPage.tsx";
import { ReceiptsPage } from "./pages/ReceiptsPage.tsx";
import { UploadPage } from "./pages/UploadPage.tsx";

function App() {
	return (
		<div className={"min-h-screen bg-[#13131A"}>
			<Navbar />
			<main className={"mx-auto max-w-7xl px-6 py-8"}>
				<Routes>
					<Route path={"/"} element={<UploadPage />} />
					<Route path={"/receipts"} element={<ReceiptsPage />} />
					<Route path={"/dashboard"} element={<DashboardPage />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
