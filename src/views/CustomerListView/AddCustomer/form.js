import React from "react"
import Joi from "joi-browser"
export const initialState = {
    data: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        location: "",
        quantity_purchased: "",
        amount: ""
    },
    formDone: false,
    errors: {},
    schema: {
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().required().label("Email"),
        phoneNumber: Joi.string().required().label("Phone Number"),
        location: Joi.string().required().label("Location"),
        quantity_purchased: Joi.number().required().label("Quantity Purchased"),
        amount: Joi.number().required().label("Total Amount"),
    }
}

export const events = {
    "UPDATE_FORM": "UPDATE_FORM",
    "CHECK_FORM": "CHECK_FORM"
}

export const handleChange = ({ type, target, state, setState, format }) => {
    switch(type) {
        case events.UPDATE_FORM: {
            const { name, value } = target
            return validate({
                ...state,
                data: {
                    ...state.data,
                    [name]: format(value)
                }
            }, setState)
            break
        }
    }
}

export const validate = (state, setState) => {
    const options = { abortEarly: false }
    console.log(state.data)
    const { error } = Joi.validate(state.data, state.schema, options);

    if (!error) return null;
    //to map joi error array to our errors object
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    setState({ data: state.data, formDone: !Boolean(error), errors })
    return {
        formDone: !Boolean(error), errors
    }
}

export const handleSubmit = (state, setState, submit) => {
    const { formDone, errors } = validate(state, setState)
    if (formDone) {
        submit(state.data)
    } else {
        console.log(errors)
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case events.UPDATE_FORM: {
            const { name, value, title: Format } = action.payload
            if (String(value).length > 0) {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        [name]: Format(value)
                    },
                    errors: {
                        ...state.errors,
                        [name]: null
                    }
                }   
            } else {
                return {
                    ...state, errors: {
                        ...state.errors,
                        [name]: `${name} should not be empty`
                    }
                }
            }
        }

        case events.CHECK_FORM: {
            const { formDone, errors } = action.payload
            return {
                ...state, formDone, errors
            }
        }

        default: return state
    }
}

export default reducer