import { CustomerModel } from "../../models/Customer/customer.model"
import { ICustomerDoc } from "../../models/Customer/customer.types"
import { getError } from "../../helpers/getError"

const removeCustomer = async (_id: string): Promise<ICustomerDoc> => {
    const foundCustomer = await CustomerModel.findOne({ _id })
    if (!foundCustomer) {
        return getError(400, "Customer could not be found")
    }

    return await CustomerModel.deleteOne({ _id })
        .then(() => foundCustomer)
        .catch(err => getError(500, err))
}

export default removeCustomer