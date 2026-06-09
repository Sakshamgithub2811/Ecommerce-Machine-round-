import { FiSend } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h2>Exclusive</h2>
          <h3>Subscribe</h3>
          <p>Get 10% off your first order</p>
          <div className="footer-input">
            <input type="text" placeholder="Enter your email" />
            <FiSend />
          </div>
        </div>

        <div>
          <h3>Support</h3>
          <p>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div>
          <h3>Account</h3>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        <div>
          <h3>Quick Link</h3>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        <div>
          <h3>Download App</h3>
          <p>Save $3 with App New User Only</p>
          <div className="qr-box">QR</div>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <p className="copyright">© Copyright Rimel 2022. All right reserved</p>
    </footer>
  );
};

export default Footer;