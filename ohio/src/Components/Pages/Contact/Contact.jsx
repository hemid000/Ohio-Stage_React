import React from "react";
import Agency from "./AgencyContact/Agency";
import Touch from "./GetTouch/Touch";
import Review from "./Reviews/Review";
import Location from "./Location/Location";
const Contact = () => {
  return (
    <main>
      <Agency />
      <Touch />
      <Review />
      <Location />
    </main>
  );
};

export default Contact;
