import { Schema } from "mongoose"

const CustomerSchema = new Schema({
    firstName: {
        type: String, unique: false
    },
    lastName: {
        type: String, unique: false
    },
    email: {
        type: String, unique: false
    },
    phoneNumber: {
        type: String, unique: false
    },
    location: {
        type: String, unique: false
    },
    quantityPurchased: {
        type: Number, unique: false
    },
    totalAmount: {
        type: Number, unique: false
    },
    createdAt: {
        type: Date, unique: false, default: new Date()
    },
    updatedAt: {
        type: Date, unique: false, default: new Date()
    }
})

export default CustomerSchema