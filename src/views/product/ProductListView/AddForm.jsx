import React from 'react'
import ParentForm from "../../common/form"
import Joi from "joi-browser"
import { Form } from "reactstrap"
import { DropzoneArea } from 'material-ui-dropzone';

class AddForm extends ParentForm {
    constructor(props) {
        super()
        this.initialState = {
            data: {
                productName: "",
                stock: "",
                description: "",
                item_tags: "",
                item_price: "",
                discounted_price: "",
                unit_weight: "",
                category: "",
            },
            errors: {}
        }
        this.schema = {
            productName: Joi.string().required().label("Product Name"),
            stock: Joi.number().required().label("Stock"),
            description: Joi.string().required().label("Description"),
            item_price: Joi.string().required().label("Item Price"),
            item_tags: Joi.string().required().label("Item Tags"),
            discounted_price: Joi.number().required().label("Discounted Price"),
            category: Joi.string().required().label("Category"),
            unit_weight: Joi.number().required().label("Unit Weight"),
        }
        this.state = this.initialState
    }

    doSubmit() {
        console.log("Submitted")
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                {this.renderInput("productName", "Product Name")}
                {this.renderInput("stock", "Amount in stock", "number")}
                {this.renderInput("description", "Product Description", "textarea")}
                {this.renderInput("item_tags", "Item Tags")}
                {this.renderInput("item_price", "Item Price", "number")}
                {this.renderInput("discounted_price", "Discounted Price", "number")}
                {this.renderInput("unit_weight", "Unit Weight", "number")}
                {this.renderSelect({
                    name: "category",
                    label: "Category",
                    options: this.props.categories.map(item => ({ id: item._id, name: item.name })),
                    optionsFrom: "server"
                })}
                {this.renderButton("Add Product")}
            </Form>
        )
    }
}

export default AddForm