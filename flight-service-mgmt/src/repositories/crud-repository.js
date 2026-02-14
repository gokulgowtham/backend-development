const { LoggerConfig } = require('../config');

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            return await this.model.create(data);
        } catch (error) {
            LoggerConfig.error('Something went wrong in the CrudRepository: create');
            throw error;
        }
    }

    async destroy(data) {
        try {
            const result = await this.model.destroy({
                where: {
                    id: data
                }
            })
            return result;
        } catch (error) {
            LoggerConfig.error('Something went wrong in the CrudRepository: destroy');
            throw error;
        }
    }

    async get(data) {
        try {
            const result = await this.model.findByPk(data);
            return result;
        } catch (error) {
            LoggerConfig.error('Something went wrong in the CrudRepository: get');
            throw error;
        }
    }

    async getAll(data) {
        try {
            const result = await this.model.findAll(data);
            return result;
        } catch (error) {
            LoggerConfig.error('Something went wrong in the CrudRepository: getAll');
            throw error;
        }
    } 

    async update(id, data){
        try {
            const result = await this.model.update(data, {
                where: {
                    id: id
                }
            })
            return result;
        } catch (error) {
            LoggerConfig.error('Something went wrong in the CrudRepository: update');
            throw error;
        }
    }
}

module.exports = CrudRepository;