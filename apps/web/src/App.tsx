import "./App.css";
import { Logo } from "./components/Logo.tsx";
import { LogoMark } from "./components/LogoMark.tsx";

function App() {
	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
			<div style={{ background: "#0D0D0D", padding: "20px" }}>
				<LogoMark size={50} />
			</div>
			<div style={{ background: "#0D0D0D", padding: "30px" }}>
				<LogoMark size={200} />
			</div>
			<div style={{ background: "#0D0D0D", padding: "20px" }}>
				<Logo height={150} />
			</div>
			<div style={{ background: "#0D0D0D", padding: "20px" }}>
				<Logo height={30} />
			</div>
		</div>
	);
}

export default App;
