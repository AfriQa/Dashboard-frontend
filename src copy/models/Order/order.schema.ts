import { Schema } from "mongoose"

const OrderSchema = new Schema({
    customer: {
        type: String, unique: false
    },
    amount: {
        type: Number, unique: false
    },
    items: [{
        type: String, unique: false
    }],
    status: {
        type: String, unique: false, default: "Created"
    },
    createdAt: {
        type: Date, unique: false, default: new Date()
    },
    updatedAt: {
        type: Date, unique: false, default: new Date()
    }
})

export default OrderSchema