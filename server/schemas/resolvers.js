const { User } = require("../models/User");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  // Query: {
  //   users: async () => {
  //     // return User.find().populate("articles");
  //   },
  // },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      await User.create({ username, email, password });
      const token = signToken(User);
      return { token, User };
    },
    login: async (parent, { email, password }) => {
      const user = await user.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(User);

      return { token, User };
    },
  },
};

module.exports = resolvers;
