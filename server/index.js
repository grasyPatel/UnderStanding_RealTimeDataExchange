import express from 'express';
import cors from 'cors';
import RealTime from './routes/RealTime.js';


const app = express();
app.use(express.json());
app.use(cors(
  {origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true,
}
));
app.use("/api/chathttp",RealTime)


app.listen(8080, () => {
  console.log('Server is running on port 3000');
});