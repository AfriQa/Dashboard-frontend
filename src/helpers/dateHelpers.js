import moment from 'moment'

export const getDateFormat = (dateNumber) => {
    return moment(dateNumber).format('DD/MM/YYYY')
}

export const parseString = (items) => {
    var totalString = ""
    items.forEach(item => totalString += item.name + ", ")
    return totalString.slice(0, totalString.length - 2)
}

export const parsePrice = (items, amount) => {
    var totalPrice = 0
    items.forEach(item => totalPrice += item.price)
    return totalPrice * amount
}

export const getHours = (before, after) => {
    const beforeTime = new Date(Number(before))
    const afterTime = new Date(Number(after))

    return afterTime.getHours() - beforeTime.getHours()
}