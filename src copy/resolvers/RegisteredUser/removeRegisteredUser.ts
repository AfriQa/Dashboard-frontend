import { RegisteredUserModel } from "../../models/RegisteredUser/registered_user.model"
import { IRegisteredUserDoc } from "../../models/RegisteredUser/registered_user.types"
import { getError } from "../../helpers/getError"

const removeRegisteredUser = async (_id: string): Promise<IRegisteredUserDoc> => {
    const foundRegisteredUser = await RegisteredUserModel.findOne({ _id })
    if (!foundRegisteredUser) {
        return getError(400, "Registered User could not be found")
    }

    return await RegisteredUserModel.deleteOne({ _id })
        .then(() => foundRegisteredUser)
        .catch(err => getError(500, err))
}

export default removeRegisteredUser