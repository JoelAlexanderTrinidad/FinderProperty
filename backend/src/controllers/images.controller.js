const imageService = require('../services/image.services');

class ImageController {
    async getAll(req, res){
        const imagesParams = req.params.image;
        const path = await imageService.pathImage(imagesParams);
        return res.sendFile(path);
    }
}

module.exports = new ImageController();