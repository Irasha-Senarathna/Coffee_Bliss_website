import cartModel from '../models/cartModel.js';
import cart_itemModel from '../models/cart_itemModel.js';
import itemModel from '../models/itemModel.js';
import userModel from '../models/userModel.js';

// Add a new cart
const addCart = async (req, res) => {
    try {
        const cart = new cartModel({
            user_id: req.body.user_id,
            total: req.body.total,
        });
        await cart.save();
        res.json({success: true, message: 'Cart added successfully'})
    } catch (error) {
        res.json({success: false, message: 'Failed to add cart'})
    }
};

// Get carts by user id
const getCartsByUserId = async (req, res) => {
    try {
        // Fetch carts for the specified user_id
        const carts = await cartModel.findAll({
            where: { user_id: req.params.user_id }
        });

        // Check if any carts are found for the user
        if (carts.length === 0) {
            return res.json({ success: false, message: 'No carts available for the given User ID' });
        }

        // Include cart items for each cart
        const cartsWithItems = await Promise.all(carts.map(async (cart) => {
            const cart_items = await cart_itemModel.findAll({
                where: { cart_id: cart.cart_id },
                include: [{
                    model: itemModel,
                    attributes: { exclude: ['image'] },  
                }]
            });
            return { ...cart.dataValues, cart_items };  // Combine cart details with items
        }));

        // Fetch the user name
        const user = await userModel.findOne({ 
            where: { user_id: req.params.user_id },
            attributes: { exclude: ['password', 'email'] } 
        });

        res.json({ success: true, carts: cartsWithItems, user });

    } catch (error) {
        console.error('Error:', error);
        res.json({ success: false, message: 'Failed to get cart details' });
    }
};

// Get cart details by cart id
const getCartDetailsByCartId = async (req, res) => {
    try {
        const cart = await cartModel.findOne({ where: { cart_id: req.params.cart_id } });
        if (!cart) {
            return res.json({ success: false, message: 'Cart not found' });
        }

        const cart_items = await cart_itemModel.findAll({
            where: { cart_id: req.params.cart_id },
            include: [{
                model: itemModel,
                attributes: { exclude: ['image'] }  
            }]
        });

        const user = await userModel.findOne({ 
            where: { user_id: cart.user_id },
            attributes: { exclude: ['password', 'email'] } 
        });

        res.json({ success: true, cart, cart_items, user });
    } catch (error) {
        console.error('Error:', error);
        res.json({ success: false, message: 'Failed to get cart details' });
    }
};

export { addCart, getCartsByUserId, getCartDetailsByCartId };
