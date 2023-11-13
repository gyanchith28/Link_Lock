import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import urlRoutes from './routes/url.routes.js'
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  console.log("Connected to MongoDB");
  }).catch((err) => {
    console.log(err);
  });

const app = express();
const port = 3000;

app.use(express.json());
app.use('/url', urlRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})