import { connect } from "react-redux";
import { nextStep, returnStep } from "../actions/FormAction";
import FormOrganisms from "../components/organisms/FormOrganisms";

const mapDispatchToProps = (dispatch) => {
  return {
    nextStep() {
      dispatch(nextStep());
    },
    returnStep() {
      dispatch(returnStep());
    },
  };
};

export const FormContainer = connect(mapDispatchToProps)(FormOrganisms);
