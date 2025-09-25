import React from "react";
import { Element } from "@craftjs/core";
import { Container } from "@/components/editor/craft-components";

export const ArchitectureAboutPage1 = () => {
  return (
    <Element id="architecture-about-page" is={Container} canvas>
      {/* Page Title Section */}
      <section className="ipad-top-space-margin page-title-big-typography bg-dark-gray cover-background background-position-center-bottom p-0" style={{backgroundImage: "url(https://placehold.co/1920x600)"}}>
        <div className="container">
          <div className="row align-items-end justify-content-center one-half-screen md-small-screen sm-extra-small-screen pb-9">
            <div className="col-lg-6 col-md-8 position-relative page-title-extra-small text-center">
              <h1 className="mb-20px alt-font text-white fw-500 ls-minus-4px">
                <span className="text-base-color">about</span> studio
              </h1>
              <h2 className="text-white mb-0 text-uppercase ls-3px fw-600">Let's see who we are</h2>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main About Content */}
      <section className="bg-dark-gray background-position-center-top big-section overlap-height" style={{backgroundImage: "url('images/demo-architecture-dotted-pattern.svg')"}}>
        <div className="container overlap-gap-section">
          <div className="row mb-11">
            <div className="col-lg-7 position-relative">
              <div className="row align-items-center position-relative">
                <div className="col-md-5 text-end sm-mb-30px">
                  <img className="sm-w-100" src="https://placehold.co/410x505" alt="" />
                </div>
                <div className="col-lg-6 col-md-7 sm-mb-30px">
                  <img src="https://placehold.co/410x505" alt="" className="box-shadow-quadruple-large sm-w-100" />
                </div>
                <div className="w-40 sm-w-100 overflow-hidden position-absolute sm-position-relative left-150px bottom-minus-50px sm-bottom-0px sm-left-0px">
                  <img src="https://placehold.co/410x505" alt="" className="box-shadow-quadruple-large sm-w-100" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 md-mt-13 sm-mt-10">
              <span className="text-base-color fs-12 fw-600 ls-3px text-uppercase mb-10px d-block">About Architecture</span>
              <h4 className="text-white fw-600">Create functional and stylish modern buildings.</h4>
              <p className="w-90 md-w-100">
                Popularly known as crafto, began as a very modest interior design company. Gradually with time and every project accomplished, evolved from an interior design firm to a civil & architectural planning studio and attained the position as one of the respectable.
              </p>
              <a href="#" className="btn btn-link btn-hover-animation-switch btn-medium text-white primary-font sm-vertical-align-top ls-1px">
                <span>
                  <span className="btn-text">Explore services</span>
                  <span className="btn-icon"><i className="fa-solid fa-arrow-right fs-14"></i></span>
                  <span className="btn-icon"><i className="fa-solid fa-arrow-right fs-14"></i></span>
                </span>
              </a>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="row row-cols-1 row-cols-lg-3 justify-content-center">
            <div className="col icon-with-text-style-01 pe-5 md-mb-30px">
              <div className="separator-line-1px bg-charcoal-grey w-100 mb-25px d-none d-lg-block"></div>
              <div className="feature-box feature-box-left-icon last-paragraph-no-margin">
                <div className="feature-box-content">
                  <span className="text-medium-gray fs-18 lh-30 w-80 sm-w-90 d-block">
                    <span className="text-white fw-600">350+</span> very satisfied clients around the worldwide.
                  </span>
                </div>
                <div className="feature-box-icon me-0">
                  <span className="fs-18 mb-0 fw-500 text-base-color">01</span>
                </div>
              </div>
            </div>
            
            <div className="col icon-with-text-style-01 pe-5 md-mb-30px">
              <div className="separator-line-1px bg-charcoal-grey w-100 mb-25px"></div>
              <div className="feature-box feature-box-left-icon last-paragraph-no-margin">
                <div className="feature-box-content">
                  <span className="text-medium-gray fs-18 lh-30 w-80 sm-w-90 d-block">
                    <span className="text-white fw-600">200+</span> good award winning architecture agency.
                  </span>
                </div>
                <div className="feature-box-icon me-0">
                  <span className="fs-18 mb-0 fw-500 text-base-color">02</span>
                </div>
              </div>
            </div>
            
            <div className="col icon-with-text-style-01 pe-5">
              <div className="separator-line-1px bg-charcoal-grey w-100 mb-25px"></div>
              <div className="feature-box feature-box-left-icon last-paragraph-no-margin">
                <div className="feature-box-content">
                  <span className="text-medium-gray fs-18 lh-30 w-80 sm-w-90 d-block">
                    <span className="text-white fw-600">500+</span> building has been constructed with us.
                  </span>
                </div>
                <div className="feature-box-icon me-0">
                  <span className="fs-18 mb-0 fw-500 text-base-color">03</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="bg-nero-grey">
        <div className="container">
          <div className="row align-items-center overlap-section mb-9">
            <div className="col-12 position-relative">
              <div className="outside-box-right-30">
                <div className="swiper magic-cursor drag-cursor" data-slider-options='{"slidesPerView": 1, "spaceBetween": 30, "loop": true, "autoplay": {"delay": 2000, "disableOnInteraction": false}, "pagination": {"el": ".slider-four-slide-pagination-1", "clickable": true, "dynamicBullets": false}, "keyboard": {"enabled": true, "onlyInViewport": true}, "breakpoints": {"992": {"slidesPerView": 4}, "768": {"slidesPerView": 3}, "320": {"slidesPerView": 2}}, "effect": "slide"}'>
                  <div className="swiper-wrapper align-items-center">
                    <div className="swiper-slide">
                      <img className="w-100" src="https://placehold.co/420x500" alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img className="w-100" src="https://placehold.co/420x500" alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img className="w-100" src="https://placehold.co/420x500" alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img className="w-100" src="https://placehold.co/420x500" alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img className="w-100" src="https://placehold.co/420x500" alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img className="w-100" src="https://placehold.co/420x500" alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img className="w-100" src="https://placehold.co/420x500" alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img className="w-100" src="https://placehold.co/420x500" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Awards Section */}
          <div className="row">
            <div className="col-lg-4">
              <div className="position-relative">
                <span className="text-base-color fs-12 fw-600 ls-3px text-uppercase mb-5px d-block">International awards</span>
                <h4 className="text-white mb-20px fw-600">These awards reflect the hard work.</h4>
                <p>Our buildings combine minimalism & elegance of lines and shapes. We want them to be an integral part of the surrounding landscape.</p>
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1 last-paragraph-no-margin">
              <div className="row align-items-center pt-25px pb-25px border-bottom border-color-charcoal-grey g-0 position-relative">
                <div className="col-md-2">
                  <span className="fw-600 text-base-color">2005</span>
                </div>
                <div className="col-md-6">
                  <span className="text-white fw-500 fs-17">Architecture project of the year</span>
                </div>
                <div className="col-md-3">
                  <span className="fw-500">Architecture</span>
                </div>
                <div className="col-auto col-md-1 sm-position-absolute right-0px">
                  <a href="#"><i className="bi bi-arrow-right text-white"></i></a>
                </div>
              </div>
              <div className="row align-items-center pt-25px pb-25px border-bottom border-color-charcoal-grey g-0 position-relative">
                <div className="col-md-2">
                  <span className="fw-600 text-base-color">2010</span>
                </div>
                <div className="col-md-6">
                  <span className="text-white fw-500 fs-17">Best Interior of the day</span>
                </div>
                <div className="col-md-3">
                  <span className="fw-500">Interior</span>
                </div>
                <div className="col-auto col-md-1 sm-position-absolute right-0px">
                  <a href="#"><i className="bi bi-arrow-right text-white"></i></a>
                </div>
              </div>
              <div className="row align-items-center pt-25px pb-25px border-bottom border-color-charcoal-grey g-0 position-relative">
                <div className="col-md-2">
                  <span className="fw-600 text-base-color">2018</span>
                </div>
                <div className="col-md-6">
                  <span className="text-white fw-500 fs-17">Best project of the year</span>
                </div>
                <div className="col-md-3">
                  <span className="fw-500">Landscape</span>
                </div>
                <div className="col-auto col-md-1 sm-position-absolute right-0px">
                  <a href="#"><i className="bi bi-arrow-right text-white"></i></a>
                </div>
              </div>
              <div className="row align-items-center pt-25px pb-25px g-0 position-relative">
                <div className="col-md-2">
                  <span className="fw-600 text-base-color">2021</span>
                </div>
                <div className="col-md-6">
                  <span className="text-white fw-500 fs-17">Best project of the month</span>
                </div>
                <div className="col-md-3">
                  <span className="fw-500">Architecture</span>
                </div>
                <div className="col-auto col-md-1 sm-position-absolute right-0px">
                  <a href="#"><i className="bi bi-arrow-right text-white"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

ArchitectureAboutPage1.craft = {
  displayName: "Architecture About Page",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
