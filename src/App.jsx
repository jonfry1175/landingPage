import React from "react";
import { Footer, Gallery, Hero, NavBarCom, Service, Faq } from "./components";

function App() {
  return (
    <div>
      <Hero />
      {/* content */}
       <NavBarCom />
      <Gallery />
      <Service />
      <Faq /> 
      {/* content */}
      <Footer />
    </div>
  );
}

export default App;
