import React from "react";
import { Element } from "@craftjs/core";
import { Container } from "@/components/editor/craft-components";

export const EbookFooter1 = () => {
  return (
    <Element id="ebook-footer" is={Container} canvas>
      <footer className="footer-light half-footer">
        <div className="container">
          <div className="row flex-lg-row flex-column align-items-center">
            {/* Footer Logo */}
            <div className="col-auto text-center text-lg-start md-mb-20px">
              <a href="#" className="footer-logo d-inline-block">
                <img src="images/demo-ebook-logo-black.png" data-at2x="images/demo-ebook-logo-black@2x.png" alt="" />
              </a>
              <div className="bg-white-ice d-inline-block align-middle fw-500 border-radius-30px ps-20px pe-20px fs-12 text-jade lh-30 ms-10px">Best seller!</div>
            </div>
            
            {/* Footer Navigation */}
            <div className="col text-center text-lg-end">
              <ul className="footer-navbar fw-500 lh-normal">
                <li className="nav-item active"><a href="#" className="inner-link nav-link">Home</a></li>
                <li className="nav-item"><a href="#about" className="inner-link nav-link">About</a></li>
                <li className="nav-item"><a href="#chapter" className="inner-link nav-link">Chapter</a></li>
                <li className="nav-item"><a href="#author" className="inner-link nav-link">Author</a></li>
                <li className="nav-item"><a href="#reviews" className="inner-link nav-link">Reviews</a></li>
                <li className="nav-item"><a href="#subscribe" className="inner-link nav-link">Subscribe</a></li>
                <li className="nav-item"><a href="#pricing" className="inner-link nav-link">Pricing</a></li>
                <li className="nav-item"><a href="#contact" className="inner-link nav-link">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="row justify-content-center align-items-center pt-40px md-pt-30px">
            <div className="col-12 mb-40px md-mb-35px">
              <div className="divider-style-03 divider-style-03-01 border-color-transparent-dark-very-light"></div>
            </div>
            
            {/* Footer Copyright */}
            <div className="col-xl-7 col-md-8 fs-13 text-center text-md-start last-paragraph-no-margin lh-24 order-2 order-md-1 sm-mt-15px">
              This site is protected by reCAPTCHA and the Google <a href="#" className="text-decoration-line-bottom">privacy policy</a> and <a href="#" className="text-decoration-line-bottom">terms of service</a> apply. You must not use this website if you disagree with any of these website standard terms and conditions.
            </div>
            
            {/* Footer Social */}
            <div className="col-xl-5 col-md-4 text-center text-md-end elements-social social-icon-style-08 order-1 order-md-2">
              <ul className="medium-icon dark">
                <li><a className="facebook" href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a className="instagram" href="http://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a className="twitter" href="http://www.twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a className="dribbble" href="http://www.dribbble.com" target="_blank"><i className="fa-brands fa-dribbble"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Element>
  );
};

EbookFooter1.craft = {
  displayName: "Ebook Footer",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
