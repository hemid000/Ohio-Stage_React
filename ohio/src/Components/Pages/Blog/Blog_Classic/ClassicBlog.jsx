import React from "react";
import "../Blog_Classic/ClassicBlog.scss";
import { AppMock } from "../../../Mock/AppMock";
const ClassicBlog = () => {
  return (
    <section id="classic_blog">
      <div className="container text-center">
        <h2>Classic</h2>

        <ul>
          <li id="left">WPBakery</li>
          <li id="right">Elementor</li>
        </ul>
      </div>
      <div className="container mt-5">
        <span>Home-Blog-Classic</span>
        <div className="all_cart">
          <div className="row g-5">
            {AppMock &&
              AppMock.map((el) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="img">
                      <img src={el.imgSrc} alt="" />
                      <div className="hover">
                        <img src={el.imgSrc2} alt="" />
                        <div className="hover_box">
                          <span>{el.hoverPosted}</span>
                          <p>{el.hoverName}</p>
                        </div>
                      </div>
                    </div>
                    <span>{el.time}</span>
                    <h3>{el.dscrb}</h3>
                    <ul>
                      <li>{el.extra}</li>
                      <li>{el.extra2}</li>
                    </ul>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassicBlog;
