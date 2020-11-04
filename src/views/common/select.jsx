import React from "react";
import { Input, FormGroup, Label, FormFeedback } from "reactstrap";

const Select = ({ name, label, options, error, optionsFrom, ...rest }) => {
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input name={name} id={name} type="select" {...rest}>
        <option value="" />
        {optionsFrom === "client"
          ? options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))
          : options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
      </Input>
      <FormFeedback>{error}</FormFeedback>
    </FormGroup>
  );
};
export default Select;
