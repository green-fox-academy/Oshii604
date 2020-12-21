const express = require('express');

const bodyParser = require(`body-parser`);
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const messages = [];
let counter = 0;

app.get(`/messages`, (req, res) => {
  console.log(req.query.name);
  let filteredMessages = messages;
  if (req.query.name) {
    filteredMessages = filteredMessages.filter((message) => message.name === req.query.name);
  }

  res.send({
    messages: filteredMessages,
  });
});

app.post(`/messages`, (req, res) => {
  console.log(req.body);
  const message = ({ ...req.body, sentAt: new Date(), id: counter });
  counter++;
  messages.push(message);
  res.send({
    success: true,
    message: req.body,
  });
});

app.delete(`/messages/:id`, (req, res) => {
  console.log(req.params.id);
  const indexToDelete = messages.findIndex((message) => message.id === req.params.id);
  const deletedMessage = messages.splice(indexToDelete, 1);
  res.send({
    success: true,
    deletedMessage,
  });
});

/*
app.put(`/messages/:id`, (req, res) => {
  console.log(req.params.id);
  const indexToDelete = messages.findIndex((message) => message.id === req.params.id);
  const deletedMessage = messages.splice(indexToDelete, 1);
  res.send({
    success: true,
    deletedMessage,
  });
});
*/

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
