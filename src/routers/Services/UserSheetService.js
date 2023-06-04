const COLLECTION_FOR_USER_SHEET = require("../../db/models/COLLECTON_FOR_USER_SHEET");

 class UserSheetService {
    constructor(){}
  createUserDoc = async (obj) => {
    return new Promise(async (resolve, reject) => {
      try {
        const sheetDoc = COLLECTION_FOR_USER_SHEET;
        let insertObj = {
          GROUP_ID: obj.GROUP_ID,
          GROUP_NAME: obj.GROUP_NAME,
          DOC_NAME: obj.DOC_NAME,
          DOC_OBJ: obj.DOC_OBJ,
          DOC_LABEL: obj.DOC_LABEL,
          CREATED_BY: obj.CREATED_BY,
          CREATED_ON: new Date().getTime(),
          UPDATED_ON: new Date().getTime(),
        };
        let result = await sheetDoc.create(insertObj);
        resolve({ status: "success", result: result });
      } catch (error) {
        reject({
          status: "failed",
          result: "Error in Create User Doc",
          error: error,
        });
      }
    });
  };
}

export default UserSheetService;
