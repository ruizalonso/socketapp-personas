const config = require('../config/config')

const USER = encodeURIComponent(config.db.user)
const PASSWORD = encodeURIComponent(config.db.password)
const URI = `mysql://${USER}:${PASSWORD}@${config.db.host}:${config.db.port}/${config.db.database}`

module.exports = {
  development: {
    url: URI,
    dialect: 'mysql',
  },
  production: {
    url: URI,
    dialect: 'mysql',
  },
}
