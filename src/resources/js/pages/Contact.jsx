const { FormOrganisms } = require("../components/organisms/FormOrganisms");

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { StepperComponent } from "../components/molecules/StepperComponent";
import { FormOrganisms } from "../components/organisms/FormOrganisms";

export function Contact() {
  const [step, setStep] = useState(0);
  return (
    <>
      <div id="contact__stepper">
        <StepperComponent step={step} />
      </div>
      <div id="contact__form">
        <FormOrganisms setStep={setStep} />
      </div>
    </>
  );
}

if (document.getElementById("contact")) {
  ReactDOM.render(<Contact />, document.getElementById("contact"));
}
