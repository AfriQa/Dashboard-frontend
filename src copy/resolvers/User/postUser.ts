import { UserModel } from "../../models/User/user.model"
import { IUserInput, IUserDoc } from "../../models/User/user.types"
import postShop from "../Shop/postShop"

const postUser = async (user: IUserInput, authID: string): Promise<IUserDoc> => {
    const createdShop = await postShop({
        shopName: user.shopName,
        shopCategory: user.shopCategory,
        shopOwner: authID
    })
    return await UserModel.create({ ...user, shopID: createdShop._id })
        .then(createdUser => createdUser)
        .catch(err => {
            // tslint:disable-next-line: no-console
            console.error(err)
            return {
                error: {
                    type: 500,
                    message: String(err)
                }
            } as any
        })
}

export default postUser