import deliveryModel from '../models/deliveryModel.js';

// Add a new delivery
const addDelivery = async (req, res) => {
    const { delivery_id, street, city, state, zip, phone_num, tot_with_delivery, cart_id, user_id } = req.body;

    if (!street || !city || !state || !zip || !phone_num || !tot_with_delivery || !cart_id || !user_id) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const delivery = new deliveryModel({
        delivery_id,
        street,
        city,
        state,
        zip,
        phone_num,
        tot_with_delivery,
        cart_id,
        user_id
    });
    
    try {
        await delivery.save()
        res.json({success: true, message: 'Delivery added successfully'})
    }
    catch(error) {
        console.log(error)
        res.json({success: false, message: 'Failed to add delivery'})
    }
};

// Get all deliveries
const getDeliveries = async (req, res) => {
    try {
        const deliveries = await deliveryModel.findAll();
        res.json(deliveries);
    }
    catch(error) {
        console.log(error)
        res.json({success: false, message: 'Failed to get deliveries'})
    }
};

// Update the status of the delivery
const updateStatus = async (req, res) => {
    const delivery_id = req.params.delivery_id;
    const { status } = req.body;
    
    console.log(delivery_id, status);

    if (!delivery_id || !status) {
        return res.status(400).json({ success: false, message: 'Delivery ID and status are required' });
    }

    try {
        const delivery = await deliveryModel.findOne({ where: { delivery_id } });

        if (!delivery) {
            return res.status(404).json({ success: false, message: 'Delivery not found' });
        }

        delivery.status = status;
        await delivery.save();

        res.json({ success: true, message: 'Delivery status updated successfully' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Failed to update delivery status' });
    }
};

export { addDelivery, getDeliveries, updateStatus };