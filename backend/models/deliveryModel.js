import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import cart from './cartModel.js';
import user from './userModel.js';

const delivery = sequelize.define('delivery', {
  delivery_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zip: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  phone_num: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  tot_with_delivery: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Completed', 'Pending', 'Cancelled')
  },
  cart_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'delivery', 
  timestamps: false,
});

delivery.belongsTo(cart, { foreignKey: 'cart_id', onUpdate: 'CASCADE'});
delivery.belongsTo(user, { foreignKey: 'user_id', onUpdate: 'CASCADE'});

export default delivery;