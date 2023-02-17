import React from "react";
import "../GetTouch/Touch.scss";
const Touch = () => {
  return (
    <section id="touch">
      <div className="container">
        <span>
          <strong>Home :</strong> Contact: Agency
        </span>

        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <p>Get in touch</p>
                <ul>
                  <li>Work Inquiries</li>
                  <li>
                    <strong>+1.809.120.6705</strong>
                  </li>
                  <li>Assistance hours:</li>
                  <li>Monday – Friday</li>
                  <li>6 am to 8 pm EST</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <p>Careers</p>
                <ul>
                  <li>Careers & Press</li>
                  <li>
                    <strong>+1.809.120.4590</strong>
                  </li>
                  <li>Assistance hours:</li>
                  <li>Tuesday – Saturday</li>
                  <li>6 am to 8 pm EST</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <p>Post address</p>
                <ul>
                  <li>541 Melville Ave, Palo Alto,</li>
                  <li>CA 94301,</li>
                  <li>United States</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <p>Social media</p>
                <ul>
                  <li>
                    <strong>Facebook</strong>
                  </li>
                  <li>
                    <strong>Instagram</strong>
                  </li>
                  <li>
                    <strong>Twitter</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Touch;
