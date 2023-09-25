const { Sequelize, Model, DataTypes } = require('sequelize')

const CIUDAD_TABLE = 'ciudad'
const CiudadSchema = {
  ciud_id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'ciud_id',
    type: DataTypes.INTEGER,
  },
  ciud_nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}

class Ciudad extends Model {
  static associate(models) {
    this.belongsTo(models.Persona, { as: 'persona', foreignKey: 'ciud_id' })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CIUDAD_TABLE,
      modelName: 'Ciudad',
      timestamps: false,
    }
  }
}

module.exports = {
  Ciudad,
  CiudadSchema,
  CIUDAD_TABLE,
}
