import "./Footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer(){

  return(

    <footer className="footer">

      <div className="footer-container">

        <p>© 2026 Abdul Rafay</p>

        <div className="social-icons">

          <a href="https://github.com/AbdulRafay901" target="_blank"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/abdul-rafay-95146b3a7/" target="_blank"><FaLinkedin/></a>
          <a href="https://www.instagram.com/rafaywebstudio/" target="_blank"><FaInstagram/></a>

        </div>

      </div>

    </footer>

  )

}

export default Footer;