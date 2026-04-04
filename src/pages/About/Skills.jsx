import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaWordpress,
} from "react-icons/fa";

import {
  SiBootstrap,
  SiMysql,
  SiPhp,
  SiLaravel,
} from "react-icons/si";

function Skills() {
  return (
    <div className="skills">
      <div className="skills-slider">
        <div className="skills-track">
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <SiBootstrap />
          <SiPhp />
          <SiMysql />
          <SiLaravel />
          <FaWordpress />

          {/* Duplicate for infinite scroll effect */}
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <SiBootstrap />
          <SiPhp />
          <SiMysql />
          <SiLaravel />
          <FaWordpress />
        </div>
      </div>
    </div>
  );
}

export default Skills;