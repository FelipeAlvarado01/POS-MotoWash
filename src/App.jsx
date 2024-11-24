import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        userName="felipealvarado01"
        name="Felipe Alvarado"
        isFollowing
      />
      <TwitterFollowCard
        userName="midudev"
        name="Jose Benito"
        isFollowing={false}
      />
    </section>
  );
}

export default App;
