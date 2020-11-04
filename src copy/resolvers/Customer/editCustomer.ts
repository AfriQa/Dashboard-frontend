import { CustomerModel } from "../../models/Customer/customer.model"
import { ICustomerDoc, ICustomerEdit } from "../../models/Customer/customer.types"

const editCustomer = async (customer: ICustomerEdit): Promise<ICustomerDoc> => {
    const foundCustomer = await CustomerModel.findOne({ _id: customer._id })
    if (!foundCustomer) {
        return {
            error: {
                type: 400,
                message: "Customer could not be found"
            }
        } as any
    }

    return await CustomerModel.updateOne({ _id: customer._id }, { ...customer, updatedAt: new Date() })
        .then(() => ({
            _id: foundCustomer._id,
            firstName: customer.firstName?
                customer.firstName : foundCustomer.firstName,
            lastName: customer.lastName?
                customer.lastName : foundCustomer.lastName,
            email: customer.email?
                customer.email : foundCustomer.email,
            phoneNumber: customer.phoneNumber?
                customer.phoneNumber : foundCustomer.phoneNumber,
            location: customer.location?
                customer.location : foundCustomer.location,
            createdAt: foundCustomer.createdAt,
            updatedAt: foundCustomer.updatedAt
        }))
        .catch(err => {
            return {
                error: {
                    type: 500,
                    message: String(err)
                }
            } as any
        })
}

export default editCustomer