import "./App.css";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Superhero from "./components/Superhero";
import "./style/landingpage.css";

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <Navigation />
        <Intro />
      </div>
      {/* end of intro */}
      {/* trending */}
      <div className="trending">
        <Trending />
      </div>
      {/* end trending */}
      {/* superhero */}
      <div className="superhero">
        <Superhero />
      </div>
      {/* end superhero */}
    </div>
  );
}

export default App;
