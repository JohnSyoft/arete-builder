import React from "react";
import { Element } from "@craftjs/core";
import { Container } from "@/components/editor/craft-components";

export const EbookPricing1 = () => {
  return (
    <Element id="ebook-pricing" is={Container} canvas>
      <section id="pricing" className="bg-gradient-very-light-gray">
        <div className="container">
          <div className="row align-items-center mb-8">
            <div className="col-lg-5 md-mb-50px text-center text-lg-start">
              <h2 className="fw-500 alt-font text-dark-gray text-uppercase mb-25px ls-minus-2px w-80 lg-w-100">Simple and flexible pricing</h2>
              <p className="w-80 lg-w-100">Lorem ipsum dolor consectetur adipiscing do text eiusmod tempor incididunt labore.</p>
              <a href="#chapter" className="btn btn-dark-gray btn-large left-icon btn-box-shadow btn-switch-text btn-round-edge me-25px section-link">
                <span>
                  <span><i className="feather icon-feather-file-text text-base-color icon-small"></i></span>
                  <span className="btn-double-text fw-400" data-text="Chapters inside">Browse chapter</span>
                </span>
              </a>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-7">
              <div className="row row-cols-1 row-cols-sm-2 justify-content-center">
                {/* Kindle Version */}
                <div className="col xs-mb-30px">
                  <div className="bg-white h-100 box-shadow-quadruple-large box-shadow-quadruple-large-hover border-radius-6px p-45px xl-p-30px text-center position-relative">
                    <div className="fs-11 fw-500 text-uppercase bg-red position-absolute right-20px top-20px text-white ps-10px pe-10px border-radius-2px lh-22 alt-font">Hot</div>
                    <h2 className="text-dark-gray ls-minus-2px fw-700 d-block mb-5px">$29</h2>
                    <div className="bg-selago d-inline-block mb-20px fw-500 text-uppercase border-radius-30px ps-20px pe-20px fs-13 w-120px text-cornflower-blue lh-30">Kindle</div>
                    <p className="lh-28 w-80 mx-auto">eBook version + Audio of the book</p>
                    <a href="#" className="btn btn-cornflower-blue btn-medium btn-box-shadow btn-round-edge fw-400">Buy from Amazon</a>
                  </div>
                </div>
                
                {/* Hardcover Version */}
                <div className="col">
                  <div className="bg-white h-100 box-shadow-quadruple-large box-shadow-quadruple-large-hover border-radius-6px p-45px xl-p-30px text-center position-relative">
                    <h2 className="text-dark-gray ls-minus-2px fw-700 d-block mb-5px">$49</h2>
                    <div className="bg-white-ice d-inline-block mb-20px fw-500 text-uppercase border-radius-30px ps-20px pe-20px fs-13 w-120px text-jade lh-30">Hardcover</div>
                    <p className="lh-28 w-80 mx-auto">Hardcover version + Audio of the book</p>
                    <a href="#" className="btn btn-jade btn-medium btn-box-shadow btn-round-edge fw-400">Buy from Amazon</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-10px">
            <div className="col text-center">
              <span className="text-dark-gray text-uppercase text-decoration-line-bottom fs-15 fw-500">Our authentic partner online stores!</span>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 text-center justify-content-center clients-style-05">
            {/* Partner 1 */}
            <div className="col">
              <div className="client-box">
                <a href="#"><img src="https://placehold.co/225x110" alt="" /></a>
              </div>
            </div>
            
            {/* Partner 2 */}
            <div className="col">
              <div className="client-box">
                <a href="#"><img src="https://placehold.co/225x110" alt="" /></a>
              </div>
            </div>
            
            {/* Partner 3 */}
            <div className="col">
              <div className="client-box">
                <a href="#"><img src="https://placehold.co/225x110" alt="" /></a>
              </div>
            </div>
            
            {/* Partner 4 */}
            <div className="col">
              <div className="client-box">
                <a href="#"><img src="https://placehold.co/225x110" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

EbookPricing1.craft = {
  displayName: "Ebook Pricing",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
