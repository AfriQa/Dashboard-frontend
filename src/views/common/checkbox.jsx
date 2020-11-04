import React from "react"
import {
    Input,
    FormGroup,
    Label,
    FormFeedback,
  } from "reactstrap";

const CheckBox = ({ name, label, error, ...restProps }) => {
    return (
        <FormGroup check>
            <Label check>
                <Input
                    type="checkbox"
                    name={name}
                    {...restProps}
                /> {label}
            </Label>
            <FormFeedback>{error}</FormFeedback>
        </FormGroup>
    )
}

export default CheckBox