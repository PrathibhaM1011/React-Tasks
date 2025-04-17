import SocialMedia from "./SocialMedia";

const Footer = ()=>{
    return <footer className="footer">
    <div className="footer-content">
      <div className="footer-brand">
        <h2>CoffeeCrush</h2>
        <p>Sipping happiness in every cup.</p>
      </div>
  
      <div className="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
  
      <div className="footer-contact">
        <h3>Contact</h3>
        <p>Email: hello@coffeecrush.com</p>
        <p>Phone: +91 9876543210</p>

        <div className="footer-socials">
        <SocialMedia/>
        </div>
      </div>
    </div>
  
    <div className="footer-bottom">
      <p>© 2025 CoffeeCrush. All rights reserved.</p>
    </div>
  </footer>
  
}

export default Footer;