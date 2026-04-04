import UnicornScene from "unicornstudio-react";
import "./Hero.css";
import { useState, useEffect } from "react";

export default function Hero() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // Small adjustment for mobile scaling to prevent internal text clipping
      if (window.innerWidth < 768) {
        setScale(0.75); // Slightly larger than before for better visibility
      } else {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="hero" id="hero">
      <UnicornScene
        projectId="th8F8gzrAqe3aAk6mcLY"
        width="100%"
        height="900px" // Let it fill the .hero container
        scale={scale}
        dpi={1.5}
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.3/dist/unicornStudio.umd.js"
      />
      <div className="content">
        <div className="buttn">
          <a href="#contact">Contact</a>
          <a href="#about">Who I Am</a>
        </div>
      </div>
    </div>
  );
}