import mongoose from "mongoose";

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
  flurocent: {
    type: String,
  },
  girdle: {
    type: String,
  },
  stNo: {
    type: String,
  },
  carat: {
    type: String,
  },
  rap: {
    type: String,
  },
  lwratio: {
    type: String,
  },
  measurement: {
    type: String,
  },
  table: {
    type: String,
  },
  crown: {
    type: String,
  },
  pav: {
    type: String,
  },
  depth: {
    type: String,
  },
});

export default mongoose.model("Diamond", diamondSchema);
