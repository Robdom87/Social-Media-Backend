const { connect, connection } = require('mongoose');

connect('mongodb://localhost/spokenThoughtsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;