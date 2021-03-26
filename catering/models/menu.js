'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Menu.belongsToMany(models.Customer, {
        through: models.MenuOrder,
        foreignKey: 'MenuId'
      })
    }
    dayMenu() {
      return `${this.day} -- ${this.name}`
    }
  };

  Menu.init({
    category: DataTypes.STRING,
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "name cannot be empty"
        }
      }
    },
    day: DataTypes.STRING,
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        max: 5
      }
    }
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};