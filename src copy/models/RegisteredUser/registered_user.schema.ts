import { Schema } from "mongoose"

const RegisteredUserSchema = new Schema({
    phoneNumber: {
        type: String, unique: false, default: String(null)
    },
    email: {
        type: String, unique: false, default: String(null)
    },
    isVerified: {
        type: Boolean, unique: false, default: false
    },
    createdAt: {
        type: Date, unique: false, default: new Date()
    },
    updatedAt: {
        type: Date, unique: false, default: new Date()
    }
})

export default RegisteredUserSchema