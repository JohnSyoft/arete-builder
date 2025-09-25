import React from "react";
import { Element } from "@craftjs/core";
import { Container } from "@/components/editor/craft-components";

export const ArchitectureProjectsPage1 = () => {
  return (
    <Element id="architecture-projects-page" is={Container} canvas>
      {/* Page Title Section */}
      <section className="ipad-top-space-margin page-title-big-typography bg-dark-gray cover-background background-position-center-bottom p-0" style={{backgroundImage: "url(https://placehold.co/1920x600)"}}>
        <div className="container">
          <div className="row align-items-end justify-content-center one-half-screen md-small-screen sm-extra-small-screen pb-9">
            <div className="col-lg-6 col-md-8 position-relative page-title-extra-small text-center">
              <h1 className="mb-20px alt-font text-white fw-500 ls-minus-4px">
                <span className="text-base-color">recent</span> projects
              </h1>
              <h2 className="text-white mb-0 text-uppercase ls-3px fw-600">Explore the recent projects</h2>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Grid Section */}
      <section className="bg-dark-gray background-position-center-top position-relative" style={{backgroundImage: "url('images/demo-architecture-dotted-pattern.svg')"}}>
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 filter-content">
              <ul className="portfolio-simple portfolio-wrapper grid-loading grid grid-3col xxl-grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-1col xs-grid-1col gutter-extra-large text-center">
                <li className="grid-sizer"></li>
                
                {/* Project 1 */}
                <li className="grid-item selected transition-inner-all">
                  <div className="portfolio-box">
                    <div className="portfolio-image bg-dark-gray">
                      <a href="#">
                        <img src="https://placehold.co/800x1005" alt="" />
                      </a>
                    </div>
                    <div className="portfolio-caption pt-35px pb-35px sm-pt-25px sm-pb-25px">
                      <a href="#" className="text-white">Art Gallery</a>
                      <span className="d-inline-block align-middle w-30px position-relative top-minus-2px separator-line-1px bg-charcoal-grey ms-15px me-15px"></span>
                      <div className="d-inline-block">Interior</div>
                    </div>
                  </div>
                </li>
                
                {/* Project 2 */}
                <li className="grid-item web transition-inner-all">
                  <div className="portfolio-box">
                    <div className="portfolio-image bg-medium-gray">
                      <a href="#">
                        <img src="https://placehold.co/800x1005" alt="" />
                      </a>
                    </div>
                    <div className="portfolio-caption pt-35px pb-35px sm-pt-25px sm-pb-25px">
                      <a href="#" className="text-white">Home ourdoor</a>
                      <span className="d-inline-block align-middle w-30px position-relative top-minus-2px separator-line-1px bg-charcoal-grey ms-15px me-15px"></span>
                      <div className="d-inline-block">Landscape</div>
                    </div>
                  </div>
                </li>
                
                {/* Project 3 */}
                <li className="grid-item web transition-inner-all">
                  <div className="portfolio-box">
                    <div className="portfolio-image bg-medium-gray">
                      <a href="#">
                        <img src="https://placehold.co/800x1005" alt="" />
                      </a>
                    </div>
                    <div className="portfolio-caption pt-35px pb-35px sm-pt-25px sm-pb-25px">
                      <a href="#" className="text-white">Corporate</a>
                      <span className="d-inline-block align-middle w-30px position-relative top-minus-2px separator-line-1px bg-charcoal-grey ms-15px me-15px"></span>
                      <div className="d-inline-block">Architecture</div>
                    </div>
                  </div>
                </li>
                
                {/* Project 4 */}
                <li className="grid-item digital transition-inner-all">
                  <div className="portfolio-box">
                    <div className="portfolio-image bg-medium-gray">
                      <a href="#">
                        <img src="https://placehold.co/800x1005" alt="" />
                      </a>
                    </div>
                    <div className="portfolio-caption pt-35px pb-35px sm-pt-25px sm-pb-25px">
                      <a href="#" className="text-white">Modern house</a>
                      <span className="d-inline-block align-middle w-30px position-relative top-minus-2px separator-line-1px bg-charcoal-grey ms-15px me-15px"></span>
                      <div className="d-inline-block">Structural</div>
                    </div>
                  </div>
                </li>
                
                {/* Project 5 */}
                <li className="grid-item web branding transition-inner-all">
                  <div className="portfolio-box">
                    <div className="portfolio-image bg-medium-gray">
                      <a href="#">
                        <img src="https://placehold.co/800x1005" alt="" />
                      </a>
                    </div>
                    <div className="portfolio-caption pt-35px pb-35px sm-pt-25px sm-pb-25px">
                      <a href="#" className="text-white">Big box</a>
                      <span className="d-inline-block align-middle w-30px position-relative top-minus-2px separator-line-1px bg-charcoal-grey ms-15px me-15px"></span>
                      <div className="d-inline-block">Architecture</div>
                    </div>
                  </div>
                </li>
                
                {/* Project 6 */}
                <li className="grid-item web digital transition-inner-all">
                  <div className="portfolio-box">
                    <div className="portfolio-image bg-medium-gray">
                      <a href="#">
                        <img src="https://placehold.co/800x1005" alt="" />
                      </a>
                    </div>
                    <div className="portfolio-caption pt-35px pb-35px sm-pt-25px sm-pb-25px">
                      <a href="#" className="text-white">Bungalow</a>
                      <span className="d-inline-block align-middle w-30px position-relative top-minus-2px separator-line-1px bg-charcoal-grey ms-15px me-15px"></span>
                      <div className="d-inline-block">Structural</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-minus-50px lg-bottom-minus-40px md-bottom-minus-25px sm-bottom-minus-20px xs-bottom-minus-10px left-0px right-0px text-center w-100 fs-200 lg-fs-160 md-fs-140 sm-fs-120 xs-fs-90 fw-600 text-nero-grey ls-minus-4px">architecture</div>
      </section>
    </Element>
  );
};

ArchitectureProjectsPage1.craft = {
  displayName: "Architecture Projects Page",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
