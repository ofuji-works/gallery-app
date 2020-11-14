import React from "react";
import ReactDOM from "react-dom";
import { Paper, Stepper, Step, StepLabel } from "@material-ui/core";

export function StepperComponent(props) {
  const steps = [
    "入力フォーム",
    "確認画面",
    "Finish",
  ];
  //todo reduxで実装
  // activeStep 0:未完了 1:step１完了 2:step2完了 3:step3完了
  return (
    <Paper>
      <Stepper alternativeLabel activeStep={props.step}>
        {steps.map((step) => {
          return (
            <Step key={step}>
              <StepLabel>
                {step}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Paper>
  );
}
