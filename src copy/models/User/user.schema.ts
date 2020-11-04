import { Schema } from "mongoose"

const UserSchema = new Schema({
    firstName: {
        type: String, unique: false
    },
    lastName: {
        type: String, unique: false
    },
    phoneNumber: {
        type: String, unique: false
    },
    email: {
        type: String, unique: false
    },
    country: {
        type: String, unique: false
    },
    shopID: {
        type: String, unique: false, default: String(null)
    },
    createdAt: {
        type: Date, unique: false, default: new Date()
    },
    updatedAt: {
        type: Date, unique: false, default: new Date()
    }
})

export default UserSchema