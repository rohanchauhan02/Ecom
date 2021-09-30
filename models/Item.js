const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    },
});

const Item = mongoose.model('Item',ItemSchema);
const newItem=new Item({
    title:"iPhone",
    description:"Best Phone in Market",
    category:"Electronics",
    price:234334,
    date_added:Date.now
})
newItem.save();
module.exports = Item;
