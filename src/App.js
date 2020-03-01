import React from "react";
import "./styles/app.css";
import "./styles/customStyles.css";
import HeaderContent from "./components/HeaderContent";
import HeaderVisuals from "./components/HeaderVisuals";

function App() {
  return (
    <div className="container mx-auto text-center p-6 h-screen flex flex-col justify-between lg:flex-row lg:text-left lg:p-0 lg:py-6">
      <HeaderContent />
      <HeaderVisuals />
    </div>
  );
}

export default App;
