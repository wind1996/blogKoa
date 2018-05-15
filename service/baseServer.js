class baseServer {
    /**
     *
     * @param page，页码
     * @param size，每页数量
     * @param query,查询条件
     */
    filterParams({page = -1, size = 10, query = {}} = {}) {
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
        return options
    }
}

module.exports = baseServer;