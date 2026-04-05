import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const itemModel = sequelize.define('item', {
  item_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.BLOB,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'item', 
  timestamps: false,
});

export default itemModel;