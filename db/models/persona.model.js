const { Sequelize, Model, DataTypes } = require('sequelize')
const { CIUDAD_TABLE } = require('./ciudad.model')

const PERSONA_TABLE = 'persona'
const PersonaSchema = {
  dir_tel: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  dir_tipo_tel: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  dir_nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  dir_direccion: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  dir_ciud_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'dir_ciud_id',
    references: {
      model: CIUDAD_TABLE,
      key: 'ciud_id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
}

class Persona extends Model {
  static associate(models) {
    this.belongsTo(models.Ciudad, { as: 'ciudad', foreignKey: 'dir_ciud_id' })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PERSONA_TABLE,
      modelName: 'Persona',
      timestamps: false,
    }
  }
}

module.exports = {
  Persona,
  PersonaSchema,
  PERSONA_TABLE,
}
