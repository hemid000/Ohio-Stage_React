import React, { useState } from "react";
import "../Capabilities/Capabilities.scss";
import { AiOutlinePlus } from "react-icons/ai";
const Capabilities = () => {
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  return (
    <section id="capabilities">
      <div className="container mb-3">
        <div className="row">
          <div className="col-lg-4">
            <span id="cap">CAPABILITIES</span>
            <h3>Creative studio with art and technologies.</h3>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 p-0 img_bac"></div>

          <div className="col-lg-5 p-0 ">
            <div className="right_side">
              <img
                src="https://media0.giphy.com/media/Xc53SBEiAp7vvZaIP1/giphy.gif?cid=6c09b952tfd5uankqpmfkqhtzl0hg8ki3vzje2vbbyi9q6ic&rid=giphy.gif&ct=s"
                alt=""
              />
              <h3>We work in the fields of UI/UX design and art direction.</h3>
              <p
                onClick={() => {
                  setShow(!show) || setShow2(false) || setShow3(false);
                }}
              >
                <AiOutlinePlus /> Website & Mobile App Design
              </p>

              {show && (
                <span>
                  Using year-over-year design approaches and latest techs, we
                  will ensure that your new website will be visible, accessible,
                  and treads lightly.
                </span>
              )}
              <p
                onClick={() => {
                  setShow2(!show2) || setShow(false) || setShow3(false);
                }}
              >
                <AiOutlinePlus /> Website & Mobile App Design
              </p>
              {show2 && (
                <span>
                  Using year-over-year design approaches and latest techs, we
                  will ensure that your new website will be visible, accessible,
                  and treads lightly.
                </span>
              )}
              <p
                onClick={() => {
                  setShow3(!show3) || setShow2(false) || setShow(false);
                }}
              >
                <AiOutlinePlus /> Website & Mobile App Design
              </p>
              {show3 && (
                <span>
                  Using year-over-year design approaches and latest techs, we
                  will ensure that your new website will be visible, accessible,
                  and treads lightly.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container up_img">
        <div className="row">
          <div className="col-lg-2">
            <img
              src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/LogoSC-min.png"
              alt=""
            />
          </div>
          <div className="col-lg-2">
            <img
              src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/LogoSC-2-min.png"
              alt=""
            />
          </div>
          <div className="col-lg-2">
            <img
              src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/LogoSC-4-min.png"
              alt=""
            />
          </div>
          <div className="col-lg-2">
            <img
              src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/LogoSC-6-min.png"
              alt=""
            />
          </div>
          <div className="col-lg-2">
            <img
              src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/LogoSC-8-min.png"
              alt=""
            />
          </div>
          <div className="col-lg-2">
            <img
              src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/LogoSC-10-min.png"
              alt=""
            />
          </div>
          <div className="col-lg-2">
            <img
              src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/LogoSC-1-min.png"
              alt=""
            />
          </div>
          <div className="col-lg-2">
            <img
              src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/LogoSC-3-min.png"
              alt=""
            />
          </div>
          <div className="col-lg-2">
            <img
              src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/LogoSC-5-min.png"
              alt=""
            />
          </div>
          <div className="col-lg-2">
            <img
              src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/LogoSC-7-min.png"
              alt=""
            />
          </div>
          <div className="col-lg-2">
            <img
              src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/LogoSC-9-min.png"
              alt=""
            />
          </div>
          <div className="col-lg-2">
            <img
              src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/LogoSC-11-min.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
