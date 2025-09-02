import React, { useState } from "react";

import SplineRobot from "./spline-robot";
import ContactForm from "./ui/ContactForm";

const ContactUs = () => {
  return (
    <div className="flex-col sm:flex md:flex lg:flex-row gap-5">
      <ContactForm />
      <SplineRobot />
    </div>
  );
};

export default ContactUs;
