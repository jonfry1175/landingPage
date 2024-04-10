import React from "react";
import { Footer, Gallery, Home, NavBarCom, Service, Faq } from "./components";

function App() {
  return (
    <div>
      <Home />
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
