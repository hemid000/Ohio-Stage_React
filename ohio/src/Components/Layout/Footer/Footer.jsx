import React from "react";
import "../Footer/Footer.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
const Footer = () => {
  return (
    <footer id="foot">
      <div className="upside">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-12 upfoot">
              <div className="left_side">
                <span>COLLABORATION</span>
                <h3>
                  Got a project?
                  <br />
                  Let’s talk.
                </h3>
              </div>
              <div className="right_side">
                <ul>
                  <li>
                    Contact Us <AiOutlineArrowRight />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p>
            We’re a team of creatives who are excited about unique ideas and
            help fin-tech companies to create amazing identity by crafting
            top-notch UI/UX.
          </p>
        </div>
      </div>
      <div className="downside">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-3">
              <img
                id="foot-img"
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/YbUt6che-OhioLogo.svg"
                alt=""
              />
              <br />
              <p>
                <strong>Fb. / Ig. / Tw. / Be.</strong>
              </p>
            </div>
            <div className="col-lg-9 right_down">
              <div className="row">
                <div className="col-lg-4">
                  <span>Rotterdam</span>
                  <p>Ohio Digital Media LTD.</p>
                  <ul>
                    <li>Graaf Florisstraat 22A,</li>
                    <li>3021 CH Rotterdam</li>
                    <li>Netherlands</li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <span>Work inquiries</span>
                  <span>Interested in working with us?</span>
                  <p>hello@clbthemes.com</p>
                </div>
                <div className="col-lg-4">
                  <span>Sign up for the newsletter</span>
                  <form action="">
                    <input
                      type="text"
                      placeholder="Email address"
                      id="inp_sign"
                      required
                    />
                    <button type="submit">Sign up</button>
                    <input type="checkbox" id="scales" name="scales" required />
                    <label for="scales">
                      I’m okay with getting emails and having that activity
                      tracked to improve my experience.
                    </label>
                  </form>
                </div>
                <div className="col-lg-4">
                  <span>Barcelona</span>
                  <p>Ohio Digital LTD.</p>
                  <ul>
                    <li>365 Gran Via de Corts</li>
                    <li>Catalanes, BA 08015</li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <span>Career</span>

                  <ul>
                    <li>Looking for a job opportunity?</li>
                  </ul>
                  <p>See open positions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
