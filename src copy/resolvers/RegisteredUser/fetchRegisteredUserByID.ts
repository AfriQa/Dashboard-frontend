import { RegisteredUserModel } from "../../models/RegisteredUser/registered_user.model"
import { IRegisteredUserDoc } from "../../models/RegisteredUser/registered_user.types"
import { getError } from "../../helpers/getError"

const fetchRegisteredUser = async (_id: string): Promise<IRegisteredUserDoc> => {
    const foundRegisteredUser = await RegisteredUserModel.findOne({ _id })
    if (!foundRegisteredUser) {
        return getError(400, "User could not be found")
    }
    return foundRegisteredUser
}

export default fetchRegisteredUser