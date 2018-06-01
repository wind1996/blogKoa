const model = require("../middleware/model");
const jwt = require("jsonwebtoken");

class administratorAccountService {
    async getOneLogInfByToken(token) {
        try {
            return await model.logIn.findOne({where: {token}});
        } catch (e) {
            return []
        }
    }

    async getAdminList() {
        try {
            return await model.administrator.findAll({
                attributes: {exclude: ['password']}
            })
        } catch (e) {
            return []
        }
    }

    async getAdminById(id) {
        try {
            return await model.administrator.findOne({
                where: {id},
                attributes: {exclude: ['password']}
            })
        } catch (e) {
            return false
        }
    }

    async updateAdminById(params, id) {
        try {
            return await model.administrator.update(params, {
                where: {id}
            })
        } catch (e) {
            return false;
        }
    }

    async deleteAdminById(id) {
        try {
            return await model.administrator.destroy({
                where: {id}
            })
        } catch (e) {
            return false;
        }
    }

    async createAdmin(obj) {
        try {
            return await  model.administrator.create(obj)
        } catch (e) {
            return false;
        }

    }

    async createUserLogIn(administrator_id, ip) {
        try {
            return await model.logIn.create({
                administrator_id: administrator_id,
                token: jwt.sign({administrator_id, ip}, 'secret', {expiresIn: 60 * 60}),
                ip
            })
        } catch (e) {
            return false
        }

    }

    async checkPassword(id, password) {
        try {
            return await model.administrator.findOne({
                where: {id, password},
                attributes: ["id", "name", "avatar"]
            });
        } catch (e) {
            return null
        }
    }
}

module.exports = new administratorAccountService();