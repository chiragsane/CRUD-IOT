var mongoose = require('mongoose');
var SampleSchema = new mongoose.Schema({
    DateTime: { type: String, required: true },
    Temperature: { type: Number, required: true },
    Current: { type: Number, required: true },
    Voltage: { type: Number, required: true }
});

const user = module.exports = mongoose.model('Sample', SampleSchema);

// module.exports.getUserByName = (username, callback) => {
//     const query = { username: username };
//     user.findOne(query, callback);
// }