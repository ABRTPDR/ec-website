const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { 
    type: String, 
    enum: ['prez', 'gensec', 'hrep', 'drep'], 
    required: true 
  },
  hostel: { 
    type: String, 
    // Only require hostel if position is 'hrep'
    required: function() { return this.position === 'hrep'; } 
  },
  image: { type: String, default: 'PENDING' },
  manifesto: { type: String, required: true },
  sop: { type: String, default: 'PENDING' },
  offclist: { type: String, default: 'PENDING' },
  disclosure: { type: String, default: 'PENDING' },
});

module.exports = mongoose.model('Candidate', candidateSchema);