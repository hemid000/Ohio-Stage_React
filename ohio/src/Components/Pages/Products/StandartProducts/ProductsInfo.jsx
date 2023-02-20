import React, { useState } from "react";
import "../StandartProducts/ProductsInfo.scss";
import { MdZoomOutMap } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
const Products = () => {
  // const [show, setShow] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [prev, setPrev] = useState(1);
  const handleplus = () => {
    setPrev(prev + 1);
  };
  const handleminus = () => {
    if (prev > 0) {
      setPrev(prev - 1);
    }
  };
  return (
    <section id="standart_pro">
      <div className="container">
        <strong>Shop :</strong> <strong>Chairs :</strong> Modern Upholstery
        Stool
        <div className="row g-5 mt-5">
          <div className="col-lg-7 col-md-6 col-sm-12">
            <div className="row g-3">
              <div className="col-lg-6 col-md-6">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/kfnQjzZB-ProductImage__018.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/vvT68sbJ-ProductImage__017.jpg"
                    alt=""
                  />
                  <div className="box">
                    <MdZoomOutMap
                      onClick={() => {
                        setZoom(true);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/nHTDq8be-ProductImage__019.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/ProductImage__020.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 rightside">
            <span id="stock">In stock</span>
            <h3>Modern Upholstery Stool</h3>
            <ul>
              <li>$89.00</li>
              <li>
                <strong>SKU:</strong> 29045-SB-2 <strong>Categories:</strong>{" "}
                Chairs, Everyday essentials <strong>Tags:</strong>
                Creative, Shop, WordPress
              </li>
              <li>
                The current product may have a{" "}
                <strong>manufacturer’s warranty.</strong> Visit the website or
                contact us for full warranty details.
              </li>

              <ul>
                <li>Free delivery available;</li>
                <li>Use promo-code and save up to 25%;</li>
              </ul>
            </ul>
            <p>Quantity:</p>

            <div className="input-group">
              <button
                type="button"
                className="input-group-text"
                onClick={handleminus}
              >
                -
              </button>
              <div className="form-control text-center">{prev}</div>
              <button
                type="button"
                className="input-group-text"
                onClick={handleplus}
              >
                +
              </button>
            </div>
            <div className="down">
              <span id="add"> Add to cart</span>
              <span id="save">Save</span>
            </div>
          </div>
        </div>
      </div>
      {zoom && (
        <div className="zoom">
          <div className="img">
            <img
              src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/vvT68sbJ-ProductImage__017.jpg"
              alt=""
            />
          </div>
          <div className="close">
            <AiOutlineClose
              onClick={() => {
                setZoom(false);
              }}
            />
          </div>
        </div>
      )}

      {/* {show && (
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
      )} */}
    </section>
  );
};

export default Products;
