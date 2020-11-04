import { RegisteredUserModel } from "../../models/RegisteredUser/registered_user.model"
import { IRegisteredUserDoc, IRegisteredUserEdit } from "../../models/RegisteredUser/registered_user.types"
import { getError } from "../../helpers/getError"

const editRegisteredUser = async (user: IRegisteredUserEdit): Promise<IRegisteredUserDoc> => {
    const foundRegisteredUser = await RegisteredUserModel.findOne({ _id: user._id })
    if (!foundRegisteredUser) {
        return getError(400, "User could not be found")
    }

    return await RegisteredUserModel.updateOne({ _id: user._id }, { ...user, updatedAt: new Date() })
        .then(() => ({
            _id: foundRegisteredUser._id,
            phoneNumber: user.phoneNumber?
                user.phoneNumber : foundRegisteredUser.phoneNumber,
            email: user.email?
                user.email : foundRegisteredUser.email,
            isVerified: user.isVerified?
                user.isVerified : foundRegisteredUser.isVerified,
            createdAt: foundRegisteredUser.createdAt,
            updatedAt: foundRegisteredUser.updatedAt
        }))
        .catch(err => getError(500, err))
}

export default editRegisteredUser