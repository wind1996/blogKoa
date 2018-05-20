class Util {
    formatDate(time) {
        const date = new Date(time)
        return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
    }
}

module.exports = new Util()