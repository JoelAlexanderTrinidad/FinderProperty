const userRepository = require('../repositories/user.repository');

class UserService {

    async findByPk(id) {
        try {
            return await userRepository.findByPk(id);
        } catch (error) {
            throw new Error(error);
            // mandar un error con una clase
        }
    }

    async findByEmail(userEmail) {
        try {
            return await userRepository.findByEmail(userEmail);
        } catch (error) {
            throw new Error(error);
        }
    }

    async create(user) {
        try {
            return await userRepository.create(user);
            
        } catch (error) {
            throw new Error(error);
        }
    }

    async update(id, user) {
        try {
            return await userRepository.update(id, user);
        } catch (error) {
            throw new Error(error);
        }
    }

    async delete(id) {
        try {
            return await userRepository.delete(id);
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = new UserService();