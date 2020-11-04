import { Schema } from "mongoose"

const CategorySchema = new Schema({
    name: {
        type: String, unique: false
    },
    createdAt: {
        type: Date, unique: false, default: new Date()
    },
    updatedAt: {
        type: Date, unique: false, default: new Date()
    }
})

export default CategorySchema