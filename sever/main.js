import express from "express";
import graphqlHTTP from "express-graphql";
import {schema, root} from "./schema/schema";
import * as db from './fakeDB';

let app = express();

// Connection URL

// Use connect method to connect to the server
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
  context: {db}
}));
app.listen(8002, () => console.log('Now browse to localhost:8002/graphql'));
