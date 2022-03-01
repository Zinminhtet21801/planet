const friendsModel = require("../models/friends.model");

const getFriend = (req, res) => {
  res.status(200).json(friendsModel);
};

function postFriend(req, res) {
  if (!req?.body?.name || !req?.body?.age) {
    return res.status(400).json({
      error: "Name and age are required",
    });
  }
  const { name, age } = req.body;
  friendsModel.push({ id: friendsModel.length + 1, name, age });
  res.status(req.body ? 201 : 400).json(friendsModel);
}

function getFriendById(req, res) {
  const id = req.params.friendId;
  res.status(200).json(friendsModel.find((friend) => friend.id === parseInt(id)));
}

module.exports = {
  getFriend,
  postFriend,
  getFriendById,
};
