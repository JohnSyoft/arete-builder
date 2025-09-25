import React from "react";
import { Element } from "@craftjs/core";
import { Container } from "@/components/editor/craft-components";

export const ArchitectureFooter1 = () => {
  return (
    <Element id="architecture-footer" is={Container} canvas>
      <footer className="bg-nero-grey pb-0 pt-4 md-pt-6 sm-pt-9 xs-pt-11 background-position-center-top" style={{backgroundImage: "url('images/demo-architecture-dotted-pattern.svg')"}}>
        <div className="container">
          <div className="row align-items-center mb-3 md-mb-5 xs-mb-8">
            <div className="col-sm-10 text-center text-sm-start order-2 order-sm-1">
              <h6 className="fw-400 d-inline-block align-middle mb-0">Let's build something <span className="text-white">great together</span></h6>
              <div className="separator-line-1px d-none d-sm-inline-block align-middle ms-20px me-20px lg-ms-10px lg-me-10px mt-5px w-70px lg-w-50px bg-base-color"></div>
              <a href="mailto:hello@crafto.com" className="text-base-color fs-26 fw-500 d-inline-block align-middle">hello@crafto.com</a>
            </div>
            <div className="col-sm-2 text-center text-sm-end order-1 order-sm-2 xs-mb-15px">
              <a href="#" className="footer-logo d-inline-block">
                <img src="images/demo-architecture-footer-logo.png" alt="" />
              </a>
            </div>
          </div>
          
          <div className="row align-items-end mb-6 xs-mb-9">
            {/* Footer Column 1 */}
            <div className="col-lg-3 col-sm-6 last-paragraph-no-margin text-center text-sm-start md-mb-30px">
              <span className="text-white d-block fs-12 fw-600 ls-2px text-uppercase">Crafto - London</span>
              <p className="w-80 lg-w-95 md-w-70 sm-w-85 xs-mx-auto text-medium-gray fs-15 lh-28">401 Broadway, 24th floor, Orchard view, London, UK</p>
            </div>
            
            {/* Footer Column 2 */}
            <div className="col-lg-3 col-sm-6 last-paragraph-no-margin text-center text-sm-start md-mb-30px">
              <span className="text-white d-block fs-12 fw-600 ls-2px text-uppercase">Crafto - France</span>
              <p className="w-80 lg-w-95 md-w-70 sm-w-85 xs-mx-auto text-medium-gray fs-15 lh-28">27 Eden walk eden centre, Orchard view, Paris, France</p>
            </div>
            
            {/* Footer Column 3 */}
            <div className="col-lg-3 col-sm-6 last-paragraph-no-margin text-center text-sm-start xs-mb-30px">
              <span className="text-white d-block fs-12 fw-600 ls-2px text-uppercase">Crafto - Switzerland</span>
              <p className="w-80 lg-w-95 md-w-70 sm-w-85 xs-mx-auto text-medium-gray fs-15 lh-28">701 Sondanella, 24th floor, Gunsberg, Switzerland</p>
            </div>
            
            {/* Footer Column 4 */}
            <div className="col-lg-3 col-sm-6 last-paragraph-no-margin ms-auto text-center text-sm-start text-lg-end fs-19">
              <a href="tel:1235678901" className="text-white">+ 123 567 8901</a><br />
              <a href="mailto:info@domain.com" className="text-white fw-500 text-decoration-line-bottom">info@domain.com</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom p-20px border-top border-color-transparent-white-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 text-center text-lg-start md-mb-10px">
                <ul className="footer-navbar fs-15 lh-normal">
                  <li className="nav-item active"><a href="#" className="nav-link">Home</a></li>
                  <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                  <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
                  <li className="nav-item"><a href="#" className="nav-link">Projects</a></li>
                  <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
                </ul>
              </div>
              <div className="col-lg-5 text-center text-lg-end">
                <span className="fs-15">&copy; 2025 Crafto is Proudly Powered by <a href="https://www.themezaa.com/" target="_blank" className="text-decoration-line-bottom text-white">ThemeZaa</a></span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Element>
  );
};

ArchitectureFooter1.craft = {
  displayName: "Architecture Footer",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
