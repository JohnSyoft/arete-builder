import React from "react";
import { Element } from "@craftjs/core";
import { Container } from "@/components/editor/craft-components";

export const ArchitectureContactPage1 = () => {
  return (
    <Element id="architecture-contact-page" is={Container} canvas>
      {/* Page Title Section */}
      <section className="ipad-top-space-margin page-title-big-typography cover-background background-position-center-bottom p-0 bg-dark-gray" style={{backgroundImage: "url(https://placehold.co/1920x600)"}}>
        <div className="container">
          <div className="row align-items-end justify-content-center one-half-screen md-small-screen sm-extra-small-screen pb-9">
            <div className="col-lg-6 col-md-8 position-relative page-title-extra-small text-center">
              <h1 className="mb-20px alt-font text-white fw-500 ls-minus-4px">
                <span className="text-base-color">contact</span> us
              </h1>
              <h2 className="text-white mb-0 text-uppercase ls-3px fw-600">Let's working together</h2>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="bg-dark-gray background-position-center-top" style={{backgroundImage: "url('images/demo-architecture-dotted-pattern.svg')"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 md-mb-50px sm-mb-30px">
              <span className="text-base-color fs-12 fw-600 ls-3px text-uppercase mb-5px d-block">Get to know us</span>
              <h4 className="text-white fw-600 mb-0">Contact us our offices around the world.</h4>
            </div>
            <div className="col-lg-3 col-sm-6 offset-lg-1 last-paragraph-no-margin xs-mb-30px">
              <span className="text-base-color fs-12 fw-600 ls-3px text-uppercase">London</span>
              <p className="w-90 lg-w-100 md-w-75 sm-w-85 xs-w-100">401 Broadway, 24th floor, Orchard view, London, UK</p>
              <div className="separator-line-1px bg-charcoal-grey w-90 xs-w-100 mt-20px mb-20px"></div>
              <div className="text-white"><i className="feather icon-feather-phone-call icon-very-small me-10px"></i><a href="tel:12345678910" className="text-white">+1 234 567 8910</a></div>
              <div className="text-white"><i className="feather icon-feather-mail icon-very-small me-10px"></i><a href="mailto:info@domain.com" className="text-white text-decoration-line-bottom">info@domain.com</a></div>
            </div>
            <div className="col-lg-3 col-sm-6 last-paragraph-no-margin">
              <span className="text-base-color fs-12 fw-600 ls-3px text-uppercase">Switzerland</span>
              <p className="w-90 lg-w-100 md-w-75 sm-w-85 xs-w-100">701 sondanella, 18th floor, Gunsberg, Switzerland</p>
              <div className="separator-line-1px bg-charcoal-grey w-90 xs-w-100 mt-20px mb-20px"></div>
              <div className="text-white"><i className="feather icon-feather-phone-call icon-very-small me-10px"></i><a href="tel:12345678910" className="text-white">+1 234 567 8910</a></div>
              <div className="text-white"><i className="feather icon-feather-mail icon-very-small me-10px"></i><a href="mailto:info@domain.com" className="text-white text-decoration-line-bottom">info@domain.com</a></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="p-0 bg-dark-gray">
        <div className="container-fluid p-0">
          <div className="row g-0 overlap-height">
            <div className="col-12">
              <div id="map" className="map" data-map-options='{"lat": -37.805688, "lng": 144.962312, "style": "Dark", "marker": {"type": "HTML", "color": "#efff02"}, "popup": {"defaultOpen": false, "html": "<div class=infowindow><strong class=\"mb-3 d-inline-block alt-font\">Crafto Architecture</strong><p>16122 Collins street, Melbourne, Australia</p></div><div class=\"google-maps-link alt-font\"> <a aria-label=\"View larger map\" target=\"_blank\" jstcache=\"31\" href=\"https://maps.google.com/maps?ll=-37.805688,144.962312&amp;z=17&amp;t=m&amp;hl=en-US&amp;gl=IN&amp;mapclient=embed&amp;cid=13153204942596594449\" jsaction=\"mouseup:placeCard.largerMap\">VIEW LARGER MAP</a></div>"}}'></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="bg-dark-gray background-position-center-top position-relative" style={{backgroundImage: "url('images/demo-architecture-dotted-pattern.svg')"}}>
        <div className="container">
          <div className="row justify-content-center overlap-section overlap-section-three-fourth mb-6">
            <div className="col-lg-10">
              <div className="p-9 sm-p-7 bg-nero-grey">
                <form action="email-templates/contact-form.php" method="post" className="contact-form-style-03">
                  <div className="row justify-content-center">
                    <div className="col-md-9 mb-7 xs-mb-30px">
                      <h4 className="text-white fw-600 mb-0"><span className="text-base-color">Let's talk.</span> Have a project in mind?</h4>
                    </div>
                    <div className="col-md-3 text-end d-none d-md-inline-block">
                      <img src="https://placehold.co/164x98" className="h-50px" alt="" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="exampleInputEmail1" className="form-label fs-11 ls-2px text-uppercase text-white mb-0">Your name*</label>
                      <div className="position-relative form-group mb-30px">
                        <span className="form-icon"><i className="bi bi-emoji-smile"></i></span>
                        <input className="fs-15 ps-0 border-radius-0px border-color-charcoal-grey bg-transparent form-control required" id="exampleInputEmail1" type="text" name="name" placeholder="What's your good name?" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="exampleInputEmail2" className="form-label fs-11 ls-2px text-uppercase text-white mb-0">Your email address*</label>
                      <div className="position-relative form-group mb-30px">
                        <span className="form-icon"><i className="bi bi-envelope"></i></span>
                        <input className="fs-15 ps-0 border-radius-0px border-color-charcoal-grey bg-transparent form-control required" id="exampleInputEmail2" type="email" name="email" placeholder="Enter your email address" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="exampleInputEmail3" className="form-label fs-11 ls-2px text-uppercase text-white mb-0">Your phone number</label>
                      <div className="position-relative form-group mb-30px">
                        <span className="form-icon"><i className="bi bi-telephone"></i></span>
                        <input className="fs-15 ps-0 border-radius-0px border-color-charcoal-grey bg-transparent form-control" id="exampleInputEmail3" type="tel" name="phone" placeholder="Enter your phone number" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="exampleInputEmail4" className="form-label fs-11 ls-2px text-uppercase text-white mb-0">Your subject</label>
                      <div className="position-relative form-group mb-30px">
                        <span className="form-icon"><i className="bi bi-journals"></i></span>
                        <input className="fs-15 ps-0 border-radius-0px border-color-charcoal-grey bg-transparent form-control" id="exampleInputEmail4" type="text" name="subject" placeholder="How can we help you?" />
                      </div>
                    </div>
                    <div className="col-12 mb-5">
                      <label htmlFor="exampleInputEmail5" className="form-label fs-11 ls-2px text-uppercase text-white mb-0">Your message</label>
                      <div className="position-relative form-group form-textarea mb-0">
                        <textarea className="fs-15 ps-0 border-radius-0px border-color-charcoal-grey bg-transparent form-control" name="comment" placeholder="Describe about your project" rows={4}></textarea>
                        <span className="form-icon"><i className="bi bi-chat-square-dots"></i></span>
                      </div>
                    </div>
                    <div className="col-xl-7 col-md-8 text-center text-md-start sm-mb-25px">
                      <p className="mb-0 fs-14 lh-24 w-90 xl-w-100">We are committed to protecting your privacy. We will never collect information about you without your explicit consent.</p>
                    </div>
                    <div className="col-xl-5 col-md-4 text-center text-md-end">
                      <input id="exampleInputEmail6" type="hidden" name="redirect" value="" />
                      <button className="btn btn-small btn-base-color btn-box-shadow btn-round-edge-small primary-font fw-700 submit" type="submit">Send message</button>
                    </div>
                    <div className="col-12">
                      <div className="form-results mt-20px d-none"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-minus-50px lg-bottom-minus-40px md-bottom-minus-25px sm-bottom-minus-20px xs-bottom-minus-10px left-0px right-0px text-center w-100 fs-200 lg-fs-160 md-fs-140 sm-fs-120 xs-fs-90 fw-600 text-nero-grey ls-minus-4px">architecture</div>
      </section>
    </Element>
  );
};

ArchitectureContactPage1.craft = {
  displayName: "Architecture Contact Page",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
