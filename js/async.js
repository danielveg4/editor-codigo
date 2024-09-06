const delay = (timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, timeout)
    })
}

module.exports = {delay}