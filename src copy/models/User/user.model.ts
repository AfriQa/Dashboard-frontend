import { model } from "mongoose"
import { IUserDocument } from "./user.types"
import UserSchema from "./user.schema"

export const UserModel = model<IUserDocument>("admin_users", UserSchema)

