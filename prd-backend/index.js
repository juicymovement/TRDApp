const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const officegen = require('officegen');

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

app.post('/api/generate-prd', (req, res) => {
  const formData = req.body;

  const docx = officegen('docx');
  
  docx.on('error', (err) => {
    console.log(err);
    res.status(500).send('Error generating the document.');
    return;
  });

  Object.keys(formData).forEach((key) => {
    docx.createP().addText(`${key}: ${formData[key]}`, { bold: true });
  });

  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
  res.setHeader('Content-Disposition', 'attachment; filename=PRD.docx');

  docx.generate(res);
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

module.exports = app;
