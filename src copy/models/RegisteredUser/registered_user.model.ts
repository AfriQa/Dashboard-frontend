import { model } from "mongoose"
import { IRegisteredUserDocument } from "./registered_user.types"
import RegisteredSchema from "./registered_user.schema"

export const RegisteredUserModel = model<IRegisteredUserDocument>("admin_registered_users_v1", RegisteredSchema)

