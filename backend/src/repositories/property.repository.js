const database = require('../database/models');
const {Op} = require('sequelize');

class PropertyRepository {

    async findAllProperty(keywords) {
        return await database.Property.findAll({
            where : {
				[Op.or] : [
					{
						name : {
							[Op.substring] : keywords
						}
					},
					{
						description : {
							[Op.substring] : keywords
						}
					}
				]
			},
            include : ['images']
        });
    }

    async findAll(user) {
        return await database.Property.findAll({
            where: {
                userId: user
            },
            include : ['images']
        });
    }

    async findByPk(id) {
        return await database.Property.findByPk(id, {
            include : ['images']
        });
    }

    async create(property) {
        return await database.Property.create(property);
    }

    async update(id, property) {
        return await database.Property.update(property, {
            where: {
                id: id
            }
        });
    }

    async delete(id) {
        return database.sequelize.transaction(async (t) => {
            await database.Images.destroy({
              where: {
                propertyId: id
              },
              transaction: t
            });
        
            await database.Property.destroy({
              where: {
                id: id
              },
              transaction: t
            });
          });
    }
}

module.exports = new PropertyRepository();