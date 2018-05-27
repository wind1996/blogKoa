class Util {
    getType(value) {
        return /(\b\w+)]/.exec(Object.prototype.toString.apply(value))[1].toLowerCase()
    }

    /**
     *
     * @param time
     * @returns {string}
     */
    formatDate(time) {
        const date = new Date(time);
        return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
    }

    /**
     * 深度复制对象，属性值虚为基本数据类型、数组（合并去重）、对象之一，其他的不会被复制,要作为对象方法使用
     * @param origon
     * @param rest
     */
    deepAssign(origon, ...rest) {
        const assign = (function (origin, other) {
            const keys = Object.keys(other);
            for (let key of keys) {
                const type = this.getType(other[key]);
                if (!["number", "string", "object", "boolean", "null", "undefined", "array"].find(x => x === type)) {
                    continue;
                }
                if (type === "object") {
                    origin[key] = {};
                    assign(origin[key], other[key]);
                } else if (type === "array") {
                    origin[key] = [...new Set([...origin[key], ...other[key]])];
                } else {
                    if (other[key])
                        origin[key] = other[key];
                }
            }
        }).bind(this);
        for (let base of rest) {
            assign(origon, base);
        }
    }
}

module.exports = new Util();