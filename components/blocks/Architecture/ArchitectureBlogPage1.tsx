import React from "react";
import { Element } from "@craftjs/core";
import { Container } from "@/components/editor/craft-components";

export const ArchitectureBlogPage1 = () => {
  return (
    <Element id="architecture-blog-page" is={Container} canvas>
      {/* Page Title Section */}
      <section className="ipad-top-space-margin page-title-big-typography bg-dark-gray cover-background background-position-center-bottom p-0" style={{backgroundImage: "url(https://placehold.co/1920x600)"}}>
        <div className="container">
          <div className="row align-items-end justify-content-center one-half-screen md-small-screen sm-extra-small-screen pb-9">
            <div className="col-lg-6 col-md-8 position-relative page-title-extra-small text-center">
              <h1 className="mb-20px alt-font text-white fw-500 ls-minus-4px">
                <span className="text-base-color">Latest</span> articles
              </h1>
              <h2 className="text-white mb-0 text-uppercase ls-3px fw-600">from architecture</h2>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Grid Section */}
      <section className="bg-dark-gray background-position-center-top position-relative" style={{backgroundImage: "url('images/demo-architecture-dotted-pattern.svg')"}}>
        <div className="container">
          <div className="row blog-metro">
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
                
                {/* Blog Post 4 */}
                <li className="grid-item text-white">
                  <figure className="position-relative mb-0 overflow-hidden">
                    <div className="blog-image bg-dark-slate-blue">
                      <a href="#"><img src="https://placehold.co/600x600" alt="" /></a>
                      <div className="blog-overlay"></div>
                    </div>
                    <figcaption className="d-flex flex-column justify-content-end h-100 p-50px lg-p-25px">
                      <div className="blog-categories mb-auto">
                        <a href="#" className="categories-btn bg-white text-dark-gray text-uppercase fw-700 ms-0 mb-auto align-self-start">Inspiration</a>
                      </div>
                      <a href="#" className="text-white card-title fs-22 fw-500">Unveiling the future of architectural marvels.</a>
                    </figcaption>
                  </figure>
                </li>
                
                {/* Blog Post 5 */}
                <li className="grid-item text-white">
                  <figure className="position-relative mb-0 overflow-hidden">
                    <div className="blog-image bg-dark-slate-blue">
                      <a href="#"><img src="https://placehold.co/600x600" alt="" /></a>
                      <div className="blog-overlay"></div>
                    </div>
                    <figcaption className="d-flex flex-column justify-content-end h-100 p-50px lg-p-25px">
                      <div className="blog-categories mb-auto">
                        <a href="#" className="categories-btn bg-white text-dark-gray text-uppercase fw-700 ms-0 mb-auto align-self-start">House</a>
                      </div>
                      <a href="#" className="text-white card-title fs-22 fw-500">Embracing simplicity in architectural design.</a>
                    </figcaption>
                  </figure>
                </li>
                
                {/* Blog Post 6 */}
                <li className="grid-item text-white">
                  <figure className="position-relative mb-0 overflow-hidden">
                    <div className="blog-image bg-dark-slate-blue">
                      <a href="#"><img src="https://placehold.co/600x600" alt="" /></a>
                      <div className="blog-overlay"></div>
                    </div>
                    <figcaption className="d-flex flex-column justify-content-end h-100 p-50px lg-p-25px">
                      <div className="blog-categories mb-auto">
                        <a href="#" className="categories-btn bg-white text-dark-gray text-uppercase fw-700 ms-0 mb-auto align-self-start">Urban</a>
                      </div>
                      <a href="#" className="text-white card-title fs-22 fw-500">Capturing the beauty and essence of buildings.</a>
                    </figcaption>
                  </figure>
                </li>
                
                {/* Blog Post 7 */}
                <li className="grid-item text-white">
                  <figure className="position-relative mb-0 overflow-hidden">
                    <div className="blog-image bg-dark-slate-blue">
                      <a href="#"><img src="https://placehold.co/600x600" alt="" /></a>
                      <div className="blog-overlay"></div>
                    </div>
                    <figcaption className="d-flex flex-column justify-content-end h-100 p-50px lg-p-25px">
                      <div className="blog-categories mb-auto">
                        <a href="#" className="categories-btn bg-white text-dark-gray text-uppercase fw-700 ms-0 mb-auto align-self-start">Luxury</a>
                      </div>
                      <a href="#" className="text-white card-title fs-22 fw-500">How architecture impacts our daily lives.</a>
                    </figcaption>
                  </figure>
                </li>
                
                {/* Blog Post 8 */}
                <li className="grid-item text-white">
                  <figure className="position-relative mb-0 overflow-hidden">
                    <div className="blog-image bg-dark-slate-blue">
                      <a href="#"><img src="https://placehold.co/600x600" alt="" /></a>
                      <div className="blog-overlay"></div>
                    </div>
                    <figcaption className="d-flex flex-column justify-content-end h-100 p-50px lg-p-25px">
                      <div className="blog-categories mb-auto">
                        <a href="#" className="categories-btn bg-white text-dark-gray text-uppercase fw-700 ms-0 mb-auto align-self-start">Modern</a>
                      </div>
                      <a href="#" className="text-white card-title fs-22 fw-500">Redefining architecture for a greener future.</a>
                    </figcaption>
                  </figure>
                </li>
                
                {/* Blog Post 9 */}
                <li className="grid-item text-white">
                  <figure className="position-relative mb-0 overflow-hidden">
                    <div className="blog-image bg-dark-slate-blue">
                      <a href="#"><img src="https://placehold.co/600x600" alt="" /></a>
                      <div className="blog-overlay"></div>
                    </div>
                    <figcaption className="d-flex flex-column justify-content-end h-100 p-50px lg-p-25px">
                      <div className="blog-categories mb-auto">
                        <a href="#" className="categories-btn bg-white text-dark-gray text-uppercase fw-700 ms-0 mb-auto align-self-start">Living</a>
                      </div>
                      <a href="#" className="text-white card-title fs-22 fw-500">Designing spaces for health and wellbeing.</a>
                    </figcaption>
                  </figure>
                </li>
              </ul>
              
              {/* Pagination */}
              <div className="row">
                <div className="col-12 mt-4 d-flex justify-content-center">
                  <ul className="pagination pagination-style-01 fs-13 mb-0 light">
                    <li className="page-item"><a className="page-link" href="#"><i className="feather icon-feather-arrow-left fs-18 d-xs-none"></i></a></li>
                    <li className="page-item"><a className="page-link" href="#">01</a></li>
                    <li className="page-item active"><a className="page-link" href="#">02</a></li>
                    <li className="page-item"><a className="page-link" href="#">03</a></li>
                    <li className="page-item"><a className="page-link" href="#">04</a></li>
                    <li className="page-item"><a className="page-link" href="#"><i className="feather icon-feather-arrow-right fs-18 d-xs-none"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

ArchitectureBlogPage1.craft = {
  displayName: "Architecture Blog Page",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
