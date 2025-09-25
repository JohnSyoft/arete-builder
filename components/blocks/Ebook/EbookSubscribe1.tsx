import React from "react";
import { Element } from "@craftjs/core";
import { Container } from "@/components/editor/craft-components";

export const EbookSubscribe1 = () => {
  return (
    <Element id="ebook-subscribe" is={Container} canvas>
      <section id="subscribe" className="half-section bg-base-color">
        <div className="container position-relative">
          <div className="position-absolute left-0px top-minus-150px md-top-minus-110px background-no-repeat background-size-100 h-300px w-100 d-none d-md-inline-block" style={{backgroundImage: "url('https://placehold.co/1190x262')"}} data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)"></div>
          <div className="row align-items-center justify-content-center position-relative">
            <div className="col-xxl-5 col-xl-6 col-lg-7 text-center text-lg-end md-mb-30px">
              <h2 className="fw-500 alt-font text-white text-uppercase ls-minus-2px mb-0">Free chapter of book</h2>
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-5 text-center text-lg-start">
              <div className="d-inline-block w-90 sm-w-100 newsletter-style-02 position-relative">
                <form action="email-templates/subscribe-newsletter.php" method="post" className="position-relative w-100">
                  <input className="input-large bg-white border-radius-4px border-color-white w-100 box-shadow-double-large form-control required" type="email" name="email" placeholder="Enter your email address" />
                  <input type="hidden" name="redirect" value="" />
                  <button className="btn submit" aria-label="submit">
                    <i className="icon feather icon-feather-mail icon-extra-medium text-dark-gray"></i>
                  </button>
                  <div className="form-results border-radius-4px pt-10px pb-10px ps-15px pe-15px fs-14 lh-14 mt-10px w-100 text-center position-absolute d-none"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

EbookSubscribe1.craft = {
  displayName: "Ebook Subscribe",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
