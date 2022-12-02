const db = require("./connection");
const { User, Article, Savedarticles } = require("../models");

await User.create({
  firstName: "Elijah",
  lastName: "Holt",
  email: "eholt@testmail.com",
  password: "password12345",
});

console.log("users seeded");

process.exit();
