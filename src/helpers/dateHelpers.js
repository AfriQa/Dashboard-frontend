import moment from 'moment'

export const getDateFormat = (dateNumber) => {
    return moment(dateNumber).format('DD/MM/YYYY')
}