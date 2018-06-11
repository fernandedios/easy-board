const express = require('express');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const bodyParser = require('body-parser');
const cors = require('cors');

const schema = require('./schema');
const { port, database } = require('./config');
const auth = require('./middlewares/auth');
const app = express();

// database connection
mongoose.connect(database).then(() => {
    console.log('Connected to DB');
}, err => console.log(err));

app.use(cors());

app.use('/api', bodyParser.json(), auth, graphqlHTTP(({ user }) => ({
    schema,
    graphiql: false,
    context: { user }
})));

app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`Server started at port ${port}`);
});

module.exports = app;
