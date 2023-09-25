'use strict'
const { PERSONA_TABLE, PersonaSchema } = require('../models/persona.model')

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(PERSONA_TABLE, PersonaSchema)
  },

  async down(queryInterface) {
    await queryInterface.dropTable(PERSONA_TABLE)
  },
}
