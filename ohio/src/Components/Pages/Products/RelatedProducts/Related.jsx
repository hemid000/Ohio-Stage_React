import React, { useState } from "react";

import "../RelatedProducts/Related.scss";

import { MdZoomOutMap } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
const Related = () => {
  const [show, setShow] = useState(false);
  return (
    <section id="related">
      <div className="container">
        <h3>Related products</h3>

        <div className="row mt-5 g-3">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/ProductImage__026-768x768.jpg"
                alt=""
              />
              <div className="add">
                <span>Read more</span>
                <span>Save</span>
              </div>{" "}
              <MdZoomOutMap
                onClick={() => {
                  setShow(true);
                }}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/ProductImage__030-768x768.jpg"
                alt=""
              />
              <div className="add">
                <span>Read more</span>
                <span>Save</span>
              </div>{" "}
              <MdZoomOutMap
                onClick={() => {
                  setShow(true);
                }}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/ProductImage__052-768x768.jpg"
                alt=""
              />
              <div className="add">
                <span>Read more</span>
                <span>Save</span>
              </div>{" "}
              <MdZoomOutMap
                onClick={() => {
                  setShow(true);
                }}
              />
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
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/ProductImage__026-768x768.jpg"
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

export default Related;
