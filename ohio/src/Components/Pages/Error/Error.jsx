import { React, Link } from "react";
import "../Error/Error.scss";
const Error = () => {
  return (
    <section id="error">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="img">
              <img
                id="lighterr"
                src="https://media.licdn.com/dms/image/C5612AQEPYce5KpNLyg/article-cover_image-shrink_720_1280/0/1551659700811?e=2147483647&v=beta&t=O9mBMiF-V12jCRJwaBNDWLKNL8cku2QSoCXtKP3vCHg"
                alt=""
              />
              <img
                id="darkerr"
                src="https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
