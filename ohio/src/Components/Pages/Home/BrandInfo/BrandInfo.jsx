import React, { useState } from "react";
import "../BrandInfo/BrandInfo.scss";
const BrandInfo = () => {
  const [act, setAct] = useState(true);
  const [act2, setAct2] = useState(true);
  const [act3, setAct3] = useState(true);

  return (
    <section id="brand_info">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="brands">
              {act && (
                <div
                  onClick={() => {
                    setAct(act) || setAct2(act);
                  }}
                  className="cart"
                >
                  <span>Step 1.</span>
                  <h3>User experience and brand strategy preparing.</h3>
                  <p>
                    Profesionales del diseño gráfico proident, taken of my
                    entire soul, like these sweet mornings of spring which I
                    enjoy whole. Diseñador Gráfico y Digital y además como
                    greate idea.
                  </p>
                  <div className="img">
                    <img
                      src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/oh__img100.jpeg"
                      alt=""
                    />
                  </div>
                </div>
              )}
              {act2 && (
                <div
                  onClick={() => {
                    setAct(!act);
                  }}
                  className="cart2"
                >
                  <span>Step 2.</span>
                  <h3>User experience and brand strategy preparing</h3>
                  <p>
                    Profesionales del diseño gráfico proident, taken of my
                    entire soul, like these sweet mornings of spring which I
                    enjoy whole. Diseñador Gráfico y Digital y además como
                    greate idea.
                  </p>
                  <div className="img">
                    <img
                      src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/oh__img102.jpeg"
                      alt=""
                    />
                  </div>
                </div>
              )}
              {act3 && (
                <div
                  onClick={() => {
                    setAct2(!act2) || setAct(true);
                  }}
                  className="cart3"
                >
                  <span>Step 3.</span>
                  <h3>User experience and brand strategy preparing</h3>
                  <p>
                    Profesionales del diseño gráfico proident, taken of my
                    entire soul, like these sweet mornings of spring which I
                    enjoy whole. Diseñador Gráfico y Digital y además como
                    greate idea.
                  </p>
                  <div className="img">
                    <img
                      src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/oh__img103.jpeg"
                      alt=""
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandInfo;
