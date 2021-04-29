const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PageSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  pageLength: {
    type: Number,
    required: true
  },
  lastUpdate: {
    type: Date,
    default: Date.now
  }
});

module.exports = Page = mongoose.model('page', PageSchema);
