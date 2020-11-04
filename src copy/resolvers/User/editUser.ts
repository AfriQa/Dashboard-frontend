import { UserModel } from "../../models/User/user.model"
import { IUserDoc, IUserEdit } from "../../models/User/user.types"
import { getError } from "../../helpers/getError"

const editUser = async (user: IUserEdit): Promise<IUserDoc> => {
    const foundUser = await UserModel.findOne({ _id: user._id })
    if (!foundUser) {
        return getError(400, "User could not be found")
    }

    return await UserModel.updateOne({ _id: user._id }, { ...user, updatedAt: new Date() })
        .then(() => ({
            _id: foundUser._id,
            firstName: user.firstName?
                user.firstName : foundUser.firstName,
            lastName: user.lastName?
                user.lastName : foundUser.lastName,
            phoneNumber: user.phoneNumber?
                user.phoneNumber : foundUser.phoneNumber,
            createdAt: foundUser.createdAt,
            updatedAt: foundUser.updatedAt
        }))
        .catch(err => getError(500, err))
}

export default editUser