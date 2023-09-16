const mongoose = require("mongoose");

const userSheet = new mongoose.Schema(
  {
    DOC_ID: {
      type: String,
    },
    DOC_NAME: {
      type: String,
    },
    PRE_DOC_OBJ: {
      type: String,
    },
    DOC_LABEL: {
      type: String,
    },
    NEW_DOC_OBJ: {
      type: String,
    },
    EDIT_LIST: {
      type: Array,
    },
    VIEW_LIST: {
      type: Array,
    },
    NOTE: {
      type: String,
    },
    OPERATION: {
      type: String,
    },
    CREATED_BY: {
      type: String,
      required: true,
    },
    UPDATED_BY: {
      type: String,
    },
    UPDATED_ON: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const COLLECTION_DOC_HISTORY = mongoose.model(
  "COLLECTION_DOC_HISTORY",
  userSheet
);

module.exports = COLLECTION_DOC_HISTORY;
