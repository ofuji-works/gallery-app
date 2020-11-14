initialStep = {
  step: 0,
};

export function formStepper(step = initialStep, action) {
  switch (action.type) {
    case "NEXT_STEP":
      return step++;

    case "RETURN_STEP":
      return step--;

    default:
      return step;
  }
}
