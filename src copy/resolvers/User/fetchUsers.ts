import { UserModel } from "../../models/User/user.model"
import { IUserDoc } from "../../models/User/user.types"

const fetchUsers = async (): Promise<IUserDoc[]> => {
    const users = await UserModel.find({})
    return users
}

export default fetchUsers