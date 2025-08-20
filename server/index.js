import express from 'express';
import cors from 'cors';
import HttpChat from './routes/HttpChat.js';
import PollingChat from './routes/PollingChat.js';
import { Server } from 'socket.io';
import http from 'http';



const app = express();
app.use(express.json());
app.use(cors(
  {origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true,
}
));
app.use("/api/chathttp", HttpChat);

app.use("/api/chatpolling", PollingChat); 


const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});
 let messages = [];
 io.on('connection', (socket) => {
  console.log('A user connected');

  socket.emit('previousMessages', messages);

  socket.on('message', (message) => {
    const newMessage = {
      ...message,
      time: new Date().toLocaleTimeString(),
    };
    messages.push(newMessage);
    io.emit('NewMessage', newMessage);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected', socket.id);
  });
}); 




server.listen(8080, () => {
  console.log('Server is running on port 3000');
});