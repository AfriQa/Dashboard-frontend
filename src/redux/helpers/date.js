export const getDateFormat = (timestamp = new Date()) => {
    let day = String(new Date(String(timestamp)).getDate())
    if (String(new Date(String(timestamp)).getDate()).length < 2) {
        day = "0" + String(new Date(String(timestamp)).getDate())
    }
    let month = String(new Date(String(timestamp)).getMonth() + 1)
    if (String(new Date(String(timestamp)).getMonth() + 1).length < 2) {
        month = "0" + String(new Date(String(timestamp)).getMonth() + 1)
    }
    
    return String(new Date(String(timestamp)).getFullYear() + "-" + month + "-" + day)
}