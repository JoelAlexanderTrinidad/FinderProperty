const propertyRepository = require('../repositories/property.repository');

class PropertyService {

    async allProperty(keywords) {
        try {
            return await propertyRepository.findAllProperty(keywords);
        } catch (error) {
            throw new Error(error);
        }
    }

    async allPropertyUser(user) {
        try {
            return await propertyRepository.findAll(user);
        } catch (error) {
            throw new Error(error);
        }
    }

    async findByPk(id) {
        try {
            return await propertyRepository.findByPk(id);
        } catch (error) {
            throw new Error(error);
        }
    }

    async create(property) {
        try {
            return await propertyRepository.create(property);
            
        } catch (error) {
            throw new Error(error);
        }
    }

    async update(id, property) {
        try {
            return await propertyRepository.update(id, property);
        } catch (error) {
            throw new Error(error);
        }
    }

    async delete(id) {
        try {
            return await propertyRepository.delete(id);
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = new PropertyService();