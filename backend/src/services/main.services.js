const mainRepository = require('../repositories/main.repository');

class MainService {
    async findAll() {
        try {
            return await mainRepository.findAll();
        } catch (error) {
            throw new Error(error);
        }
    }

    async findByPk(id) {
        try {
            return await mainRepository.findByPk(id);
        } catch (error) {
            throw new Error(error);
        }
    }

    async create(property) {
        try {
            return await mainRepository.create(property);
        } catch (error) {
            throw new Error(error);
        }
    }

    async update(id, property) {
        try {
            return await mainRepository.update(id, property);
        } catch (error) {
            throw new Error(error);
        }
    }

    async delete(id) {
        try {
            return await mainRepository.delete(id);
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = new MainService();