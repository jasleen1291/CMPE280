var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var itemSchema = new mongoose.Schema({
	category_id: {type: Number},
	name: String,
    description: String,
    price: Number,
    quantity: Number
});

itemSchema.plugin(autoIncrement.plugin, { model: 'Item', startAt: 1 });
var item = mongoose.model('Item', itemSchema);