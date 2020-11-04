import { TwilioCrerdentials } from "../../../../constants/authSecrets"

export const sendText = (phoneNumber) => ({
    query: `mutation(phoneNumber: )`,
    variables: {
        "phoneNumber": phoneNumber,
        "username": TwilioCrerdentials.username,
        "password": TwilioCrerdentials.password,
        "serviceID": TwilioCrerdentials.serviceID,
    }
})