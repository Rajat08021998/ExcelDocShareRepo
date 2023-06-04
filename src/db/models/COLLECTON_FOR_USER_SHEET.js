const mongoose = require("mongoose");

const userSheet = new mongoose.Schema({
    GROUP_ID: {
      type: String,
      required: true,
    },
    GROUP_NAME: {
      type: String,
    },
    DOC_NAME: {
      type: String,
    },
    DOC_OBJ: {
      type: String,
    },
    DOC_LABEL: {
      type: String,
    },
    EDIT_LIST:{
      type:Array,
    },
    VIEW_LIST:{
      type:Array,
    },
    CREATED_BY: {
      type: String,
      required: true,
    },
    UPDATED_BY: {
      type: String,
    },
    CREATED_ON: {
      type: Number,
    },
    UPDATED_ON: {
      type: Number,
    },
  },
  {
    timestamps: true,
  })

  const COLLECTION_FOR_USER_SHEET=mongoose.model('COLLECTION_FOR_USER_SHEET',userSheet)

module.exports = COLLECTION_FOR_USER_SHEET;
