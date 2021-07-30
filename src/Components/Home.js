import React from "react";
import Destinations from "./Destinations";
import Landing from "./Landing";
import Stays from "./Stays";

function Home() {
  return (
    <div>
      <Landing />
      <Destinations />
      <Stays />
    </div>
  );
}

export default Home;
