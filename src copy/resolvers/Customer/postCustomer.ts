import { CustomerModel } from "../../models/Customer/customer.model"
import { ICustomer, ICustomerDoc } from "../../models/Customer/customer.types"

const postCustomer = async (customer: ICustomer): Promise<ICustomerDoc> => {
    return await CustomerModel.create({ ...customer })
        .then(createdCustomer => createdCustomer)
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

export default postCustomer