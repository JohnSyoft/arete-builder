import React from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Button } from "../Basic/Button";
import { Icon } from "../Basic/Icon";

export const ArchitectureProjects1 = () => {
  return (
    <Element id="architecture-projects-container" is={Section} canvas>
      <section className="bg-dark-gray background-position-center-top pb-0" style={{backgroundImage: "url('images/demo-architecture-dotted-pattern.svg')"}}>
        <div className="container">
          <Element id="architecture-projects-main" is={Box} className="row mb-8 xs-mb-10 overlap-section">
            <div className="col-12 position-relative">
              <Element id="architecture-projects-title" is={Box} className="vertical-title-center align-items-center position-absolute top-0px left-15px bg-base-color p-10px xs-p-5px h-270px sm-h-190px z-index-9 w-50px xs-w-40px">
                <Element
                  id="architecture-projects-title-text"
                  is={Text}
                  text="Recent projects"
                  className="title fs-14 ls-2px text-dark-gray fw-700 text-uppercase"
                />
              </Element>
              <div className="swiper position-relative text-slider-style-04 magic-cursor drag-cursor" data-slider-options='{"autoHeight": true, "loop": true, "allowTouchMove": true, "autoplay": {"delay": 4000, "disableOnInteraction": false}, "navigation": {"nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1"}, "effect": "fade"}'>
                <div className="swiper-wrapper">
                  {/* Project 1 */}
                  <div className="swiper-slide">
                    <Element
                      id="architecture-project-1-image"
                      is={Image}
                      src="https://placehold.co/1190x700"
                      alt=""
                    />
                    <div className="container position-absolute sm-position-relative bottom-0 right-0px z-index-1 swiper-slide-content">
                      <div className="row justify-content-end align-items-end h-100">
                        <div className="col-lg-5 col-md-7 p-0">
                          <Element id="architecture-project-1-content" is={Box} className="bg-white p-16 lg-p-12">
                            <Element
                              id="architecture-project-1-category"
                              is={Text}
                              text="Architecture"
                              className="text-dark-gray fs-15 text-uppercase ls-1px fw-700"
                            />
                            <Element
                              id="architecture-project-1-title"
                              is={Text}
                              text="Leana cagnotto"
                              className="alt-font text-dark-gray fw-600 mb-20px ls-minus-2px"
                            />
                            <Element
                              id="architecture-project-1-description"
                              is={Text}
                              text="Lorem ipsum is simply dummy text printing and lorem ipsum been."
                              className="w-90 mb-10px"
                            />
                            <Element
                              id="architecture-project-1-button"
                              is={Button}
                              text="Explore project"
                              showIcon={true}
                              iconType="arrow-right"
                              iconPosition="right"
                              className="btn btn-link btn-hover-animation-switch btn-large text-dark-gray fw-800"
                            />
                          </Element>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project 2 */}
                  <div className="swiper-slide">
                    <Element
                      id="architecture-project-2-image"
                      is={Image}
                      src="https://placehold.co/1190x700"
                      alt=""
                    />
                    <div className="container position-absolute sm-position-relative bottom-0 right-0px z-index-1 swiper-slide-content">
                      <div className="row justify-content-end align-items-end h-100">
                        <div className="col-lg-5 col-md-7 p-0">
                          <Element id="architecture-project-2-content" is={Box} className="bg-white p-16 lg-p-12">
                            <Element
                              id="architecture-project-2-category"
                              is={Text}
                              text="Landscape"
                              className="text-dark-gray fs-15 text-uppercase ls-1px fw-700"
                            />
                            <Element
                              id="architecture-project-2-title"
                              is={Text}
                              text="Morroco house"
                              className="alt-font text-dark-gray fw-600 mb-20px ls-minus-2px"
                            />
                            <Element
                              id="architecture-project-2-description"
                              is={Text}
                              text="Lorem dummy text ipsum is simply printing and lorem ipsum been."
                              className="w-90 mb-10px"
                            />
                            <Element
                              id="architecture-project-2-button"
                              is={Button}
                              text="Explore project"
                              showIcon={true}
                              iconType="arrow-right"
                              iconPosition="right"
                              className="btn btn-link btn-hover-animation-switch btn-large text-dark-gray fw-800"
                            />
                          </Element>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project 3 */}
                  <div className="swiper-slide">
                    <Element
                      id="architecture-project-3-image"
                      is={Image}
                      src="https://placehold.co/1190x700"
                      alt=""
                    />
                    <div className="container position-absolute sm-position-relative bottom-0 right-0px z-index-1 swiper-slide-content">
                      <div className="row justify-content-end align-items-end h-100">
                        <div className="col-lg-5 col-md-7 p-0">
                          <Element id="architecture-project-3-content" is={Box} className="bg-white p-16 lg-p-12">
                            <Element
                              id="architecture-project-3-category"
                              is={Text}
                              text="Interior"
                              className="text-dark-gray fs-15 text-uppercase ls-1px fw-700"
                            />
                            <Element
                              id="architecture-project-3-title"
                              is={Text}
                              text="Melana house"
                              className="alt-font text-dark-gray fw-600 mb-20px ls-minus-2px"
                            />
                            <Element
                              id="architecture-project-3-description"
                              is={Text}
                              text="Lorem ipsum is simply dummy text printing and lorem ipsum been."
                              className="w-90 mb-10px"
                            />
                            <Element
                              id="architecture-project-3-button"
                              is={Button}
                              text="Explore project"
                              showIcon={true}
                              iconType="arrow-right"
                              iconPosition="right"
                              className="btn btn-link btn-hover-animation-switch btn-large text-dark-gray fw-800"
                            />
                          </Element>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slider Navigation */}
                <div className="slider-one-slide-prev-1 icon-small swiper-button-prev slider-navigation-style-07 bg-dark-gray text-white box-shadow-small">
                  <Element
                    id="architecture-projects-prev-icon"
                    is={Icon}
                    icon="arrow-down-left"
                  />
                </div>
                <div className="slider-one-slide-next-1 icon-small swiper-button-next slider-navigation-style-07 bg-dark-gray text-white box-shadow-small">
                  <Element
                    id="architecture-projects-next-icon"
                    is={Icon}
                    icon="arrow-up-right"
                  />
                </div>
              </div>
            </div>
          </Element>
          
          {/* Stats Section */}
          <Element id="architecture-projects-stats" is={Box} className="row row-cols-2 row-cols-md-4 counter-style-04">
            <Element id="architecture-stat-1" is={Box} className="col last-paragraph-no-margin sm-mb-30px text-center">
              <Element
                id="architecture-stat-1-number"
                is={Text}
                text="255+"
                className="vertical-counter d-inline-flex alt-font text-white fw-300 mb-0"
              />
              <Element
                id="architecture-stat-1-label"
                is={Text}
                text="Projects"
                className="fs-13 text-base-color fw-600 d-block ls-2px text-uppercase"
              />
            </Element>
            <Element id="architecture-stat-2" is={Box} className="col last-paragraph-no-margin sm-mb-30px text-center">
              <Element
                id="architecture-stat-2-number"
                is={Text}
                text="189+"
                className="vertical-counter d-inline-flex alt-font text-white fw-300 mb-0"
              />
              <Element
                id="architecture-stat-2-label"
                is={Text}
                text="Clients"
                className="fs-13 text-base-color fw-600 d-block ls-2px text-uppercase"
              />
            </Element>
            <Element id="architecture-stat-3" is={Box} className="col last-paragraph-no-margin text-center">
              <Element
                id="architecture-stat-3-number"
                is={Text}
                text="738+"
                className="vertical-counter d-inline-flex alt-font text-white fw-300 mb-0"
              />
              <Element
                id="architecture-stat-3-label"
                is={Text}
                text="Capture"
                className="fs-13 text-base-color fw-600 d-block ls-2px text-uppercase"
              />
            </Element>
            <Element id="architecture-stat-4" is={Box} className="col last-paragraph-no-margin text-center">
              <Element
                id="architecture-stat-4-number"
                is={Text}
                text="626+"
                className="vertical-counter d-inline-flex alt-font text-white fw-300 mb-0"
              />
              <Element
                id="architecture-stat-4-label"
                is={Text}
                text="Coffee"
                className="fs-13 text-base-color fw-600 d-block ls-2px text-uppercase"
              />
            </Element>
          </Element>
        </div>
      </section>
    </Element>
  );
};

ArchitectureProjects1.craft = {
  displayName: "Architecture Projects",
  props: {},
  isCanvas: true,
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
