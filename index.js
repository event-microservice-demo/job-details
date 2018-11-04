const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');

const port = process.env.PORT || 4000;
const service_name = process.env.SERVICE_NAME || 'movie-search';

// Put together a schema
const resolvers = require('./src/resolvers');
const typeDefs = require('./src/schema');

// DB setup
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const user = encodeURIComponent('root');
const password = encodeURIComponent('example');
const authMechanism = 'DEFAULT';

const url = `mongodb://${user}:${password}@localhost:27017/?authMechanism=${authMechanism}`;
const dbName = "testjobs"

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return MongoClient.connect(url)
      .then(client => {
        const db = client.db(dbName)
        console.log("Connected and retrieved db")
        return db
      })
      .catch(err => {
        console.log("Connection Failed")
        console.log(err)
      })   
  }
});

// Initialize the app
const app = express();

// Apply the express middleware
server.applyMiddleware({app});

app.listen(port, () => {
  console.log(`${service_name} listening on port ${port}!`);
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
});
