const mongoose = require("mongoose");

const userSheet = new mongoose.Schema(
  {
    USERID: {
      type: String,
    },
    DOB: {
      type: String,
    },
    PASSWORD: {
      type: String,
    },
    EMAIL: {
      type: String,
    },
    CREATED_ON: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const COLLECTION_USER = mongoose.model("COLLECTION_USER", userSheet);

module.exports = COLLECTION_USER;
