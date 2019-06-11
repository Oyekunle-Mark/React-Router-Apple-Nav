import React from "react";
import { Link } from "react-router-dom";

import Navigation from "./components/Navigation";
import SubNavigation from "./components/SubNavigation";

function App() {
  return (
    <div className="App">
      <Link to="/">
        <img
          src="https://image.flaticon.com/icons/svg/179/179309.svg"
          alt="apple-logo"
        />
      </Link>

      <Navigation />
      <SubNavigation />
    </div>
  );
}

export default App;
