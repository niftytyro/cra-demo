import React from "react";
import "./App.css";
import Authentication from "./components/Authentication";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="bg-white flex items-stretch h-full w-full">
      <Banner />
      <Authentication />
    </div>
  );
}

export default App;
