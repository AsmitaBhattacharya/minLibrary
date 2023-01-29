const express = require('express');
const { graphqlHTTP } = require('express-graphql'); //to understand graphql, runs graphql api
const schema = require('./schema/schema');
const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb+srv://asmita:Asmita%4001@cluster0.2xrvqua.mongodb.net/test'); //connected to the database
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
})); //graphql endpoints

app.listen(4000, () => {
    console.log("Now listening port 4000");
});