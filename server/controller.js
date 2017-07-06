
let messages = [{

  id: 1,
  name: "Nick",
  age: "28",
  message : "Hello",

}]


exports.getMessage = (req, res) => {
  console.log("it worked check postman");
  res.status(200).send(messages)
}

exports.addMessage = (req, res) => {
  console.log("message added");
  req.body.id = messages[messages.length-1].id+1;
  messages.push(req.body)
  res.status(200).send("nice message")
}


exports.updateMessage = (req, res) => {
  console.log("message updated");
  for(let i = 0; i < messages.length; i++){
    if(messages[i].id == req.params.id){
      console.log(req.body.message);
      messages[i].message = req.body.message
    }
  }
  res.status(200).send("You've changed your message")
}

exports.updateAge = (req, res) => {
  console.log("age updated");
  for(let i = 0; i < messages.length; i++){
    if(messages[i].id == req.params.id){
      console.log(req.body.age);
      messages[i].age = req.body.age
    }
  }
  res.status(200).send("age is just a number")
}

exports.deleteMessage = (req, res) => {
  console.log("message deleted");
  for(let i = 0; i < messages.length; i++){  ///question here about messages.length
    if(messages[i].id == req.params.id){ // == or === in this case?
      messages.splice(i, 1)
    }
  }
  res.status(200).send("messages deleted")
}
