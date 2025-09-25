import React from "react";
import { Element } from "@craftjs/core";
import { Container } from "@/components/editor/craft-components";

export const EbookContact1 = () => {
  return (
    <Element id="ebook-contact" is={Container} canvas>
      <section id="contact" className="bg-very-light-gray background-position-right-top background-no-repeat" style={{backgroundImage: "url('https://placehold.co/551x369')"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 md-mb-50px contact-form-style-03">
              <div className="ps-16 pe-16 pt-13 pb-13 lg-p-10 border-radius-6px bg-white h-100 box-shadow-quadruple-large background-position-right-bottom background-no-repeat" style={{backgroundImage: "url('https://placehold.co/129x114')"}}>
                <h3 className="fw-500 alt-font text-dark-gray text-uppercase ls-minus-2px">Get in touch now!</h3>
                <form action="email-templates/contact-form.php" method="post">
                  <div className="position-relative form-group mb-15px">
                    <span className="form-icon text-dark-gray"><i className="bi bi-person icon-extra-medium"></i></span>
                    <input className="ps-0 border-radius-0px border-bottom bg-transparent border-1 border-color-extra-medium-gray form-control required" type="text" name="name" placeholder="Enter your name*" />
                  </div>
                  <div className="position-relative form-group mb-15px">
                    <span className="form-icon text-dark-gray"><i className="bi bi-envelope icon-extra-medium"></i></span>
                    <input className="ps-0 border-radius-0px border-bottom bg-transparent border-1 border-color-extra-medium-gray form-control required" type="email" name="email" placeholder="Enter your email*" />
                  </div>
                  <div className="position-relative form-group form-textarea mt-15px mb-25px">
                    <textarea className="ps-0 border-radius-0px border-bottom bg-transparent border-1 border-color-extra-medium-gray form-control" name="comment" placeholder="Enter your message" rows={3}></textarea>
                    <span className="form-icon text-dark-gray"><i className="bi bi-chat-square-dots icon-extra-medium"></i></span>
                    <input type="hidden" name="redirect" value="" />
                    <button className="btn btn-medium btn-round-edge btn-dark-gray btn-box-shadow mt-30px submit w-100 fw-400" type="submit">Send message</button>
                    <div className="form-results mt-20px d-none"></div>
                  </div>
                  <span className="fs-14 lh-24 d-block w-80 lg-w-95">
                    I understand that my data will be hold securely in accordance with the <a href="#" className="text-dark-gray text-decoration-line-bottom">privacy policy.</a>
                  </span>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-15 pe-15 pt-13 pb-13 lg-p-9 md-p-0 h-100">
                <span className="d-block text-uppercase mb-10px text-base-color fw-500">Contact with Author</span>
                <h2 className="fw-500 alt-font text-dark-gray text-uppercase ls-minus-2px">Have questions? Ready to help!</h2>
                <div className="row mt-10 md-mt-8">
                  {/* Contact Info 1 */}
                  <div className="col-12 icon-with-text-style-08 mb-25px">
                    <div className="feature-box feature-box-left-icon-middle border-bottom pb-25px border-color-extra-medium-gray">
                      <div className="feature-box-icon me-25px lh-0px">
                        <i className="bi bi-telephone-outbound icon-medium text-dark-gray"></i>
                      </div>
                      <div className="feature-box-content">
                        <span>Feel free to get in touch?</span>
                        <span className="d-block fw-500 fs-18"><a href="tel:1234567890" className="text-dark-gray">123 456 7890</a></span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contact Info 2 */}
                  <div className="col-12 icon-with-text-style-08 mb-25px">
                    <div className="feature-box feature-box-left-icon-middle border-bottom pb-25px border-color-extra-medium-gray">
                      <div className="feature-box-icon me-25px lh-0px">
                        <i className="bi bi-envelope-open icon-medium text-dark-gray"></i>
                      </div>
                      <div className="feature-box-content">
                        <span>How can we help you?</span>
                        <span className="d-block fw-500 fs-18"><a href="mailto:help@yourdomain.com" className="text-dark-gray">help@yourdomain.com</a></span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contact Info 3 */}
                  <div className="col-12 icon-with-text-style-08">
                    <div className="feature-box feature-box-left-icon-middle">
                      <div className="feature-box-icon me-25px lh-0px">
                        <i className="bi bi-chat-text icon-medium text-dark-gray"></i>
                      </div>
                      <div className="feature-box-content">
                        <span>Are you ready for coffee?</span>
                        <span className="text-dark-gray d-block fw-500 fs-18">401 Broadway, London</span>
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

EbookContact1.craft = {
  displayName: "Ebook Contact",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
