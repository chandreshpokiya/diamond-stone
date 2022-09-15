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
  stNo:{
    type: String
  },
  carat:{
    type: String
  },
  rap:{
    type: String
  },
  hna:{
    type: String
  },
  fluro:{
    type: String
  },
  lwr:{
    type: String
  },
  measurement:{
    type: String
  },
  table:{
    type: String
  },
  crown:{
    type: String
  },
  pav:{
    type: String
  },
  depth:{
    type: String
  },
  girdle:{
    type: String
  },
  culet:{
    type: String
  },
  shade:{
    type: String
  },
  tblblk:{
    type: String
  },
  sideblk:{
    type: String
  },
  tblwht:{
    type: String
  },
  sidewht:{
    type: String
  },
  tblop:{
    type: String
  },
  crwop:{
    type: String
  },
  pavop:{
    type: String
  },
  grfdop:{
    type: String
  },
  milky:{
    type: String
  },
  eyeClean:{
    type: String
  },
  inscription:{
    type: String
  },
  certNo:{
    type: String
  },
  pairNo:{
    type: String
  }
});

export default mongoose.model('Diamond', diamondSchema);
