import { CustomerModel } from "../../models/Customer/customer.model"
import { ICustomerDoc } from "../../models/Customer/customer.types"

const fetchCustomers = async (): Promise<ICustomerDoc[]> => {
    const customers = await CustomerModel.find({})
    return customers
}

export default fetchCustomers