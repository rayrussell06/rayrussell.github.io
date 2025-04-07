import SoccerGame from "./components/SoccerGame";

export default function App() {
  return (
    <div style={{ backgroundColor: "#111", minHeight: "100vh", color: "#fff" }}>
      <h1 style={{ textAlign: "center", paddingTop: "2rem" }}>Eurofooty</h1>
      <SoccerGame />
    </div>
  );
}
