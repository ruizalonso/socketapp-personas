'use strict'
const { CIUDAD_TABLE, CiudadSchema } = require('../models/ciudad.model')

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CIUDAD_TABLE, CiudadSchema)
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CIUDAD_TABLE)
  },
}
