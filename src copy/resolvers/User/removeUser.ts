import { UserModel } from "../../models/User/user.model"
import { IUserDoc } from "../../models/User/user.types"
import { getError } from "../../helpers/getError"

const removeUser = async (_id: string): Promise<IUserDoc> => {
    const foundUser = await UserModel.findOne({ _id })
    if (!foundUser) {
        return getError(400, "User could not be found")
    }

    return await UserModel.deleteOne({ _id })
        .then(() => foundUser)
        .catch(err => getError(500, err))
}

export default removeUser