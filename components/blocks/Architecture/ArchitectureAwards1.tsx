import React from "react";
import { Element } from "@craftjs/core";
import { Container, Section, Box, Text, Icon } from "@/components/editor/craft-components";

export const ArchitectureAwards1 = () => {
  return (
    <Element id="architecture-awards" is={Container} canvas>
      <Element is={Section} className="bg-nero-grey overlap-height background-position-center-top" style={{backgroundImage: "url('images/demo-architecture-dotted-pattern.svg')"}}>
        <div className="container overlap-gap-section">
          <div className="row">
            <div className="col-lg-4">
              <div className="position-relative">
                <Element is={Text} tag="span" className="text-base-color fs-12 fw-600 ls-3px text-uppercase mb-5px d-block">International awards</Element>
                <Element is={Text} tag="h4" className="text-white fw-600 mb-20px">These awards reflect the hard work.</Element>
                <Element is={Text} tag="p">Our buildings combine minimalism & elegance of lines and shapes. We want them to be an integral part of the surrounding landscape.</Element>
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1 last-paragraph-no-margin">
              {/* Award 1 */}
              <div className="row align-items-center pt-25px pb-25px border-bottom border-color-charcoal-grey g-0 position-relative sm-pe-40px">
                <div className="col-md-2">
                  <Element is={Text} tag="span" className="fw-600 text-base-color">2005</Element>
                </div>
                <div className="col-md-6">
                  <Element is={Text} tag="span" className="text-white fw-500 fs-17">Architecture project of the year</Element>
                </div>
                <div className="col-md-3">
                  <Element is={Text} tag="span" className="fw-500">Architecture</Element>
                </div>
                <div className="col-auto col-md-1 sm-position-absolute right-0px">
                  <a href="#"><Element is={Icon} icon="bi-arrow-right" className="text-white" /></a>
                </div>
              </div>
              
              {/* Award 2 */}
              <div className="row align-items-center pt-25px pb-25px border-bottom border-color-charcoal-grey g-0 position-relative sm-pe-40px">
                <div className="col-md-2">
                  <Element is={Text} tag="span" className="fw-600 text-base-color">2010</Element>
                </div>
                <div className="col-md-6">
                  <Element is={Text} tag="span" className="text-white fw-500 fs-17">Best Interior of the day</Element>
                </div>
                <div className="col-md-3">
                  <Element is={Text} tag="span" className="fw-500">Interior</Element>
                </div>
                <div className="col-auto col-md-1 sm-position-absolute right-0px">
                  <a href="#"><Element is={Icon} icon="bi-arrow-right" className="text-white" /></a>
                </div>
              </div>
              
              {/* Award 3 */}
              <div className="row align-items-center pt-25px pb-25px border-bottom border-color-charcoal-grey g-0 position-relative sm-pe-40px">
                <div className="col-md-2">
                  <Element is={Text} tag="span" className="fw-600 text-base-color">2018</Element>
                </div>
                <div className="col-md-6">
                  <Element is={Text} tag="span" className="text-white fw-500 fs-17">Best project of the year</Element>
                </div>
                <div className="col-md-3">
                  <Element is={Text} tag="span" className="fw-500">Landscape</Element>
                </div>
                <div className="col-auto col-md-1 sm-position-absolute right-0px">
                  <a href="#"><Element is={Icon} icon="bi-arrow-right" className="text-white" /></a>
                </div>
              </div>
              
              {/* Award 4 */}
              <div className="row align-items-center pt-25px pb-25px g-0 position-relative sm-pe-40px sm-pb-0">
                <div className="col-md-2">
                  <Element is={Text} tag="span" className="fw-600 text-base-color">2021</Element>
                </div>
                <div className="col-md-6">
                  <Element is={Text} tag="span" className="text-white fw-500 fs-17">Best project of the month</Element>
                </div>
                <div className="col-md-3">
                  <Element is={Text} tag="span" className="fw-500">Architecture</Element>
                </div>
                <div className="col-auto col-md-1 sm-position-absolute right-0px">
                  <a href="#"><Element is={Icon} icon="bi-arrow-right" className="text-white" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </Element>
  );
};

ArchitectureAwards1.craft = {
  displayName: "Architecture Awards",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
