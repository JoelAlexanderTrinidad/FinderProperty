const database = require('../database/models');

class UserRepository {

    async findByPk(id) {
        return await database.User.findByPk(id, {
            include : ['images']
        });
    }

    async findByEmail(userEmail) {
        return await database.User.findOne({
            where: { email : userEmail}
        });
    }

    async create(User) {
        return await database.User.create(User);
    }

    async update(id, User) {
        return await database.User.update(User, {
            where: {
                id
            }
        });
    }

    async delete(id) {
        return await database.User.destroy({
            where : {
                id
            }
        });
    }
}

module.exports = new UserRepository();