import React from "react";
import { Element } from "@craftjs/core";
import { Container } from "@/components/editor/craft-components";

export const ArchitectureServicesPage1 = () => {
  return (
    <Element id="architecture-services-page" is={Container} canvas>
      {/* Page Title Section */}
      <section className="ipad-top-space-margin page-title-big-typography bg-dark-gray cover-background background-position-center-bottom p-0" style={{backgroundImage: "url(https://placehold.co/1920x600)"}}>
        <div className="container">
          <div className="row align-items-end justify-content-center one-half-screen md-small-screen sm-extra-small-screen pb-9">
            <div className="col-lg-6 col-md-8 position-relative page-title-extra-small text-center">
              <h1 className="mb-20px alt-font text-white fw-500 ls-minus-4px">
                <span className="text-base-color">our</span> services
              </h1>
              <h2 className="text-white mb-0 text-uppercase ls-3px fw-600">Great architecture services</h2>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="bg-dark-gray background-position-center-top overlap-height" style={{backgroundImage: "url('images/demo-architecture-dotted-pattern.svg')"}}>
        <div className="container overlap-gap-section">
          <div className="row mb-7 sm-mb-0">
            <div className="col-lg-4 md-mb-50px xs-mb-30px">
              <span className="text-base-color fs-12 fw-600 ls-3px text-uppercase mb-5px d-block">Architecture process</span>
              <h4 className="text-white mb-20px fw-600">The project process.</h4>
              <p>Our buildings combine minimalism and elegance of lines and shapes. We want them to be an integral part of the surrounding landscape.</p>
              <a href="#services" className="btn btn-link btn-hover-animation-switch btn-medium text-white primary-font sm-vertical-align-top section-link ls-1px">
                <span>
                  <span className="btn-text">Explore services</span>
                  <span className="btn-icon"><i className="fa-solid fa-arrow-right fs-14"></i></span>
                  <span className="btn-icon"><i className="fa-solid fa-arrow-right fs-14"></i></span>
                </span>
              </a>
            </div>
            <div className="col-lg-7 offset-lg-1">
              <div className="row row-cols-auto row-cols-sm-2">
                {/* Process Step 1 */}
                <div className="col mb-30px">
                  <div className="feature-box text-start ps-30px pe-30px">
                    <div className="feature-box-icon position-absolute left-0px top-0px">
                      <h1 className="fs-110 text-outline text-outline-color-white opacity-1 fw-800">01</h1>
                    </div>
                    <div className="feature-box-content last-paragraph-no-margin pt-30 md-pt-24 sm-pt-30 xs-pt-55px">
                      <span className="text-white d-inline-block fs-19 fw-500 mb-5px position-relative">Design planing</span>
                      <p>Our buildings combine design elegance of lines and shapes.</p>
                    </div>
                  </div>
                </div>
                
                {/* Process Step 2 */}
                <div className="col mb-30px">
                  <div className="feature-box text-start ps-30px pe-30px">
                    <div className="feature-box-icon position-absolute left-0px top-0px">
                      <h1 className="fs-110 text-outline text-outline-color-white opacity-1 fw-800">02</h1>
                    </div>
                    <div className="feature-box-content last-paragraph-no-margin pt-30 md-pt-24 sm-pt-30 xs-pt-55px">
                      <span className="text-white d-inline-block fs-19 fw-500 mb-5px position-relative">Design concept</span>
                      <p>Our buildings combine design elegance of lines and shapes.</p>
                    </div>
                  </div>
                </div>
                
                {/* Process Step 3 */}
                <div className="col xs-mb-30px">
                  <div className="feature-box text-start ps-30px pe-30px">
                    <div className="feature-box-icon position-absolute left-0px top-0px">
                      <h1 className="fs-110 text-outline text-outline-color-white opacity-1 fw-800">03</h1>
                    </div>
                    <div className="feature-box-content last-paragraph-no-margin pt-30 md-pt-24 sm-pt-30 xs-pt-55px">
                      <span className="text-white d-inline-block fs-19 fw-500 mb-5px position-relative">Design development</span>
                      <p>Our buildings combine design elegance of lines and shapes.</p>
                    </div>
                  </div>
                </div>
                
                {/* Process Step 4 */}
                <div className="col">
                  <div className="feature-box text-start ps-30px pe-30px">
                    <div className="feature-box-icon position-absolute left-0px top-0px">
                      <h1 className="fs-110 text-outline text-outline-color-white opacity-1 fw-800">04</h1>
                    </div>
                    <div className="feature-box-content last-paragraph-no-margin pt-30 md-pt-24 sm-pt-30 xs-pt-55px">
                      <span className="text-white d-inline-block fs-19 fw-500 mb-5px position-relative">Finished project</span>
                      <p>Our buildings combine design elegance of lines and shapes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Section */}
      <section className="bg-nero-grey background-position-center-top pb-0" style={{backgroundImage: "url('images/demo-architecture-dotted-pattern.svg')"}}>
        <div className="container">
          <div className="row overlap-section">
            <div className="col-12">
              <div className="position-absolute top-0px left-0px w-100 h-100">
                <a href="https://www.youtube.com/watch?v=cfXHhfNy7tU" className="absolute-middle-center text-center bg-base-color rounded-circle video-icon-box video-icon-extra-large popup-youtube">
                  <span>
                    <span className="video-icon text-dark-gray fw-800 text-uppercase ls-1px">Play</span>
                  </span>
                </a>
              </div>
              <div data-atropos data-0-top="filter: grayscale(1);" data-15-bottom="filter: grayscale(0);">
                <div className="atropos-scale">
                  <div className="atropos-rotate">
                    <div className="atropos-inner overflow-visible">
                      <div className="border-radius-6px h-650px md-h-450px sm-h-350px d-flex align-items-end justify-content-center overflow-hidden cover-background" style={{backgroundImage: "url('https://placehold.co/1190x700')"}} data-atropos-offset="-5">
                        <div className="opacity-very-light bg-dark-gray"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Services Section */}
          <div className="row align-items-end pt-9 mb-6" id="services">
            <div className="col-md-6 sm-mb-20px">
              <span className="text-base-color fs-12 fw-600 ls-3px text-uppercase mb-5px d-block">Architecture services</span>
              <h4 className="text-white fw-600 mb-0">Create functional and stylish modern buildings for you.</h4>
            </div>
            <div className="col-md-5 offset-md-1 last-paragraph-no-margin">
              <p className="w-80 xl-w-85 lg-w-100">Our buildings combine minimalism and elegance of lines and shapes. We want them to be an integral part of the surrounding landscape.</p>
            </div>
          </div>
          
          {/* Services Carousel */}
          <div className="row align-items-center">
            <div className="col-md-12 position-relative">
              <div className="outside-box-right-30 sm-outside-box-right-0">
                <div className="swiper slider-three-slide magic-cursor base-color" data-slider-options='{"slidesPerView": 1, "spaceBetween": 35, "loop": true, "autoplay": {"delay": 4000, "disableOnInteraction": false}, "pagination": {"el": ".slider-four-slide-pagination-1", "clickable": true, "dynamicBullets": false}, "keyboard": {"enabled": true, "onlyInViewport": true}, "breakpoints": {"1200": {"slidesPerView": 4}, "992": {"slidesPerView": 3}, "768": {"slidesPerView": 3}, "320": {"slidesPerView": 1}}, "effect": "slide"}'>
                  <div className="swiper-wrapper">
                    {/* Service 1 */}
                    <div className="swiper-slide">
                      <div className="interactive-banner-style-06">
                        <div className="interactive-banners-image">
                          <img src="https://placehold.co/410x505" alt="" />
                          <div className="overlay-bg bg-gradient-dark-transparent opacity-light"></div>
                          <a href="#" className="banners-icon text-white icon-hover-base-color position-absolute top-60px left-60px md-top-30px md-left-30px">
                            <i className="line-icon-Structure icon-large"></i>
                          </a>
                        </div>
                        <div className="interactive-banners-content p-60px md-p-30px">
                          <div className="h-100 w-100 last-paragraph-no-margin">
                            <a href="#" className="fs-22 d-block text-white mb-10px fw-500">Architecture</a>
                            <p className="interactive-banners-content-text w-95 lg-w-100">Lorem ipsum consectetur elit do eiusmod tempor incididunt.</p>
                          </div>
                        </div>
                        <div className="box-overlay bg-gradient-dark-transparent"></div>
                      </div>
                    </div>
                    
                    {/* Service 2 */}
                    <div className="swiper-slide">
                      <div className="interactive-banner-style-06">
                        <div className="interactive-banners-image">
                          <img src="https://placehold.co/410x505" alt="" />
                          <div className="overlay-bg bg-gradient-dark-transparent opacity-light"></div>
                          <a href="#" className="banners-icon text-white icon-hover-base-color position-absolute top-60px left-60px md-top-30px md-left-30px">
                            <i className="line-icon-Cursor-Select icon-large"></i>
                          </a>
                        </div>
                        <div className="interactive-banners-content p-60px md-p-30px">
                          <div className="h-100 w-100 last-paragraph-no-margin">
                            <a href="#" className="fs-22 d-block text-white mb-10px fw-500">Residential space</a>
                            <p className="interactive-banners-content-text w-95 lg-w-100">Lorem ipsum consectetur elit do eiusmod tempor incididunt.</p>
                          </div>
                        </div>
                        <div className="box-overlay bg-gradient-dark-transparent"></div>
                      </div>
                    </div>
                    
                    {/* Service 3 */}
                    <div className="swiper-slide">
                      <div className="interactive-banner-style-06">
                        <div className="interactive-banners-image">
                          <img src="https://placehold.co/410x505" alt="" />
                          <div className="overlay-bg bg-gradient-dark-transparent opacity-light"></div>
                          <a href="#" className="banners-icon icon-hover-base-color text-white position-absolute top-60px left-60px md-top-30px md-left-30px">
                            <i className="line-icon-Full-View icon-large"></i>
                          </a>
                        </div>
                        <div className="interactive-banners-content p-60px md-p-30px">
                          <div className="h-100 w-100 last-paragraph-no-margin">
                            <a href="#" className="fs-22 d-block text-white mb-10px fw-500">Interior design</a>
                            <p className="interactive-banners-content-text w-95 lg-w-100">Lorem ipsum consectetur elit do eiusmod tempor incididunt.</p>
                          </div>
                        </div>
                        <div className="box-overlay bg-gradient-dark-transparent"></div>
                      </div>
                    </div>
                    
                    {/* Service 4 */}
                    <div className="swiper-slide">
                      <div className="interactive-banner-style-06">
                        <div className="interactive-banners-image">
                          <img src="https://placehold.co/410x505" alt="" />
                          <div className="overlay-bg bg-gradient-dark-transparent opacity-light"></div>
                          <a href="#" className="banners-icon icon-hover-base-color text-white position-absolute top-60px left-60px md-top-30px md-left-30px">
                            <i className="line-icon-Duplicate-Layer icon-large"></i>
                          </a>
                        </div>
                        <div className="interactive-banners-content p-60px md-p-30px">
                          <div className="h-100 w-100 last-paragraph-no-margin">
                            <a href="#" className="fs-22 d-block text-white mb-10px fw-500">Exterior planning</a>
                            <p className="interactive-banners-content-text w-95 lg-w-100">Lorem ipsum consectetur elit do eiusmod tempor incididunt.</p>
                          </div>
                        </div>
                        <div className="box-overlay bg-gradient-dark-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

ArchitectureServicesPage1.craft = {
  displayName: "Architecture Services Page",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
