const express = require("express");
const Item = require("../db/models/item");

const COLLECTION_FOR_USER_SHEET = require("../db/models/COLLECTON_FOR_USER_SHEET");
const router = new express.Router();
//item create
router.post("/doc", async (req, res) => {
  // const item= new Item(req.body)

  // try {
  //     await item.save()
  //     res.status(201).send(item)
  // } catch (error) {
  //     res.status(400).send(error)
  // }
  const obj = req.body;
  // console.log("Test ===>", obj);
  try {
    const sheetDoc = COLLECTION_FOR_USER_SHEET;
    let insertObj = {
      GROUP_ID: obj.GROUP_ID,
      GROUP_NAME: obj.GROUP_NAME,
      DOC_NAME: obj.DOC_NAME,
      DOC_OBJ: JSON.stringify(obj.DOC_OBJ),
      DOC_LABEL: JSON.stringify(obj.DOC_LABEL),
      CREATED_BY: obj.CREATED_BY,
      UPDATED_BY: obj.CREATED_BY,
      EDIT_LIST:[],
      VIEW_LIST:[],
      CREATED_ON: new Date().getTime(),
      UPDATED_ON: new Date().getTime(),
    };
    let resultCreated = await sheetDoc.create(insertObj);

    // let result = await objUserSheetService.createUserDoc(obj);
    // console.log("OBJ RESULT===>", resultCreated);
    let finalResult = {
      CREATED_BY: resultCreated["CREATED_BY"],

      DOC_NAME: resultCreated["DOC_NAME"],

      GROUP_ID: resultCreated["GROUP_ID"],
      GROUP_NAME: resultCreated["GROUP_NAME"],

      createdAt: resultCreated["createdAt"],
      updatedAt: resultCreated["updatedAt"],
      _id:resultCreated["_id"],
      DOC_OBJ: resultCreated.DOC_OBJ ? JSON.parse(resultCreated.DOC_OBJ) : [],
      DOC_LABEL: resultCreated.DOC_LABEL
        ? JSON.parse(resultCreated.DOC_LABEL)
        : [],
      CREATED_ON: resultCreated.CREATED_ON
        ? new Date(resultCreated.CREATED_ON).toLocaleDateString("en-US")
        : null,
      UPDATED_ON: resultCreated.UPDATED_ON
        ? new Date(resultCreated.UPDATED_ON).toLocaleDateString("en-US")
        : null,
        
        UPDATED_BY:resultCreated.UPDATED_BY?resultCreated.UPDATED_BY:null,
        EDIT_LIST:resultCreated.EDIT_LIST?resultCreated.EDIT_LIST:[],
        VIEW_LIST:resultCreated.VIEW_LIST?resultCreated.VIEW_LIST:[],
    };

    res.status(200).send({ result: finalResult, status: "success" });
  } catch (error) {
    // console.log("OBJ Error===>", error);
    res.status(500).send({ status: "failed", result: "error in create doc" });
  }
});

//getting all the items
router.get("/doc/:type/:user", async (req, res) => {
  try {
    const type=req.params.type;
    const user=req.params.user;
    // console.log("================get API",type,user);
    let obj ={};
    if(type==="view"){
      obj={VIEW_LIST:user}
    }
    else if(type==="edit"){
      obj={EDIT_LIST:user}
    }else{
      obj={CREATED_BY:user}
    }
    const item = await COLLECTION_FOR_USER_SHEET.find(obj);
    let result =
      item && item.length > 0 ? JSON.parse(JSON.stringify(item)) : [];
    result.length > 0 &&
      result.forEach((i, index) => {
        result[index]["DOC_LABEL"] = i.DOC_LABEL ? JSON.parse(i.DOC_LABEL) : [];
        result[index]["DOC_OBJ"] = i.DOC_OBJ ? JSON.parse(i.DOC_OBJ) : [];
        result[index]["CREATED_ON"] = i.CREATED_ON
          ? new Date(i.CREATED_ON).toLocaleDateString("en-US")
          : null;
        result[index]["UPDATED_ON"] = i.UPDATED_ON
          ? new Date(i.UPDATED_ON).toLocaleDateString("en-US")
          : null;
        result[index]["UPDATED_BY"]=i.UPDATED_BY?i.UPDATED_BY:null;
        result[index]["EDIT_LIST"]=i.EDIT_LIST?i.EDIT_LIST:[];
        result[index]["VIEW_LIST"]=i.VIEW_LIST?i.VIEW_LIST:[];

      });
    res.send({ result: result, status: "success" });
  } catch (error) {
    // console.log("ERRROR==>", error);
    res.status(500).send({ status: "failed", result: "error in getting data" });
  }
});

router.delete("/doc/:id", async (req, res) => {
  try {
    const item = await COLLECTION_FOR_USER_SHEET.findByIdAndDelete(
      req.params.id
    );

    if (!item) {
      return res.status(404).send({
        status: "failed",
        result: `Document with ${item.DOC_NAME} has not been Deleted`,
      });
    }
    // console.log("==========>", item);
    res.send({
      status: "success",
      result: `Document with ${item.DOC_NAME} has been Deleted`,
    });
  } catch (error) {
    // console.log("=======ERROR++++>", error);
    res.status(500).send();
  }
});

router.put("/doc/:id", async (req, res) => {
  try {
    const { DOC_OBJ, DOC_NAME, DOC_LABEL,UPDATED_BY } = req.body;
    let id = req.params.id;
    const item = await COLLECTION_FOR_USER_SHEET.updateOne(
      { _id: id },
      {
        $set: {
          DOC_OBJ: JSON.stringify(DOC_OBJ),
          DOC_NAME: DOC_NAME,
          DOC_LABEL: JSON.stringify(DOC_LABEL),
          UPDATED_ON: new Date().getTime(),
          UPDATED_BY:UPDATED_BY
        },
      }
    );

    if (!item) {
      return res.status(404).send({ status: "failed", result: `Document cannot be updated` });
    }
    // console.log("==========>", item);
    if (item.nModified > 0)
      res.status(200).send({
        status: "success",
        result: `Document with name ${DOC_NAME} has been Updated`,
      });
    else res.status(404).send({ status: "failed", result: `Document cannot be updated` });
  } catch (error) {
    // console.log("=======ERROR++++>", error);
    res.status(500).send({ status: "failed", result: `Error in updated` });
  }
});

router.put("/doc/list/:id", async (req, res) => {
  try {
    const { EDIT_LIST, VIEW_LIST, UPDATED_BY ,DOC_NAME} = req.body;
    let id = req.params.id;
    let obj={UPDATED_BY:UPDATED_BY,UPDATED_ON:new Date().getTime()};
    if(EDIT_LIST){
      obj["EDIT_LIST"]=EDIT_LIST;
    }
    if(VIEW_LIST){
      obj["VIEW_LIST"]=VIEW_LIST;
    }
    const item = await COLLECTION_FOR_USER_SHEET.updateOne(
      { _id: id },
      {
        $set: obj
      }
    );

    if (!item) {
      return res.status(404).send({ status: "failed", result: `Document cannot be updated` });
    }
    // console.log("==========>", item);
    if (item.nModified > 0)
      res.status(200).send({
        status: "success",
        result: `Document with name ${DOC_NAME} has been Updated`,
      });
    else res.status(404).send({ status: "failed", result: `Document cannot be updated` });
  } catch (error) {
    // console.log("=======ERROR++++>", error);
    res.status(500).send({ status: "failed", 
    result: `Error in updated` });
  }
});
module.exports = router;
