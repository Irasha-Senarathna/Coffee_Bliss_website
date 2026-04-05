import itemModel from '../models/itemModel.js';
import fs from 'fs';

// Add a new item
const addItem = async (req, res) => {
    let image = `${req.file.filename}`;
    const item = new itemModel({
        name: req.body.name,
        image: image,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description
    })
    
    try {
        await item.save()
        res.json({success: true, message: 'Item added successfully'})
    }
    catch(error) {
        console.log(error)
        res.json({success: false, message: 'Failed to add item'})
    }
};

// Remove an item
const removeItem = async (req, res) => {
    const id = req.params.id;
    try {
        const item = await itemModel.findByPk(id);
        const image = item.image;
        fs.unlink(`uploads/${image}`, async (err) => {
            if (err) {
                console.error(err)
                return
            }
            await item.destroy();
            res.json({success: true, message: 'Item removed successfully'})
        })
    }
    catch(error) {
        console.log(error)
        res.json({success: false, message: 'Failed to remove item'})
    }
}

// Get all items
const getItems = async (req, res) => {
    try {
        const items = await itemModel.findAll();
        res.json(items);
    }
    catch(error) {
        console.log(error)
        res.json({success: false, message: 'Failed to get items'})
    }
};

export { addItem, getItems, removeItem } ;