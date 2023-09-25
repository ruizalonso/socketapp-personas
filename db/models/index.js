const { Persona, PersonaSchema } = require('./persona.model')
const { Ciudad, CiudadSchema } = require('./ciudad.model')
const setupModels = (sequelize) => {
  Persona.init(PersonaSchema, Persona.config(sequelize))
  Ciudad.init(CiudadSchema, Ciudad.config(sequelize))

  Persona.associate(sequelize.models)
}

module.exports = { setupModels }
