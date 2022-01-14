const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    taskName: { type: String },
    taskCompleted: {type: Boolean, default: false},
    taskDate: { type: Date, default: new Date() }
});

module.exports = mongoose.model("Todo", todoSchema);