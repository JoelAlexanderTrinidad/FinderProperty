const database = require('../database/models');

class ImageRepository {
    async findAll() {
        const properties = await database.Property.findAll({
            include : ['images']
        });
        const propertiesImages = properties.map(poperty => {
            return poperty.images;
        })

        return propertiesImages;
    }

    async storeImages(images) {
        const store = await database.Images.bulkCreate(images,{validate: true})
        return store;
    }
}

module.exports = new ImageRepository();