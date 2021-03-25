'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MenuOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MenuOrder.belongsTo(
        models.Menu, 
        { foreignKey: 'MenuId' }
      )
      MenuOrder.belongsTo(
          models.Customer, 
          { foreignKey: 'CustomerId' }
      )
    }
  };
  MenuOrder.init({
    MenuId: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MenuOrder',
  });
  return MenuOrder;
};