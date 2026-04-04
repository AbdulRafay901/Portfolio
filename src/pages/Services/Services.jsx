import "./Services.css"
import { FaCode, FaPalette, FaLaptopCode, FaShoppingCart, FaWordpress } from "react-icons/fa";

function Services(){

  return(
    <div className="services" id="serv">

      <div className="title">
        <h2>Services</h2>
      </div>

      <div className="services-container">

        <div className="service-card">
          <FaLaptopCode className="service-icon"/>
          <h3>Web Development</h3>
          <p>From idea to live website.
Building modern, fast and responsive websites using HTML, CSS, Bootstrap and JavaScript with PHP & MySQL backend integration — from simple landing pages to full dynamic web applications.</p>
        </div>

        <div className="service-card">
          <FaShoppingCart className="service-icon"/>
          <h3>E-Commerce Development</h3>
          <p>Sell online, the right way.
Creating fully functional online stores with product management, shopping cart, order tracking, admin panel and email notifications using PHP & MySQL.</p>
        </div>

        <div className="service-card">
          <FaWordpress className="service-icon"/>
          <h3>Wordpress Development</h3>
          <p>Beautiful sites, zero hassle.
Building responsive WordPress websites with custom themes and plugins — clean layouts, smooth UI and great user experience across all devices..</p>
        </div>

      </div>

    </div>
  )

}

export default Services;