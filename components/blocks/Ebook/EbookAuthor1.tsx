import React from "react";
import { Element } from "@craftjs/core";
import { Container } from "@/components/editor/craft-components";

export const EbookAuthor1 = () => {
  return (
    <Element id="ebook-author" is={Container} canvas>
      <section id="author" className="pb-0 border-bottom border-1 border-color-extra-medium-gray position-relative overflow-hidden accordion-bodybackground-position-center-top" style={{backgroundImage: "url('images/vertical-line-bg-medium-gray.svg')"}}>
        <div className="container position-relative">
          <div className="position-absolute bottom-150px left-minus-50px z-index-2">
            <img src="https://placehold.co/150x86" data-bottom-top="transform: rotate(10deg) translateX(50px)" data-top-bottom="transform:rotate(-10deg) translateX(-50px)" alt="" />
          </div>
          <div className="position-absolute top-0px lg-left-minus-150px left-minus-50px z-index-2 d-none d-lg-block">
            <img src="https://placehold.co/650x391" data-bottom-top="transform: rotate(20deg) translateY(50px)" data-top-bottom="transform:rotate(-20deg) translateY(-50px)" alt="" />
          </div>
          <div className="row align-items-end align-items-lg-center">
            <div className="col-md-6 order-2 order-md-1">
              <img className="w-100 position-relative bottom-minus-1px" src="https://placehold.co/610x615" alt="" />
            </div>
            <div className="col-lg-5 offset-lg-1 col-md-6 order-1 order-md-2 last-paragraph-no-margin position-relative z-index-2 text-center text-md-start lg-mb-50px sm-mb-35px">
              <span className="text-base-color fs-90 mb-10px d-block text-uppercase fancy-text-style-4 ls-minus-2px fw-600 alt-font">Hello!</span>
              <h3 className="fw-500 alt-font text-dark-gray text-uppercase ls-minus-1px mb-25px">I'm Herman miller</h3>
              <p className="w-75 lg-w-100 mb-25px">Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor consectetur adipiscing elit sed eiusmod incididunt.</p>
              <img src="images/demo-ebook-sign.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Author Info Section */}
      <section className="pt-50px pb-50px">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-7 text-center md-mb-25px">
              <h6 className="fw-400 text-dark-gray ls-minus-05px mb-0">
                <i className="bi bi-chat-quote text-base-color icon-medium me-10px"></i>
                Most popular book <span className="fw-500 text-decoration-line-bottom-medium">written</span> in the year.
              </h6>
            </div>
            <div className="col-lg-5 offset-xl-1 text-center text-lg-start">
              <span className="fs-24 text-dark-gray">
                Reach me on <a href="https://twitter.com/" target="_blank" className="text-dark-gray text-dark-gray-hover">
                  <i className="feather icon-feather-twitter text-info"></i> <span className="fw-500 text-decoration-line-bottom-medium">twitter</span>
                </a> or <a href="mailto:help@yourdomain.com" className="text-dark-gray text-dark-gray-hover">
                  <i className="feather icon-feather-mail text-primary"></i> <span className="fw-500 text-decoration-line-bottom-medium">email</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

EbookAuthor1.craft = {
  displayName: "Ebook Author",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
