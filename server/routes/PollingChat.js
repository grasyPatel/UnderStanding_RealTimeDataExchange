import express from 'express';


const router = express.Router();

let messages = [];

router.get('/messages', (req, res) => {
  res.send(messages);
}); 

router.post("/messages", (req, res) => {
  const { user, text } = req.body;
  const newMessage = { user, text, time: new Date().toLocaleTimeString() };
  messages.push(newMessage);
  res.send({ success: true, message: newMessage });
});

export default router;





