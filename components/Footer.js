// components/Footer.js
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="subscribe-col">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettä muse.</p>
          <div className="subscribe-row">
            <input type="email" placeholder="Enter your e-mail..." aria-label="email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="contact-col">
          <h4>CONTACT US</h4>
          <p className="contact-line">+44 221 133 5360</p>
          <p className="contact-line">customercare@mettamuse.com</p>
          <h4>CURRENCY</h4>
          <p>🇺🇸 · USD</p>
        </div>
      </div>

      <div className="links-row">
        <div>
          <h5>mettä muse</h5>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h5>QUICK LINKS</h5>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h5>FOLLOW US</h5>
          <div className="social-icons">
            <img src="/assets/icon-instagram.svg" alt="instagram" />
            <img src="/assets/icon-linkedin.svg" alt="linkedin" />
          </div>

          <h5>mettä muse ACCEPTS</h5>
          <div className="pay-icons">
            <img src="/assets/pay-gpay.svg" alt="GPay" />
            <img src="/assets/pay-visa.svg" alt="Visa" />
            <img src="/assets/pay-paypal.svg" alt="Paypal" />
            <img src="/assets/pay-amex.svg" alt="Amex" />
            <img src="/assets/pay-apple.svg" alt="Apple Pay" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>Copyright © {new Date().getFullYear()} mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}
