const { models } = require('../libs/sequelize')

class CiudadService {
  constructor() {}

  async create(data) {
    const res = models.Rol.create(data)
    return res
  }

  async find() {
    const res = models.Rol.findAll()
    return res
  }

  async findOne(id) {
    const res = await models.Rol.findByPk(id)
    if (!res) {
    }
    return res
  }

  async update(id, changes) {
    const ciudad = await this.findOne(id)
    const res = await ciudad.update(changes)
    return res
  }

  async delete(id) {
    const ciudad = await this.findOne(id)
    await ciudad.destroy()
    return { id }
  }
}

module.exports = CiudadService
