console.log("started server");
const exp = require("express");
const fs = require("fs");
const app = exp();
const port = 5000;
// const api_storage = require("./API_store.json");
const morgan = require("morgan");
const cart = require('./cart')
const order = require("./order");
const studant = require("./studant");


// -------------------------------API Implementations ---------------------------------
//  --/

//------use post data -------------------------------------------
app.use(exp.json());
app.use(morgan())

// ------------------ write code  routers from diffrent clas import ------------------------------------

app.use(studant);
app.use(cart);
app.use(order);

// ------------------------------for All API -----------------

app.get("/", (req, res, next) => {
  if (req.url == "/") {
    writeLog(
      `Server hit up with URL-Param ${req.url} with port ${port} on ${new Date(
        Date.now()
      ).toUTCString()}`
    );
    res.status(200).json([
      {
        sucess: true,
        massage: ` Welcome to the server Port ${port}`,
      },
    ]);
  } else {
    next();
  }
});




//------------- Write Error code -----------------------------------
app.use("*", (req, res) => {
  res.status(402).json([
    {
      sucess: false,
      error: "Sourse is not Found",
    },
  ]);
});
//---------------------------- write log ----------------------------
const writeLog = (strLog) => {
  fs.appendFile("standUp.log", strLog + "\n", (err) => {
    if (err) throw err;
    console.log("Data appended to log file.");
  });
};



//-------------------- API Listen Code ----------------------------------
app.listen(port, () => {
  console.log(`port ${port} is up`);
});


module.exports = {
  writeLog,
  port
};