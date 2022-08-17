const express = require('express');
const app = express();
const { PORT } = require('./config/APP.config');

/**
 * connect backend application to server
 * @PORT  connect server to PORT number 7070
 */

app.listen(PORT, () => {
  console.log(
    `application connected to server successfully at port number ${PORT}`
  );
});
