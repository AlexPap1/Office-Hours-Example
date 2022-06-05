const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = rrquire('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3306;

const sequelize = require('./config/connection');
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


