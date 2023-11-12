const path = require('path');
const imagesRepository = require('../repositories/image.repository');

class ImageService {
    async pathImage(imagesParams) {
        try {
            return path.join(__dirname, `../assets/images/${imagesParams}`);
        } catch (error) {
            throw new Error(error);
        }
    }

    async storeImages(images) {
        try {
            return await imagesRepository.storeImages(images)
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = new ImageService();