const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const visitorInfoSchema = new Schema({
    ip:{
        type: String,
        required: true
    },
    location: {
        type: Object,
        required: true
    },
    as:{
        type: Object,
        required: true,
    },
    isp:{
        type: String,
        required: true,
    },
    proxy:{
        type: Object,
        required: true,
    },
}, {timestamps: true});

const VisitorInfo = mongoose.model('vistorInfo', visitorInfoSchema);
module.exports = VisitorInfo;