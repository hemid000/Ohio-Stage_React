import React, { useState } from "react";
import "../ProductImg/ProductImg.scss";
import { MdZoomOutMap } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
const ProductImg = () => {
  const [show, setShow] = useState(false);
  return (
    <section id="Productimg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 p-0">
            <div className="img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/zdfLZADL-oh__demo31__1.jpeg"
                alt=""
              />
              <div className="textcenter">
                <h4>Stickers Pack</h4>
                <p id="identity">Identity, Mockup</p>
                <p id="show">Show Project</p>
              </div>
              <img
                id="click_play"
                src="https://media0.giphy.com/media/Xc53SBEiAp7vvZaIP1/giphy.gif?cid=6c09b952tfd5uankqpmfkqhtzl0hg8ki3vzje2vbbyi9q6ic&rid=giphy.gif&ct=s"
                alt=""
              />
              <MdZoomOutMap
                onClick={() => {
                  setShow(true);
                }}
              />
            </div>
          </div>
          <div className="col-lg-8 p-0">
            <div className="img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/oh__img25-1920x1076.jpeg"
                alt=""
              />
              <div className="textcenter">
                <h4>Stickers Pack</h4>
                <p id="identity">Identity, Mockup</p>
                <p id="show">Show Project</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 p-0">
            <div className="img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/drZ4vTCS-oh__img95-1920x1076.jpeg"
                alt=""
              />
              <div className="textcenter">
                <h4>Stickers Pack</h4>
                <p id="identity">Identity, Mockup</p>
                <p id="show">Show Project</p>
              </div>
              <img
                id="click_play"
                src="https://media0.giphy.com/media/Xc53SBEiAp7vvZaIP1/giphy.gif?cid=6c09b952tfd5uankqpmfkqhtzl0hg8ki3vzje2vbbyi9q6ic&rid=giphy.gif&ct=s"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-4 p-0">
            <div className="img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/zxDVPhmF-oh__img31.jpeg"
                alt=""
              />
              <div className="textcenter">
                <h4>Stickers Pack</h4>
                <p id="identity">Identity, Mockup</p>
                <p id="show">Show Project</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {show && (
        <div className="full_info">
          <div className="container-fluid p-0 ">
            <div className="row">
              <div className="col-lg-7 col-md-6 col-sm-12 p-0">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/zdfLZADL-oh__demo31__1.jpeg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-12 p-0 ">
                <div className="close">
                  <AiOutlineClose
                    onClick={() => {
                      setShow(false);
                    }}
                  />
                </div>
                <div className="right_side">
                  <span>Identity , Mockup June 3, 2020</span>
                  <h3>Stickers Pack</h3>
                  <p>
                    We’ve created a unique visual system and strategy across the
                    wide existing spectrum of visible mobile applications and
                    found yourself in a wide, straggling with wainscots...
                  </p>

                  <div className="down">
                    <ul>
                      <p>Strategy</p>
                      <li>Brand, UX</li>
                      <li>Strategy</li>
                    </ul>
                    <ul>
                      <p>Design</p>
                      <li>UI/UX Design,</li>
                      <li>Art Direction</li>
                    </ul>
                    <ul>
                      <p>Client</p>

                      <li>Envato</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductImg;
