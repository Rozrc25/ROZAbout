import React, { useEffect, useState } from "react";
import { TiAdjustBrightness } from "react-icons/ti";


const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme ); 
  }, [theme]);
  return (
    <div className="nav_ac" onClick={themetoggle}>
      <TiAdjustBrightness />
    </div>
  );
};

export default Themetoggle;
