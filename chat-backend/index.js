import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import UserController from "./controllers/UserController.js";

const app = express();

const url = 'mongodb://localhost:27017/chat';

mongoose.connect(url , { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});

app.use(bodyParser.json());

const User = new UserController();
app.listen(8888,()=>{
    console.log('listening port 8888')
})

