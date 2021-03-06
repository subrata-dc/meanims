var mongoose = require('mongoose');

// User Schema
var ItemStockInSchema = mongoose.Schema({
    item_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    },
    contracted_rate: {
        type: Number, 
        default: 0.0
    },
    reciving_rate: {
        type: Number, 
        default: 0.0
    },
    store_opn_qty: {
        type: Number, 
        default: 0
    },
    kitchen_opn_qty: {
        type: Number, 
        default: 0
    },
    purchage_qty: {
        type: Number, 
        default: 0
    },
    total_purchage_amount: {
        type: Number, 
        default: 0.0
    },
    total_opn_qty: {
        type: Number, 
        default: 0
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    created_date: {
        type: Date, default: Date.now
    },
    updated_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    updated_date:{
        type: Date, default: Date.now
    },
    status:{
        type: Boolean, default: true
    }
});

var ItemStockInSchema = module.exports = mongoose.model('Stock_in', ItemStockInSchema);

module.exports.createStockIn = function(newStockIn, callback){
    newStockIn.save(callback);
}

module.exports.updateStockIn = function(_id,stockIn,callback){
    ItemStockInSchema.update(
        {
            _id: _id
        },
        {
            reciving_rate: stockIn.reciving_rate,
            store_opn_qty: stockIn.store_opn_qty,
            kitchen_opn_qty: stockIn.kitchen_opn_qty,
            purchage_qty: stockIn.purchage_qty,
            total_purchage_amount: stockIn.total_purchage_amount,
            total_opn_qty: stockIn.total_opn_qty,
            updated_by: stockIn.updated_by,
            updated_date: new Date()
        },
        callback
    )
}

//module.exports.getAllStockIn = function(callback){
//    ItemStockInSchema.find({}).populate('item_id',callback);
//}
//
//module.exports.getCategoryById = function(id, callback){
//    ItemCategory.findById(id, callback);
//}
//
//module.exports.updateCategory = function(category,callback){
//    ItemCategory.update({_id: category.id},{category_name: category.name, updated_date: new Date()},callback);
//}
//
//module.exports.deleteCategory = function(id,callback){
//    ItemCategory.findByIdAndRemove({_id:id},callback);
//}
