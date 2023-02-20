import React, { useState } from "react";
import "../ProductReview/ProductReview.scss";
const ProductReview = () => {
  const [descript, setDescript] = useState(true);
  const [additional, setAdditional] = useState(false);
  const [review, setReview] = useState(false);
  const [li1, setLi1] = useState(true);
  const [li2, setLi2] = useState(false);
  const [li3, setLi3] = useState(false);
  return (
    <section id="infore">
      <div className="container">
        <ul>
          <li
            className={li1 ? "li1" : null}
            onClick={() => {
              setLi1(true) ||
                setLi2(false) ||
                setLi3(false) ||
                setDescript(true) ||
                setAdditional(false) ||
                setReview(false);
            }}
          >
            Description
          </li>
          <li
            className={li2 ? "li2" : null}
            onClick={() => {
              setLi1(false) ||
                setLi2(true) ||
                setLi3(false) ||
                setDescript(false) ||
                setAdditional(true) ||
                setReview(false);
            }}
          >
            Additional information
          </li>
          <li
            className={li3 ? "li3" : null}
            onClick={() => {
              setLi1(false) ||
                setLi2(false) ||
                setLi3(true) ||
                setDescript(false) ||
                setAdditional(false) ||
                setReview(true);
            }}
          >
            Reviews (0)
          </li>
        </ul>
      </div>
      {descript && (
        <div className="decription">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6">
                <h5>Online Return & Exchange Policy</h5>
                <p>
                  If you are not satisfied with your purchase, return it to us
                  for an exchange or refund, subject to the following terms.
                </p>

                <h5>Shipping & Handling</h5>
                <p>
                  For all the orders containing only Gift Cards, standard
                  shipping cost is US$25. Gift Cards are shipped separately from
                  merchandise and cannot be delivered to a P.O. Box.
                </p>

                <div className="down">
                  <div className="left">
                    <p>
                      <strong>Economy – US $20</strong>
                    </p>
                    <span>Allow 7-11 working days for delivery.</span>
                  </div>
                  <div className="right">
                    <p>
                      <strong>Standard – US $25</strong>
                    </p>
                    <span>Allow 5-8 working days for delivery.</span>
                  </div>
                </div>
                <p id="help">Need help?</p>
              </div>
              <div className="col-lg-6">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/sM7eC9xC-product_attachement2.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {additional && (
        <div className="additional">
          <div className="container">
            <div className="info">
              <p>
                <strong>Store</strong>
              </p>
              <p>Covina, San Diego</p>
            </div>
          </div>
        </div>
      )}

      {review && (
        <div className="review">
          <div className="container g-0">
            <div className="row">
              <div className="col-lg-12">
                <label htmlFor="">Review</label>
                <textarea
                  name=""
                  id="details"
                  cols="30"
                  rows="8"
                  placeholder="Your review"
                ></textarea>
                <div className="box">
                  <input type="checkbox" id="scales" name="scales" required />
                  <label id="agreesign">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>
              </div>
            </div>

            <button id="submit">Submit review</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductReview;
