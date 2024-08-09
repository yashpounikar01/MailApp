import { useState } from "react";
import "./App.css";
import SideNav from "./components/SideNav";
import Main from "./components/Main";

function App() {
  const [activeSection, setActiveSection] = useState("Inbox");

  return (
    <div className="h-screen w-screen flex">
      <SideNav setActiveSection={setActiveSection} />
      <Main activeSection={activeSection} />
    </div>
  );
}

export default App;
