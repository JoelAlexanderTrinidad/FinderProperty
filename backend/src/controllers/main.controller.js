const mainService = require('../services/main.services');

class MainController {
    async findAll(req, res){
        const properties = await mainService.findAll();
        return res.status(200).json(properties);
    }
}

module.exports = new MainController();