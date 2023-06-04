const express = require("express");

const COLLECTION_USER = require("../db/models/COLLECTION_USER");
const router = new express.Router();

router.post("/register", async (req, res) => {
  const obj = req.body;
  // console.log("Test ===>", obj);
  try {
    const sheetDoc = COLLECTION_USER;
    let insertObj = {
      USERID: obj.userId,
      DOB: obj.dob,
      PASSWORD: obj.password,
      EMAIL: obj.email,
      CREATED_ON: new Date().getTime(),
    };
    let result = await sheetDoc.find({ $and: [{ USERID: obj.userId }] });
    if (result && result.length > 0) {
      res
        .status(200)
        .send({
          result: "User with same UserId and Email is already Exist",
          status: "failed",
        });
    } else {
      let resultCreated = await sheetDoc.create(insertObj);
      let finalResult = {
        USERID: resultCreated.USERID,
        DOB: resultCreated.DOB,
        PASSWORD: resultCreated.PASSWORD,
        EMAIL: resultCreated.EMAIL,
        CREATED_ON: resultCreated.CREATED_ON
          ? new Date(resultCreated.CREATED_ON).toLocaleDateString("en-US")
          : null,
      };

      res.status(200).send({ result: finalResult, status: "success" });
    }
  } catch (error) {
    // console.log("OBJ Error===>", error);
    res.status(500).send({ status: "failed", result: "error in create doc" });
  }
});

router.post("/login", async (req, res) => {
  const userId = req.body.userId;
  const password = req.body.password;
  const email = req.body.email;
  const dob = req.body.dob;
  try {
    const sheetDoc = COLLECTION_USER;
    let resultCreated = [];
    if (!email && !dob)
      resultCreated = await sheetDoc.find({
        $and: [{ USERID: userId }, { PASSWORD: password }],
      });
    else
      resultCreated = await sheetDoc.find({
        $and: [{ USERID: userId }, { EMAIL: email }, { DOB: dob }],
      });
    if (resultCreated && resultCreated.length > 0)
      res.status(200).send({ result: resultCreated[0], status: "success" });
    else res.status(200).send({ result: "No Data Found", status: "failed" });
  } catch (error) {
    // console.log("OBJ Error===>", error);
    res.status(500).send({ status: "failed", result: "error in create doc" });
  }
});



router.get("/user/getAll", async (req, res) => {
  try {
    const sheetDoc = COLLECTION_USER;
    let result = await sheetDoc.find({});
    if (result && result.length > 0) {
      let resultCreated = JSON.parse(JSON.stringify(result));
      let userList = [];
      // console.log("========result get all====>",resultCreated);
      resultCreated &&
        resultCreated.forEach((i) => {
          userList.push(i.USERID);
        });

      res.status(200).send({ result: userList, status: "success" });
    } else {
      res.status(200).send({ result: [], status: "success" });
    }
  } catch (error) {
    // console.log("OBJ Error===>", error);
    res.status(500).send({ status: "failed", result: "error in create doc" });
  }
});

module.exports = router;
