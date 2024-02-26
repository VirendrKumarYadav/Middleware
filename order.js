const api_storage = require("./API_store.json");
const express = require("express");
const router = express.Router();


// --/studants --GET
router.get("/order", (req, res, next) => {
  console.log(req.url);

  if (req.url == "/order") {
    // writeLog(
    //   `Server hit up with URL-Param ${req.url} with port ${port} on ${new Date(
    //     Date.now()
    //   ).toUTCString()}`
    // );
    res.status(200).json(api_storage);
  } else {
    next();
  }
});

//  -- /studants --POST
router.post("/order", (req, res) => {
  const requestData = req.body;
  console.log(requestData);

  if (req.url == "/order") {
    // writeLog(
    //   `Server hit up with Method :=>${req.method}, URL-Param:=> ${
    //     req.url
    //   }, with port:=> ${port}, on ${new Date(Date.now()).toUTCString()}`
    // );
    api_storage.push(requestData);
    res.status(200).json(api_storage);
  } else {
    // next();
  }
});


module.exports=router;