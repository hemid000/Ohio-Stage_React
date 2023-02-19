import React, { useState } from "react";

import "../ClassicPortfolio/Classic.scss";
const ClassicPortfolio = () => {
  const [all, setAll] = useState(true);
  const [apps, setApps] = useState(false);
  const [branding, setBranding] = useState(false);
  const [creative, setCreative] = useState(false);
  const [identity, setIdentity] = useState(false);
  const [mockup, setMockup] = useState(false);

  return (
    <section id="classicportfolio">
      <div className="container text-center">
        <h2>Classic</h2>
        <ul id="line">
          <li id="left">WPBakery</li>
          <li id="right">Elementor</li>
        </ul>
      </div>
      <div className="container text-center filtering">
        <p>Filter by</p>
        <ul>
          <li
            onClick={() => {
              setAll(true) ||
                setApps(false) ||
                setBranding(false) ||
                setCreative(false) ||
                setIdentity(false) ||
                setMockup(false);
            }}
          >
            All
          </li>{" "}
          <span>/</span>{" "}
          <li
            onClick={() => {
              setAll(false) ||
                setApps(true) ||
                setBranding(false) ||
                setCreative(false) ||
                setIdentity(false) ||
                setMockup(false);
            }}
          >
            Apps
          </li>{" "}
          <span>/</span>
          <li
            onClick={() => {
              setAll(false) ||
                setApps(false) ||
                setBranding(true) ||
                setCreative(false) ||
                setIdentity(false) ||
                setMockup(false);
            }}
          >
            Branding
          </li>{" "}
          <span>/</span>{" "}
          <li
            onClick={() => {
              setAll(false) ||
                setApps(false) ||
                setBranding(false) ||
                setCreative(true) ||
                setIdentity(false) ||
                setMockup(false);
            }}
          >
            Creative
          </li>{" "}
          <span>/</span>{" "}
          <li
            onClick={() => {
              setAll(false) ||
                setApps(false) ||
                setBranding(false) ||
                setCreative(false) ||
                setIdentity(true) ||
                setMockup(false);
            }}
          >
            Identity
          </li>{" "}
          <span>/</span>{" "}
          <li
            onClick={() => {
              setAll(false) ||
                setApps(false) ||
                setBranding(false) ||
                setCreative(false) ||
                setIdentity(false) ||
                setMockup(true);
            }}
          >
            Mockup
          </li>
        </ul>
      </div>
      {all && (
        <div className="allcarts">
          <div className="container mt-3">
            <div className="row g-3">
              <div className="col-lg-4">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/ZRJlKIPg-project__01.jpeg"
                    alt=""
                  />
                  <div className="play">
                    <img
                      id="click"
                      src="https://plantae.garden/wp-content/uploads/2022/05/play-video.gif"
                      alt=""
                    />
                  </div>
                </div>
                <h4>Stickers Pack</h4>
                <p>Identity , Mockup</p>
              </div>
              <div className="col-lg-8">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/oh__img25-1920x1076.jpeg"
                    alt=""
                  />
                </div>
                <h4>Stickers Pack</h4>
                <p>Identity , Mockup</p>
              </div>
            </div>
          </div>
          <div className="container mt-3">
            <div className="row g-3">
              <div className="col-lg-4">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/7evLAXa6-oh__img30-1.jpeg"
                    alt=""
                  />
                </div>
                <h4>Stickers Pack</h4>
                <p>Identity , Mockup</p>
              </div>
              <div className="col-lg-4">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/JwFczCN8-oh__img35.jpeg"
                    alt=""
                  />
                </div>
                <h4>Stickers Pack</h4>
                <p>Identity , Mockup</p>
              </div>
              <div className="col-lg-4">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/guQWgJXg-oh__img26.jpeg"
                    alt=""
                  />
                </div>
                <h4>Stickers Pack</h4>
                <p>Identity , Mockup</p>
              </div>
            </div>
          </div>
          <div className="container mt-3">
            <div className="row">
              <div className="col-lg-8">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/oh__img95-1920x1076.jpeg"
                    alt=""
                  />
                </div>
                <h4>Stickers Pack</h4>
                <p>Identity , Mockup</p>
              </div>
              <div className="col-lg-4">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/MeKCvxP5-oh__img34.1.jpeg"
                    alt=""
                  />
                  <div className="play">
                    <img
                      id="click"
                      src="https://plantae.garden/wp-content/uploads/2022/05/play-video.gif"
                      alt=""
                    />
                  </div>
                </div>
                <h4>Stickers Pack</h4>
                <p>Identity , Mockup</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {apps && (
        <div className="apps">
          <div className="container mt-3">
            <div className="row g-3">
              <div className="col-lg-4">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/ZRJlKIPg-project__01.jpeg"
                    alt=""
                  />
                  <div className="play">
                    <img
                      id="click"
                      src="https://plantae.garden/wp-content/uploads/2022/05/play-video.gif"
                      alt=""
                    />
                  </div>
                </div>
                <h4>Stickers Pack</h4>
                <p>Identity , Mockup</p>
              </div>
              <div className="col-lg-8">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/oh__img25-1920x1076.jpeg"
                    alt=""
                  />
                </div>
                <h4>Stickers Pack</h4>
                <p>Identity , Mockup</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {branding && (
        <div className="branding">
          <div className="container mt-3">
            <div className="row">
              <div className="col-lg-8">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/oh__img95-1920x1076.jpeg"
                    alt=""
                  />
                </div>
                <h4>Stickers Pack</h4>
                <p>Identity , Mockup</p>
              </div>
              <div className="col-lg-4">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/MeKCvxP5-oh__img34.1.jpeg"
                    alt=""
                  />
                  <div className="play">
                    <img
                      id="click"
                      src="https://plantae.garden/wp-content/uploads/2022/05/play-video.gif"
                      alt=""
                    />
                  </div>
                </div>
                <h4>Stickers Pack</h4>
                <p>Identity , Mockup</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {creative && (
        <div className="creative">
          <div className="container mt-3">
            <div className="row g-3">
              <div className="col-lg-4">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/7evLAXa6-oh__img30-1.jpeg"
                    alt=""
                  />
                </div>
                <h4>Stickers Pack</h4>
                <p>Identity , Mockup</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {identity && (
        <div className="identity">
          <div className="container mt-3">
            <div className="row g-3">
              <div className="col-lg-4">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/ZRJlKIPg-project__01.jpeg"
                    alt=""
                  />
                  <div className="play">
                    <img
                      id="click"
                      src="https://plantae.garden/wp-content/uploads/2022/05/play-video.gif"
                      alt=""
                    />
                  </div>
                </div>
                <h4>Stickers Pack</h4>
                <p>Identity , Mockup</p>
              </div>
              <div className="col-lg-8">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/oh__img25-1920x1076.jpeg"
                    alt=""
                  />
                </div>
                <h4>Stickers Pack</h4>
                <p>Identity , Mockup</p>
              </div>
            </div>
          </div>
          <div className="container mt-3">
            <div className="row g-3">
              <div className="col-lg-4">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/7evLAXa6-oh__img30-1.jpeg"
                    alt=""
                  />
                </div>
                <h4>Stickers Pack</h4>
                <p>Identity , Mockup</p>
              </div>
              <div className="col-lg-4">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/JwFczCN8-oh__img35.jpeg"
                    alt=""
                  />
                </div>
                <h4>Stickers Pack</h4>
                <p>Identity , Mockup</p>
              </div>
              <div className="col-lg-4">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/guQWgJXg-oh__img26.jpeg"
                    alt=""
                  />
                </div>
                <h4>Stickers Pack</h4>
                <p>Identity , Mockup</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {mockup && (
        <div className="mockup">
          <div className="container mt-3">
            <div className="row g-3">
              <div className="col-lg-4">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/7evLAXa6-oh__img30-1.jpeg"
                    alt=""
                  />
                </div>
                <h4>Stickers Pack</h4>
                <p>Identity , Mockup</p>
              </div>
              <div className="col-lg-4">
                <div className="img">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/JwFczCN8-oh__img35.jpeg"
                    alt=""
                  />
                </div>
                <h4>Stickers Pack</h4>
                <p>Identity , Mockup</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ClassicPortfolio;
