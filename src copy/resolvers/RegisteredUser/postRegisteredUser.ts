import { RegisteredUserModel } from "../../models/RegisteredUser/registered_user.model"
import { IRegisteredUserInput, IRegisteredUserDoc } from "../../models/RegisteredUser/registered_user.types"

const postRegisteredUser = async (order: IRegisteredUserInput): Promise<IRegisteredUserDoc> => {
    return await RegisteredUserModel.create({ ...order })
        .then(registeredUser => registeredUser)
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

export default postRegisteredUser