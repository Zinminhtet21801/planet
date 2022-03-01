const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const friendsController = require("./controllers/friends.controller");
const messagesController = require("./controllers/messages.controller");
// const friends = [
//   {
//     id: 1,
//     name: "Ahmed",
//     age: 20,
//   },
//   {
//     id: 2,
//     name: "Ali",
//     age: 50,
//   },
// ];

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now();
  console.log(`Request took ${delta - start} ms`);
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use(express.json());
app.use(express.static("public"));

// 17

app.get("/messages", messagesController.getMessages);
app.post("/messages", messagesController.postMessage);
app.get("/friends", friendsController.getFriend);
app.post("/friends", friendsController.postFriend);
app.get("/friends/:friendId", friendsController.getFriendById);
// app.get("/", (req, res) => {
//   res.status(200).json(friends);
// });

// app.get("/friend/:friendId", (req, res) => {
//   const id = req.params.friendId;
//   res.status(200).json(friends.find((friend) => friend.id === parseInt(id)));
// });

// app.post("/", (req, res) => {
//   if (!req?.body?.name || !req?.body?.age) {
//     return res.status(400).json({
//       error: "Name and age are required",
//     });
//   }
//   const { name, age } = req.body;
//   friends.push({ id: friends.length + 1, name, age });
//   res.status(req.body ? 201 : 400).json(friends);
// });

// app.get("/messages",(req,res)=>{
//   res.send(`<ul><li>Hello Zin!</li></ul>`)
// })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀🚀🚀`);
});
