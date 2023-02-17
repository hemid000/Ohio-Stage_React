import React from "react";
import "../Reviews/Review.scss";
const Review = () => {
  return (
    <section id="review">
      <div className="container before_line">
        <div className="row g-3">
          <div className="col-lg-4">
            <label htmlFor="">Name (required)</label>
            <input type="text" id="text" placeholder="Your name" />
          </div>
          <div className="col-lg-4">
            <label htmlFor="">Company (required)</label>
            <input type="text" id="text" placeholder="Your company name" />
          </div>
          <div className="col-lg-4">
            <label htmlFor="">Email (required)</label>
            <input type="text" id="text" placeholder="Your email" />
          </div>
          <div className="col-lg-4">
            <label htmlFor="">Phone (optional)</label>
            <input type="text" id="text" placeholder="Your number" />
          </div>
          <div className="col-lg-4">
            <label htmlFor="">Subject (optional)</label>
            <input type="text" id="text" placeholder="Choose a subject" />
          </div>
          <div className="col-lg-4">
            <label htmlFor="">Choose a Budget (USD)</label>
            <select name="select">
              <option value="valor1">Less than 5K</option>
              <option value="valor2" selected>
                5K - 10K
              </option>
              <option value="valor3">Over 10K</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container g-0">
        <div className="row">
          <div className="col-lg-12">
            <label htmlFor="">Project details</label>
            <textarea
              name=""
              id="details"
              cols="30"
              rows="8"
              placeholder="Brief project details"
            ></textarea>
            <div className="box">
              <input type="checkbox" id="scales" name="scales" required />
              <label id="agreesign">
                I’m okay with getting emails and having that activity tracked to
                improve my experience.
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
