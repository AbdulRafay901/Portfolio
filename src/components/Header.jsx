import "./Header.css"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FaBars, FaTimes } from "react-icons/fa"

function Header() {

    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <header className={`${scrolled ? "header scroll" : "header"} ${isOpen ? "open" : ""}`}>
            <div className="logo">
                <h1><span>R</span>afay</h1>
            </div>

            <div className="mobile-icon" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={isOpen ? "links active" : "links"}>
                <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                <li><a href="#project" onClick={() => setIsOpen(false)}>Project</a></li>
                <li><a href="#serv" onClick={() => setIsOpen(false)}>Services</a></li>
                <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                
                <li className="mobile-icons">
                    <a href="https://github.com/AbdulRafay901" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.instagram.com/rafaywebstudio/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.linkedin.com/in/abdul-rafay-95146b3a7/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                </li>
            </ul>

            <ul className="icons">
                <li><a href="https://github.com/AbdulRafay901" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href="https://www.instagram.com/rafaywebstudio/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="https://www.linkedin.com/in/abdul-rafay-95146b3a7/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            </ul>
        </header>
    )
}

export default Header