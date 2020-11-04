import React from "react";
import Joi from "joi-browser";
import { Button } from "reactstrap";
import Input from "./input";
import CheckBox from "./checkbox";
import Select from "./select";
// import Toast from "./toast";
// import LoadingSpinner from "../../components/PageSpinner";

class Form extends React.Component {
  state = {
    data: {},
    errors: {},
    lock: false,
  };

  //validate the entire form
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;
    //to map joi error array to our errors object
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  //validate only one input
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }; // [name](computed property) ==> username as a key or somethig, value= value of it.
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} }); //if trusy errors eles empty object
    if (errors) return;
    this.doSubmit();
  };

  // when the user types to change the value of the state accordingly
  handleChange = ({ currentTarget: input }) => {
    //to validate single input when we type
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value; //dynamically access .. property
    this.setState({ data, errors });
  };

  renderButton(label, custom = true) {
    return (
      <Button
        size="sm"
        outline
        className="pr-3 pl-3"
        color="primary"
        disabled={this.validate() || this.props.loading || !custom}
      >
        {this.props.loading ? <div></div> : label}
      </Button>
    );
  }

  renderSelect(name, label, options, optionsFrom = "client") {
    var props = {}
    if (typeof name === "object") {
      props = {
        optionsFrom: "client",
        ...name
      }
    } else {
      props.name = name
      props.label = label
      props.options = options
      props.optionsFrom = optionsFrom
    }
    const { data, errors } = this.state;
    return (
      <Select
        {...props}
        size="sm"
        name={props.name}
        value={data[props.name]}
        label={props.label}
        onChange={this.handleChange}
        error={errors[props.name]}
        placeholder={props.label}
        invalid={errors[props.name] ? true : false}
      />
    );
  }

  // renderTableSelect(name, placeholder, options, optionsFrom = "client") {
  //   const { data, errors } = this.state;
  //   return (
  //     <TableSelect
  //       name={name}
  //       value={data[name]}
  //       placeholder={placeholder}
  //       options={options}
  //       optionsFrom={optionsFrom}
  //       onChange={this.handleChange}
  //       invalid={errors[name] ? true : false}
  //       error={errors[name]}
  //     />
  //   );
  // }

  renderCheckbox(name, label) {
    var props = {}
    if (typeof name === "object") {
      props = {
        ...name
      }
    } else {
      props.name = name
      props.label = label
    }

    const { data, errors } = this.state;
    return (
      <CheckBox
        {...props}
        label={props.label}
        name={props.name}
        value={data[props.name]}
        checked={data[props.name]}
        onChange={({ currentTarget: { name, checked } }) =>
          this.handleChange({ currentTarget: { name, value: checked } })
        }
        error={errors[props.name]}
        invalid={errors[props.name] ? true : false}
      />
    );
  }

  // renderTableInput(name, placeholder, type = "text", className = "") {
  //   const { data, errors } = this.state;
  //   return (
  //     <TableInput
  //       size="sm"
  //       type={type}
  //       className={className}
  //       name={name}
  //       value={data[name]}
  //       placeholder={placeholder}
  //       onChange={this.handleChange}
  //       error={errors[name]}
  //       invalid={errors[name] ? true : false}
  //     />
  //   );
  // }

  renderInput(name, label, type = "text", className = "") {
    var props = {}
    if (typeof name === "object") {
      props = {
        ...name
      }
    } else {
      props.name = name
      props.label = label
      props.type = type
      props.className = className
    }
    const { data, errors } = this.state;

    return (
      <Input
        {...props}
        size="sm"
        type={props.type}
        className={props.className}
        name={props.name}
        value={data[props.name]}
        label={props.label}
        onChange={this.handleChange}
        error={errors[props.name]}
        placeholder={props.label}
        invalid={errors[props.name] ? true : false}
      />
    );
  }

  resetForm() {
    console.log("Intial state", this.initialState);
    this.setState(() => this.initialState);
  }

  getErrors = (errors) => {
    if (typeof errors === "string") {
      return errors;
    } else {
      for (var key in errors) {
        if (errors.hasOwnProperty(key)) {
          return errors[key][0];
        }
      }
    }
  };

  clearForm() {
    var data = {};
    for (var prop in this.state.data) {
      data[prop] = "";
    }
    this.setState({ data, lock: true });
  }

  handleToggleLineModal = () => {
    this.setState((prevState) => ({
      lineModal: !prevState.lineModal,
      selectedLine: "",
    }));
  };
  handleLineSubmit = (line, type = "lines") => {
    let count = this.state.lineCounter;
    const data = { ...this.state.data };
    if (line.id) {
      let index = data[type].findIndex((l) => l.id === line.id);
      data[type][index] = line;
    } else {
      line["id"] = count;
      count++;
      data[type].push(line);
    }
    this.setState({ data, lineCounter: count });
  };
  handleLineEdit = (line) => {
    this.setState({
      selectedLine: line,
    });
  };
  handleLineDelete = (line, type = "lines") => {
    const data = { ...this.state.data };
    let index = data[type].findIndex((l) => l.id === line.id);
    data[type].splice(index, 1);
    this.setState({ data });
  };
}

export default Form;
