import express from 'express';
import cors from 'cors';
import HttpChat from './routes/HttpChat.js';
import PollingChat from './routes/PollingChat.js';


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


app.listen(8080, () => {
  console.log('Server is running on port 3000');
});