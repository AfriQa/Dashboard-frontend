import { TwilioCrerdentials } from "../../../constants/authSecrets"

export const SendText = (phoneNumber) => ({
    query: `mutation($username: String!, $password: String!, $serviceID: String!, $phoneNumber: String!) {
        sendText(username: $username, password: $password, serviceID: $serviceID, phoneNumber: $phoneNumber) {
            message
            error {
                value
                message
            }
        }
    }`,
    variables: {
        username: TwilioCrerdentials.username,
        password: TwilioCrerdentials.password,
        serviceID: TwilioCrerdentials.serviceID,
        phoneNumber
    }
})

export const Verify = (phoneNumber, code) => ({
    query: `mutation($username: String!, $password: String!, $serviceID: String!, $phoneNumber: String!, $code: String!) {
        verify(username: $username, password: $password, serviceID: $serviceID, phoneNumber: $phoneNumber, code: $code) {
            message
            error {
                value
                message
            }
        }
    }`,
    variables: {
        username: TwilioCrerdentials.username,
        password: TwilioCrerdentials.password,
        serviceID: TwilioCrerdentials.serviceID,
        phoneNumber,
        code
    }
})

export const TAGS = {
    "sendText": "sendText",
    "verify": "verify"
}