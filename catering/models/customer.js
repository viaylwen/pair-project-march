'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.belongsToMany(models.Menu, {
        through: models.MenuOrder,
        foreignKey: 'CustomerId'
      })
    }
  };
  Customer.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "name cannot be empty"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "should be an email"
        }
      }
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });

  Customer.beforeCreate((customer, options) => {
    if (!customer.username) {
      customer.username = customer.email
    }
    if (!customer.password) {
      customer.password = '1234567890'
    }
  })

  return Customer;
};