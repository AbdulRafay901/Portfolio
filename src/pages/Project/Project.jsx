import "./Project.css";

import img1 from "../../assets/images/Ecommerce.png";
import img2 from "../../assets/images/Bakery.png";
import img3 from "../../assets/images/Rock.png";
import img4 from "../../assets/images/Lavisha.png";
import img5 from "../../assets/images/Tastyc.png";
import img6 from "../../assets/images/Ewebot.png";
import img7 from "../../assets/images/wordpress1.png";
import img8 from "../../assets/images/wordpress2.png";
import video1 from "../../assets/images/video1.mp4";
import video2 from "../../assets/images/video2.mp4";

const projects = [
  {
    title: "E-Commerce Website",
    img: img1,
    desc: "A fully functional e-commerce store with product listing, search & filtering, shopping cart, order management, automated email notifications, and a complete admin panel. Features role-based authentication for both users and admins — fully responsive on all devices.",
    skills: ["HTML", "CSS", "Boostrap", "JavaScript", "php", "mysql", "Swiper Slider", "Aos"],
    Live: "https://jewelleryshop.infinityfreeapp.com/"
  },

  {
    title: "Bakery Website",
    img: img2,
    desc: "A clean and modern bakery website with a beautiful UI, showcasing products and menu items. Fully responsive across all devices — built with pure frontend technologies",
    skills: ["HTML", "CSS", "Bootstrap", "Javascript", "isotope", "Masonry"],
    Live: "https://bakeryss.netlify.app/"
  },

   {
    title: "Cleaning Service Website",
    img: img4,
    desc: "A clean and professional cleaning service website for Lavisha with a modern UI, service listings, and a fully responsive layout across all devices",
    skills: ["HTML", "CSS", "Boostrap", "JavaScript", "GSAP", "Aos"],
    Live: "https://lavishas.netlify.app/"
  },

  {
    title: "Rock Paper Scissors Game",
    img: img3,
    desc: "A fun and interactive Rock Paper Scissors game built with vanilla JavaScript. Play against the computer with real-time score tracking and smooth UI feedback.",
    skills: ["HTML", "CSS", "Javascript"]
  },

 

  {
    title: "Restaurant Website",
    img: img5,
    desc: "A modern and appetizing restaurant website for Tasyc featuring a beautiful menu showcase, clean UI, contact form with email notification to the owner, and a fully responsive layout across all devices.",
    skills: ["HTML", "CSS", "Boostrap" ,"Aos", "GSAP"],
    Live: "https://tastycs.netlify.app/"
  },

  {
    title: "Ewebot — Digital Agency & Online Store",
    img: img6,
    desc: "A hybrid digital agency and e-commerce website featuring agency services alongside a fully functional product store. Built with a custom-made API for product listing, add to cart, quantity management, and order total — all on the frontend with a clean, modern UI and fully responsive layout.",
    skills: ["HTML", "CSS", "Boostrap" ,"JS"],
    Live: "https://ewebots.netlify.app/"
  }
];

export default function Project() {

  return (

    <section className="project reveal" id="project">

      <div className="title">
        <h2>Projects</h2>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img src={project.img} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="skills">
              {project.skills.map((skill, i) => (
                <a href="#" key={i}>{skill}</a>
              ))}
            </div>

            <div className="btns">

              <a href="https://github.com/AbdulRafay901" target="_blank" className="btn">
                <i className="fab fa-github"></i> GitHub
              </a>

              <a href={project.Live} target="_blank" className="btn">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>

            </div>

          </div>

        ))}

        <div className="project-card" key="">

            <img src={img7} alt="" />

            <h3>BIBOT – Digital Platform Website</h3>

            <p>A modern digital platform website for BIBOT, featuring a clean layout, engaging hero section, and a robot-themed design. Includes smooth navigation, clear call-to-action buttons, and a well-structured layout to showcase the platform and its services.</p>

            <div className="skills">
                  <a href="#" >WordPress</a>
                  <a href="#" >Elementor</a>
            </div>

            <div className="btns">

              <a href={video1} target="_blank" className="btn">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>

            </div>

          </div>

          <div className="project-card" key="">

            <img src={img8} alt="" />

            <h3>Pine – Creative Agency Website</h3>

            <p>A modern and stylish website for a creative agency, featuring a dark theme, minimal navigation, and a bold hero section. Designed to showcase creative services and portfolios with an elegant layout, smooth visual elements, and a responsive design across all devices.</p>

            <div className="skills">
                  <a href="#" >WordPress</a>
                  <a href="#" >Elementor</a>
            </div>

            <div className="btns">

              <a href={video2} target="_blank" className="btn">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>

            </div>

          </div>

      </div>

    </section>

  );

}