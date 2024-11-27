import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="felipealvarado01">
        Felipe Alvarado
      </TwitterFollowCard>

      <TwitterFollowCard userName="midudev">Jose Benito</TwitterFollowCard>
    </section>
  );
}

export default App;
