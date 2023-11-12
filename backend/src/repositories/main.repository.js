const database = require('../database/models');

class MainRepository {
    async findAll() {
        return await database.Property.findAll({
            include : ['images'],
            limit: 12
        });
    }

    async findByPk(id) {
        return await database.Property.findByPk(id);
    }

    async create(property) {
        return await database.Property.create(property);
    }

    async update(id, property) {
        return await database.Property.update(property, {
            where: {
                id
            }
        });
    }

    async delete(id) {
        return await database.Products.destroy({
            where : {
                id
            }
        });
    }
}

module.exports = new MainRepository();