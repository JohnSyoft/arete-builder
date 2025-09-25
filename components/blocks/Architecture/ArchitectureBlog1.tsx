import React from "react";
import { Element } from "@craftjs/core";
import { Container } from "@/components/editor/craft-components";

export const ArchitectureBlog1 = () => {
  return (
    <Element id="architecture-blog" is={Container} canvas>
      <section className="bg-dark-gray background-position-center-top position-relative pt-0" style={{backgroundImage: "url('images/demo-architecture-dotted-pattern.svg')"}}>
        <div className="container">
          <div className="row align-items-center justify-content-center text-center mb-2 sm-mb-5">
            <div className="col-md-6">
              <span className="text-base-color fs-12 fw-600 ls-3px text-uppercase d-inline-block">Architecture news</span>
              <h4 className="text-white fw-600">Latest articles</h4>
            </div>
          </div>
          <div className="row blog-metro mb-6">
            <div className="col-12">
              <ul className="blog-metro blog-wrapper grid-loading grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large">
                <li className="grid-sizer"></li>
                
                {/* Blog Post 1 */}
                <li className="grid-item text-white">
                  <figure className="position-relative mb-0 overflow-hidden">
                    <div className="blog-image bg-dark-slate-blue">
                      <a href="#"><img src="https://placehold.co/600x600" alt="" /></a>
                      <div className="blog-overlay"></div>
                    </div>
                    <figcaption className="d-flex flex-column justify-content-end h-100 p-50px lg-p-25px">
                      <div className="blog-categories mb-auto">
                        <a href="#" className="categories-btn bg-white text-dark-gray text-uppercase fw-700 ms-0 mb-auto align-self-start">Architect</a>
                      </div>
                      <a href="#" className="text-white card-title fs-22 fw-500">Everything designed things are designed.</a>
                    </figcaption>
                  </figure>
                </li>
                
                {/* Blog Post 2 */}
                <li className="grid-item text-white">
                  <figure className="position-relative mb-0 overflow-hidden">
                    <div className="blog-image bg-dark-slate-blue">
                      <a href="#"><img src="https://placehold.co/600x600" alt="" /></a>
                      <div className="blog-overlay"></div>
                    </div>
                    <figcaption className="d-flex flex-column justify-content-end h-100 p-50px lg-p-25px">
                      <div className="blog-categories mb-auto">
                        <a href="#" className="categories-btn bg-white text-dark-gray text-uppercase fw-700 ms-0 mb-auto align-self-start">Interior</a>
                      </div>
                      <a href="#" className="text-white card-title fs-22 fw-500">Teamwork is essential for small teams challenges.</a>
                    </figcaption>
                  </figure>
                </li>
                
                {/* Blog Post 3 */}
                <li className="grid-item text-white">
                  <figure className="position-relative mb-0 overflow-hidden">
                    <div className="blog-image bg-dark-slate-blue">
                      <a href="#"><img src="https://placehold.co/600x600" alt="" /></a>
                      <div className="blog-overlay"></div>
                    </div>
                    <figcaption className="d-flex flex-column justify-content-end h-100 p-50px lg-p-25px">
                      <div className="blog-categories mb-auto">
                        <a href="#" className="categories-btn bg-white text-dark-gray text-uppercase fw-700 ms-0 mb-auto align-self-start">Landscape</a>
                      </div>
                      <a href="#" className="text-white card-title fs-22 fw-500">Some people just try to celebrate joys of life.</a>
                    </figcaption>
                  </figure>
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

ArchitectureBlog1.craft = {
  displayName: "Architecture Blog",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
