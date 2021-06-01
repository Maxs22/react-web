import React, { useState, useEffect } from "react";
import './App.css';
import About from "./components/About/About";
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";

function App() {
    const [scrollHeight, setScrollHeight] = useState(0);

    const handlescroll = () => {
      const position = window.pageYOffset;
      setScrollHeight(position);
    };

    useEffect(() => {
      window.addEventListener("scroll", handlescroll)
    }, [scrollHeight])
  return (

    <div className="App">
      <Navbar isScrolling={scrollHeight}/>
      <Cover />
      <About />
    </div>
  );
}

export default App;
