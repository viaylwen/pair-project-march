function starMaker(num) {
    let result = ''
    if (num == 1) {
        result = '★☆☆☆☆'
    } else if (num == 2) {
        result = '★★☆☆☆'
    } else if (num == 3) {
        result = '★★★☆☆'
    } else if (num == 4) {
        result = '★★★★☆'
    } else if (num == 5) {
        result = '★★★★★'
    }
    return result
}

module.exports = starMaker