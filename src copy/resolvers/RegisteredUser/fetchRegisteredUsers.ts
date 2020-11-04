import { RegisteredUserModel } from "../../models/RegisteredUser/registered_user.model"
import { IRegisteredUserDoc } from "../../models/RegisteredUser/registered_user.types"

const fetchRegisteredUsers = async (): Promise<IRegisteredUserDoc[]> => {
    const registeredUsers = await RegisteredUserModel.find({})
    return registeredUsers
}

export default fetchRegisteredUsers