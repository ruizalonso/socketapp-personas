const { models } = require('../libs/sequelize')

class PersonaService {
  constructor() {}

  async create(data) {
    const res = models.Persona.create({
      ...data,
    })
    return res
  }

  async find() {
    const res = await models.Persona.findAll({
      include: ['ciudad'],
    })
    return res
  }

  async findOne(id) {
    const persona = await models.Persona.findByPk(id)
    if (!persona) {
    }
    return persona
  }

  async findByPhoneNumber(tel) {
    const persona = await models.Persona.findOne({
      where: { dir_tel: tel },
      include: ['ciudad'],
    })
    if (!persona) {
      return 'Persona dueña de ese número telefónico no existe'
    }
    return persona
  }

  async update(id, changes) {
    const persona = await this.findOne(id)
    const res = await persona.update({
      ...changes,
    })
    return res
  }

  async delete(id) {
    const persona = await this.findOne(id)
    await persona.destroy()
    return { id }
  }
}

module.exports = PersonaService
