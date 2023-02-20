import React from "react";
import "../Location/Location.scss";

const Location = () => {
  return (
    <section id="location">
      <div className="container-fluid p-0">
        <iframe
          style={{ width: "100%", height: "430px" }}
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=baku%20design%20center&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
