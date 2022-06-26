const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const server = require('./server');

const port = process.env.PORT || 3004;

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`);
});
