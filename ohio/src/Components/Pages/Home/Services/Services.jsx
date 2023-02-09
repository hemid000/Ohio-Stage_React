import React from "react";
import "../Services/Services.scss";
const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="left_side">
              <p>SERVICES</p>
              <h2>
                We're a team of creatives who are excited about unique ideas.
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right_side">
              <div className="row g-3">
                <div className="col-lg-6">
                  <p>DESIGN</p>
                  <h3>Brand Strategy & Art Direction</h3>
                  <span>
                    Creating a higher spacing and how people move through a
                    unique and impactful campaign.
                  </span>
                </div>
                <div className="col-lg-6">
                  <p>PRODUCTION</p>
                  <h3>UX/UI Design & Website Design</h3>
                  <span>
                    Creating a higher spacing and how people move through a
                    unique and impactful campaign.
                  </span>
                </div>
                <div className="col-lg-6">
                  <p>CAMPAIGNS</p>
                  <h3>Typography & Video Production</h3>
                  <span>
                    Creating a higher spacing and how people move through a
                    unique and impactful campaign.
                  </span>
                </div>
                <div className="col-lg-6">
                  <p>STRATEGY</p>
                  <h3>Promo Campaigns & Content Creation</h3>
                  <span>
                    Creating a higher spacing and how people move through a
                    unique and impactful campaign.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
