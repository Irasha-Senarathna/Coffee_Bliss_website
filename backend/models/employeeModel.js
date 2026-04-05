import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const employee = sequelize.define('employee', {
  emp_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  emp_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'employee', 
  timestamps: false,
});

export default employee;