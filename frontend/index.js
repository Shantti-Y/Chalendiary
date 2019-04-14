const path = require('path');
const express = require('express');
require('dotenv').config();

const router = express.Router();

const app = express();
const distDir = path.resolve(__dirname, `./dist/dev`);

app.use(express.static(distDir));

const indexHtmlFile = path.resolve(__dirname, './index.html');
router.get('/', (_, res) => {
  res.sendFile(indexHtmlFile);
});

app.use(router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log('Press Ctrl+C to quit.');
});
