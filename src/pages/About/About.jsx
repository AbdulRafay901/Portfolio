import { useState } from "react";
import "./About.css";
import Skills from "./Skills";

function About() {

  const [flip, setFlip] = useState(false);

  return (
    <div className="about" id="about">

      <div className="title">
        <h2>About Me</h2>
      </div>

      <div className="content">

        <div
          className="photo-card"
          onClick={() => setFlip(!flip)}
        >

          <div className={flip ? "photo-inner flip" : "photo-inner"}>

            {/* FRONT IMAGE */}

            <div className="photo-front">
              <img src="Anime portrait of a calm teen.png" alt="" />
            </div>

            {/* BACK IMAGE */}

            <div className="photo-back">
              <img src="img4.png" alt="" />
            </div>

          </div>

        </div>

        <div className="text-about">
          <p>
             Hi, I'm Abdul Rafay — a Full Stack Web Developer who loves turning ideas into real websites. I enjoy both frontend and backend development, and I'm always pushing myself to get better. I care about how things look, how they work, and how they feel to use. For me, coding isn't just a skill — it's something I genuinely enjoy doing.
My goal? Simple — become one of the best developers out there. Still learning, still building, but fully committed to getting there.
          </p>
        </div>

      </div>

      <Skills />

    </div>
  );
}

export default About;