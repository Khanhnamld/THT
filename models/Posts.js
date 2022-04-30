const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    food: {
        type: String
    }
},
    {
        collection: 'order_list'
    }
);

module.exports = mongoose.model('Posts', PostSchema);