'use strict';

const app = require('../app');

app.app.listen(app.port, () => {
  console.log(`Example app listening on port ${app.port}`)
});