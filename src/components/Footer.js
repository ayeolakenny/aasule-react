import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="w3l-footers-14 py-5">
    <div className="container py-md-5 py-sm-3">
      <div className="row w3l-footer-top-form no-gutters">
        <div className="col-lg-7 grid-two-column">
          <div className="footer-image">
            <img
              src="/assets/images/banner1.jpg"
              className="img-fluid radius-image"
              alt="banner-img"
            />
          </div>
          <div className="text-grid grid-column">
            <h4>Subscribe to receive updates on current governor AASULE</h4>
            <p>
              Want to be a supporter &amp; notified on updates on AASULE. Just
              sign up and we'll send you a notification by email.
            </p>
          </div>
        </div>
        <div className="col-lg-5 form-submitinfo pl-lg-5">
          <form action="#" method="GET">
            <input
              type="email"
              name=" placeholder"
              placeholder="Enter Your Email"
              required
            />
            <button
              type="submit"
              className="btn btn-primary btn-style submitbtn mt-3"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
      <div className="row footers14-top no-gutters">
        <div className="col-lg-6 footer14-nav-left">
          <ul className="footer14-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footers14-bottom d-flex">
        <div className="copyright">
          <p>
            © 2022 AASULE. All Rights Reserved{" "}
            <a href="https://www.aasule.com">aasule.com</a>
          </p>
        </div>
      </div>
    </div>
    <button onclick="topFunction()" id="movetop" title="Go to top">
      ↑
    </button>
  </footer>
);
