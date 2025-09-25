import React from "react";
import { Element } from "@craftjs/core";
import { Container } from "@/components/editor/craft-components";

export const ArchitectureProjects1 = () => {
  return (
    <Element id="architecture-projects" is={Container} canvas>
      <section className="bg-dark-gray background-position-center-top pb-0" style={{backgroundImage: "url('images/demo-architecture-dotted-pattern.svg')"}}>
        <div className="container">
          <div className="row mb-8 xs-mb-10 overlap-section">
            <div className="col-12 position-relative">
              <div className="vertical-title-center align-items-center position-absolute top-0px left-15px bg-base-color p-10px xs-p-5px h-270px sm-h-190px z-index-9 w-50px xs-w-40px">
                <div className="title fs-14 ls-2px text-dark-gray fw-700 text-uppercase">Recent projects</div>
              </div>
              <div className="swiper position-relative text-slider-style-04 magic-cursor drag-cursor" data-slider-options='{"autoHeight": true, "loop": true, "allowTouchMove": true, "autoplay": {"delay": 4000, "disableOnInteraction": false}, "navigation": {"nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1"}, "effect": "fade"}'>
                <div className="swiper-wrapper">
                  {/* Project 1 */}
                  <div className="swiper-slide">
                    <img src="https://placehold.co/1190x700" alt="" />
                    <div className="container position-absolute sm-position-relative bottom-0 right-0px z-index-1 swiper-slide-content">
                      <div className="row justify-content-end align-items-end h-100">
                        <div className="col-lg-5 col-md-7 p-0">
                          <div className="bg-white p-16 lg-p-12">
                            <span className="text-dark-gray fs-15 text-uppercase ls-1px fw-700">Architecture</span>
                            <h2 className="alt-font text-dark-gray fw-600 mb-20px ls-minus-2px">Leana cagnotto</h2>
                            <p className="w-90 mb-10px">Lorem ipsum is simply dummy text printing and lorem ipsum been.</p>
                            <a href="#" className="btn btn-link btn-hover-animation-switch btn-large text-dark-gray fw-800">
                              <span>
                                <span className="btn-text">Explore project</span>
                                <span className="btn-icon"><i className="fa-solid fa-arrow-right fs-14"></i></span>
                                <span className="btn-icon"><i className="fa-solid fa-arrow-right fs-14"></i></span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project 2 */}
                  <div className="swiper-slide">
                    <img src="https://placehold.co/1190x700" alt="" />
                    <div className="container position-absolute sm-position-relative bottom-0 right-0px z-index-1 swiper-slide-content">
                      <div className="row justify-content-end align-items-end h-100">
                        <div className="col-lg-5 col-md-7 p-0">
                          <div className="bg-white p-16 lg-p-12">
                            <span className="text-dark-gray fs-15 text-uppercase ls-1px fw-700">Landscape</span>
                            <h2 className="alt-font text-dark-gray fw-600 mb-20px ls-minus-2px">Morroco house</h2>
                            <p className="w-90 mb-10px">Lorem dummy text ipsum is simply printing and lorem ipsum been.</p>
                            <a href="#" className="btn btn-link btn-hover-animation-switch btn-large text-dark-gray fw-800">
                              <span>
                                <span className="btn-text">Explore project</span>
                                <span className="btn-icon"><i className="fa-solid fa-arrow-right fs-14"></i></span>
                                <span className="btn-icon"><i className="fa-solid fa-arrow-right fs-14"></i></span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project 3 */}
                  <div className="swiper-slide">
                    <img src="https://placehold.co/1190x700" alt="" />
                    <div className="container position-absolute sm-position-relative bottom-0 right-0px z-index-1 swiper-slide-content">
                      <div className="row justify-content-end align-items-end h-100">
                        <div className="col-lg-5 col-md-7 p-0">
                          <div className="bg-white p-16 lg-p-12">
                            <span className="text-dark-gray fs-15 text-uppercase ls-1px fw-700">Interior</span>
                            <h2 className="alt-font text-dark-gray fw-600 mb-20px ls-minus-2px">Melana house</h2>
                            <p className="w-90 mb-10px">Lorem ipsum is simply dummy text printing and lorem ipsum been.</p>
                            <a href="#" className="btn btn-link btn-hover-animation-switch btn-large text-dark-gray fw-800">
                              <span>
                                <span className="btn-text">Explore project</span>
                                <span className="btn-icon"><i className="fa-solid fa-arrow-right fs-14"></i></span>
                                <span className="btn-icon"><i className="fa-solid fa-arrow-right fs-14"></i></span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slider Navigation */}
                <div className="slider-one-slide-prev-1 icon-small swiper-button-prev slider-navigation-style-07 bg-dark-gray text-white box-shadow-small">
                  <i className="bi bi-arrow-down-left"></i>
                </div>
                <div className="slider-one-slide-next-1 icon-small swiper-button-next slider-navigation-style-07 bg-dark-gray text-white box-shadow-small">
                  <i className="bi bi-arrow-up-right"></i>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="row row-cols-2 row-cols-md-4 counter-style-04">
            <div className="col last-paragraph-no-margin sm-mb-30px text-center">
              <h1 className="vertical-counter d-inline-flex alt-font text-white fw-300 mb-0" data-text="+" data-to="255">255+</h1>
              <span className="fs-13 text-base-color fw-600 d-block ls-2px text-uppercase">Projects</span>
            </div>
            <div className="col last-paragraph-no-margin sm-mb-30px text-center">
              <h1 className="vertical-counter d-inline-flex alt-font text-white fw-300 mb-0" data-text="+" data-to="189">189+</h1>
              <span className="fs-13 text-base-color fw-600 d-block ls-2px text-uppercase">Clients</span>
            </div>
            <div className="col last-paragraph-no-margin text-center">
              <h1 className="vertical-counter d-inline-flex alt-font text-white fw-300 mb-0" data-text="+" data-to="738">738+</h1>
              <span className="fs-13 text-base-color fw-600 d-block ls-2px text-uppercase">Capture</span>
            </div>
            <div className="col last-paragraph-no-margin text-center">
              <h1 className="vertical-counter d-inline-flex alt-font text-white fw-300 mb-0" data-text="+" data-to="626">626+</h1>
              <span className="fs-13 text-base-color fw-600 d-block ls-2px text-uppercase">Coffee</span>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

ArchitectureProjects1.craft = {
  displayName: "Architecture Projects",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
