import { useState} from "react";
import Navbar from "../components/Navbar";
import Random from './Random'
import Search from './Search'

export default function Home() {
  const [activeSection, setActiveSection] = useState("random");

  return (
    <div className="relative min-h-screen">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      {activeSection === "random" && <Random/>}
      {activeSection === "search" && <Search/>}
    </div>
  );
}
