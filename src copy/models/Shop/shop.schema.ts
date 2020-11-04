import { Schema } from "mongoose"

const ShopSchema = new Schema({
    shopName: {
        type: String, unique: false
    },
    shopCategory: {
        type: String, unique: false
    },
    shopOwner: {
        type: String, unique: false
    },
    createdAt: {
        type: Date, unique: false, default: new Date()
    },
    updatedAt: {
        type: Date, unique: false, default: new Date()
    }
})

export default ShopSchema