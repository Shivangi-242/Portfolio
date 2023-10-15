import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = {
  github: "https://github.com/Shivangi-242",
  instagram: "https://www.instagram.com",
  linkedin: "https://www.linkedin.com/in/YourLinkedInProfile/",
};

const email = "shivangiraj.2003@gmail.com";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h3>Contact Me</h3>
            <p>
              If you have any questions or want to collaborate, feel free to get
              in touch.
            </p>
            <a href={`mailto:${email}`} className="contact-email">
              {email}
            </a>
          </div>

          <div className="footer-right">
            <h3>Connect with Me</h3>
            <div className="social-links">
              <a href={socialLinks.github} target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href={socialLinks.instagram} target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href={socialLinks.linkedin} target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
