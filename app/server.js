const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require('./routes/api/user');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const db = require('./config/connection');

mongoose.connect(
  process.env.MONGODB_URL || 
     "mongodb://localhost:27017/syncAlyzer",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);
mongoose.Promise = global.Promise;

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

 module.exports = app;

