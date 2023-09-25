const { Sequelize } = require('sequelize')

const config = require('../config/config')
const models = require('./../db/models')

const USER = encodeURIComponent(config.db.user)
const PASSWORD = encodeURIComponent(config.db.password)
const URI = `mysql://${USER}:${PASSWORD}@${config.db.host}:${config.db.port}/${config.db.database}`

const sequelize = new Sequelize(URI, { dialect: 'mysql', logging: true })
models.setupModels(sequelize)
module.exports = sequelize
