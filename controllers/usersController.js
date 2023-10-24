const express = require("express");
const users = express.Router();
const usersData = require("../models/user");

users.post("/auth", (req, res) => {
  const { username, password } = req.body;
  const userLogin = usersData.find((user) => user.username === username);
  const targetedUser = userLogin;
  console.log(userLogin, usersData, req.body);
  if (targetedUser && targetedUser.password === password) {
    res.status(200).json(targetedUser);
  } else {
    res.status(404).send("User is not authenticated");
  }
});

users.post("/", (req, res) => {
  const { username, password, firstName, lastName } = req.body;
  if (firstName && lastName && username && password) {
    const newUser = {
      username,
      password,
      firstName,
      lastName,
    };
    usersData.push(newUser);
    res.status(200).json(newUser);
  } else {
    res.status(404).send("User could not be created");
  }
});

module.exports = users;
