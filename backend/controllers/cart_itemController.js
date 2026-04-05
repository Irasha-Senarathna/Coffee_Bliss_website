import cart_itemModel from '../models/cart_itemModel.js';
import cartModel from '../models/cartModel.js';
import itemModel from '../models/itemModel.js';

// Add a new cart_item
const addCartItem = async (req, res) => {
    try {
        // Calculate the sub_total of the cart item
        const item = await itemModel.findOne({ where: { item_id: req.body.item_id } });
        const price = item.price;
        const sub_total = req.body.quantity * price;

        if (await cart_itemModel.findOne({ where: { cart_id: req.body.cart_id, item_id: req.body.item_id } })) {
            const cart_item = await cart_itemModel.findOne({ where: { cart_id: req.body.cart_id, item_id: req.body.item_id } });
            cart_item.quantity += req.body.quantity;
            cart_item.sub_total = cart_item.quantity * price;
            await cart_item.save();
        } else {
            const cart_item = new cart_itemModel({
                cart_id: req.body.cart_id,
                item_id: req.body.item_id,
                quantity: req.body.quantity,
                sub_total: sub_total,
            });
            await cart_item.save();
        }       

        // Update the total of the cart
        const cart_item = await cart_itemModel.findOne({ where: { cart_id: req.body.cart_id, item_id: req.body.item_id } });
        const cart = await cartModel.findOne({ where: { cart_id: req.body.cart_id } });
        if (cart) {
            cart.total = parseFloat(cart.total) + parseFloat(cart_item.sub_total);
            await cart.save();
        }

        res.json({success: true, message: 'Cart item added successfully'})
    } catch (error) {
        console.log('Error:', error);
        res.json({success: false, message: 'Failed to add cart item'})
    }
};

// Remove one item of a cart_item of a cart
// const removeOneCartItem = async (req, res) => {
//     const { cart_id, item_id } = req.params;
//     try {
//         const cart_item = await cart_itemModel.findOne({ where: { cart_id, item_id } });
//         if (cart_item) {
//             const sub_total = cart_item.sub_total / cart_item.quantity;
//             if (cart_item.quantity > 1) {
//                 cart_item.quantity -= 1;
//                 cart_item.sub_total -= sub_total;
//                 await cart_item.save();
//                 res.json({ success: true, message: 'Cart item quantity decreased by 1' });
//             } else {
//                 await cart_item.destroy();
//                 res.json({ success: true, message: 'Cart item removed' });
//             }

//             // Update the total of the cart
//             const cart = await cartModel.findOne({ where: { id: req.body.cart_id } });
//             if (cart) {
//                 cart.total -= sub_total;
//                 await cart.save();
//             }
//         } else {
//             res.json({ success: false, message: 'Cart item not found' });
//         }
//     } catch (error) {
//         res.json({ success: false, message: 'Failed to decrease cart item quantity' });
//     }
// }
const removeOneCartItem = async (req, res) => {
    const { cart_id, item_id } = req.params;
    try {
        const cart_item = await cart_itemModel.findOne({ where: { cart_id, item_id } });
        if (cart_item) {
            const sub_total = cart_item.sub_total / cart_item.quantity;
            if (cart_item.quantity > 1) {
                cart_item.quantity -= 1;
                cart_item.sub_total -= sub_total;
                await cart_item.save();

                // Update the total of the cart
                const cart = await cartModel.findOne({ where: { cart_id } });
                if (cart) {
                    cart.total -= sub_total;
                    await cart.save();
                }

                res.json({ success: true, message: 'Cart item quantity decreased by 1' });
            } else {
                await cart_item.destroy();

                // Update the total of the cart
                const cart = await cartModel.findOne({ where: { cart_id } });
                if (cart) {
                    cart.total -= sub_total;
                    await cart.save();
                }

                res.json({ success: true, message: 'Cart item removed' });
            }
        } else {
            console.log('Cart item not found');
            res.json({ success: false, message: 'Cart item not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.json({ success: false, message: 'Failed to decrease cart item quantity' });
    }
};

// Remove all cart items of a cart relevant to an item_id
const removeCartItem = async (req, res) => {
    const { cart_id, item_id } = req.params;
    try {
        const cart_item = await cart_itemModel.findOne({ where: { cart_id, item_id } });
        if (cart_item) {
            const sub_total = parseFloat(cart_item.sub_total);
            await cart_item.destroy();

            // Update the total of the cart
            const cart = await cartModel.findOne({ where: { cart_id: cart_id } });
            if (cart) {
                cart.total = parseFloat(cart.total) - sub_total;
                await cart.save();
            }

            res.json({success: true, message: 'Cart item removed successfully'});
        } else {
            res.json({success: false, message: 'Cart item not found'});
        }
    } catch (error) {
        console.log('Error:', error);
        res.json({success: false, message: 'Failed to remove cart item'});
    }
}

// Clear cart items of a cart
const clearCartItems = async (req, res) => {
    const { cart_id } = req.params;
    try {
        const cart_items = await cart_itemModel.findAll({ where: { cart_id } });
        
        if (cart_items.length > 0) {
            await cart_itemModel.destroy({ where: { cart_id } });

            // Update the total of the cart to zero
            const cart = await cartModel.findOne({ where: { cart_id } });
            if (cart) {
                cart.total = 0;
                await cart.save();
            }

            res.json({ success: true, message: 'Cart items cleared successfully' });
        } else {
            res.json({ success: false, message: 'Cart items not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.json({ success: false, message: 'Failed to clear cart items' });
    }
}

// Get cart items by cart id
const getCartItemsByCartId = async (req, res) => {
    try {
        const cart_items = await cart_itemModel.findAll({ where: { cart_id: req.params.cart_id } });
        res.status(200).send(cart_items);
    } catch (error) {
        res.status(500).send(error);
    }
};

export { addCartItem, getCartItemsByCartId, removeOneCartItem, removeCartItem, clearCartItems };


// import cart_itemModel from '../models/cart_itemModel.js';

// // Add a new cart_item
// const addCartItem = async (req, res) => {
//     try {
//         const cart_item = new cart_itemModel({
//         user_id: req.body.user_id,
//         product_id: req.body.product_id,
//         quantity: req.body.quantity,
//         });
//         await cart_item.save();
//         res.status(201).send(cart_item);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// };

// // Remove a cart_item

// // Get cart items by cart id
// const getCartItemsByCartId = async (req, res) => {
//     try {
//         const cart_items = await cart_itemModel.find({ cart_id: req.params.cart_id });
//         res.status(200).send(cart_items);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// };

// export default { addCartItem, getCartItemsByCartId };
