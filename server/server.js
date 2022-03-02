const express = require('express')
const cors = require('cors');

const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());

const routes = require("./controller");
app.use('/', routes);

app.listen(port, () => {
  console.log(`Shmoogle listening on port ${port}`);
});