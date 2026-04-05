import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import itemModel from './itemModel.js';
import cartModel from './cartModel.js';

const cart_item = sequelize.define('cart_item', {
  cart_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true, // Part of composite primary key
    references: {
      model: cartModel,
      key: 'cart_id',
    },
    onUpdate: 'CASCADE',
  },
  item_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true, // Part of composite primary key
    references: {
      model: itemModel,
      key: 'item_id',
    },
    onUpdate: 'CASCADE',
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sub_total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  tableName: 'cart_item',
  timestamps: false,
  indexes: [
    {
      unique: true,
      fields: ['cart_id', 'item_id'],
    },
  ],
});

cart_item.belongsTo(cartModel, { foreignKey: 'cart_id', onUpdate: 'CASCADE' });
cart_item.belongsTo(itemModel, { foreignKey: 'item_id', onUpdate: 'CASCADE' });

export default cart_item;


// import { DataTypes } from 'sequelize';
// import sequelize from '../config/db.js';
// import cart from './cartModel.js';
// import item from './itemModel.js';

// const cart_item = sequelize.define('cart_item', {
//   quantity: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   sub_total: {
//     type: DataTypes.DECIMAL(10, 2),
//     allowNull: false,
//   },
//   cart_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   item_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
// }, {
//   tableName: 'cart_item', 
//   timestamps: false,
// });

// cart_item.belongsTo(cart, { foreignKey: 'cart_id', onUpdate: 'CASCADE'});
// cart_item.belongsTo(item, { foreignKey: 'item_id', onUpdate: 'CASCADE'});

// export default cart_item;
