const userService = require('../services/user.services');
const bcryptjs = require('bcryptjs');

class userController {

    async findByPk(req, res){
        const id = req.params.id
        const properties = await userService.findByPk(id);
        return res.status(200).json(properties);
    }

    async createUser(req, res){
        const {name, email, password} = req.body;

        try {
            const newUser = await userService.create({
                name,
                email,
                password: bcryptjs.hashSync(password, 10)
            });
    
            return res.status(200).json({
                newUser
            });
        } catch (error) {
            console.log(error);
            throw new error("Error creating a user");
        }
    }
}

module.exports = new userController();