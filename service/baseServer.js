class baseServer {
    /**
     *
     * @param page，页码
     * @param size，每页数量
     * @param query,查询条件
     * @param attributes
     * @param group
     * @param row
     */
    filterParams({page = -1, size = 10, query = {}, attributes = [], group = '', row = ''} = {}) {
        let options = {};
        if (page > 0 && size > 0) {
            Object.assign(options, {
                limit: size,
                offset: (page - 1) * size
            })
        }
        if (Object.keys(query).length) {
            Object.assign(options, {
                where: query
            })
        }
        if (attributes.length) {
            Object.assign(options, {
                attributes: attributes
            })
        }
        if (group) {
            Object.assign(options, {
                group
            })
        }
        if (row) {
            Object.assign(options, {
                row
            })
        }
        return options
    }
}

module.exports = baseServer;