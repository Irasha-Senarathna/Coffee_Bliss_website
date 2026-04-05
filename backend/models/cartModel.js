import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import user from './userModel.js';

const cart = sequelize.define('cart', {
  cart_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'cart', 
  timestamps: false,
});

cart.belongsTo(user, { foreignKey: 'user_id', onUpdate: 'CASCADE'});

export default cart;