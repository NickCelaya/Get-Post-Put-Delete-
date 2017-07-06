const express = require("express");
const bodyParser = require("body-parser");
const mainCtrl = require("./controller.js")


const app = module.exports = express();

app.use(bodyParser.json())







//endpoints//  //open postman and create a json object in POST / body then send, then perform a GET

app.get("/api/messages", mainCtrl.getMessage)
app.post("/api/messages", mainCtrl.addMessage)
app.put("/api/messages/:id", mainCtrl.updateMessage)
app.put("/api/changeage/:id", mainCtrl.updateAge)
app.delete("/api/messages/:id", mainCtrl.deleteMessage)



const PORT = 3000;
app.listen(PORT, () => {
  console.log("War on port:", PORT);
});
