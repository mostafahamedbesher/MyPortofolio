import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-container">
        <div className="contact-phone-box">
          <p className="contact-text">Call me : </p>
          <p className="contact-data">+201550181178</p>
        </div>
        <div className="contact-mail-box">
          <p className="contact-text">Email me : </p>
          <p className="contact-data">mostafabesher222@gmail.com</p>
        </div>
        <div className="contact-links-box">
          <SocialIcons iconSize={"big"} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
