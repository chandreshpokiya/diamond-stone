import mongoose from 'mongoose';

const diamondSchema = mongoose.Schema({
  shape: {
    type: String,
  },
  color: {
    type: String,
  },
  clarity: {
    type: String,
  },
  cut: {
    type: String,
  },
  finish: {
    type: String,
  },
  symmetry: {
    type: String,
  },
  lab: {
    type: String,
  },
});

export default mongoose.model('Diamond', diamondSchema);
