import React from "react";
import {
  Input as ReactstrapInput,
  FormGroup,
  Label,
  FormFeedback,
} from "reactstrap";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <ReactstrapInput {...rest} name={name} id={name} />
      <FormFeedback>{error}</FormFeedback>
    </FormGroup>
  );
};
export default Input;
