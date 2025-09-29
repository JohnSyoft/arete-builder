import React from "react";
import { Element } from "@craftjs/core";
import { Container, Section, Box, Text, Icon } from "@/components/editor/craft-components";

export const ArchitectureTestimonials1 = () => {
  return (
    <Element id="architecture-testimonials" is={Container} canvas>
      <Element is={Section} className="bg-dark-gray background-position-center-top position-relative pt-0" style={{backgroundImage: "url('images/demo-architecture-dotted-pattern.svg')"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10 testimonials-style-10 position-relative ps-4 pe-4 swiper-number-pagination-progress">
              <div className="swiper magic-cursor pt-9 pb-6" data-slider-options='{"slidesPerView": 1, "loop": true, "keyboard": {"enabled": true, "onlyInViewport": true}, "autoplay": {"delay": 4000, "disableOnInteraction": false}, "pagination": {"el": ".swiper-number-line-pagination", "clickable": true}, "navigation": {"nextEl": ".swiper-button-next-nav", "prevEl": ".swiper-button-previous-nav", "effect": "fade"}}' data-swiper-number-pagination-progress="true">
                <div className="swiper-wrapper">
                  {/* Testimonial 1 */}
                  <div className="swiper-slide">
                    <div className="d-flex flex-column">
                      <div className="align-self-center text-center w-90 last-paragraph-no-margin">
                        <Element is={Text} tag="h5" className="fw-100 lh-48 alt-font mb-0">
                          Crafto began as a collaborative architectural and landscape workshop, and has remained true to its trans disciplinary way of thinking since its inception <span className="text-base-color">- Herman miller</span>
                        </Element>
                      </div>
                    </div>
                  </div>
                  
                  {/* Testimonial 2 */}
                  <div className="swiper-slide">
                    <div className="d-flex flex-column">
                      <div className="align-self-center text-center w-90 last-paragraph-no-margin">
                        <Element is={Text} tag="h5" className="fw-100 lh-48 alt-font mb-0">
                          Absolutely amazing theme, flexible and awesome design with possibilities. It's so very easy to use and to customize. Simply the great designs and best theme <span className="text-base-color">- Jonsan donner</span>
                        </Element>
                      </div>
                    </div>
                  </div>
                  
                  {/* Testimonial 3 */}
                  <div className="swiper-slide">
                    <div className="d-flex flex-column">
                      <div className="align-self-center text-center w-90 last-paragraph-no-margin">
                        <Element is={Text} tag="h5" className="fw-100 lh-48 alt-font mb-0">
                          There are design companies and then there are user experience, design, consulting, interface design. Simply the great designs and best theme for fast loading <span className="text-base-color">- Mackangy rose</span>
                        </Element>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Slider Pagination */}
              <div className="swiper-pagination-wrapper d-flex align-items-center justify-content-center">
                <Element is={Text} tag="div" className="number-prev fs-15 fw-600"></Element>
                <div className="swiper-pagination-progress bg-medium-gray">
                  <span className="swiper-progress"></span>
                </div>
                <Element is={Text} tag="div" className="number-next fs-15 fw-600"></Element>
              </div>
              
              {/* Slider Navigation */}
              <div className="swiper-button-previous-nav swiper-button-prev icon-extra-medium left-0px">
                <Element is={Icon} icon="bi-arrow-left" className="icon-extra-medium text-white" />
              </div>
              <div className="swiper-button-next-nav swiper-button-next icon-extra-medium right-0px">
                <Element is={Icon} icon="bi-arrow-right" className="icon-extra-medium text-white" />
              </div>
            </div>
          </div>
        </div>
      </Element>
    </Element>
  );
};

ArchitectureTestimonials1.craft = {
  displayName: "Architecture Testimonials",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
