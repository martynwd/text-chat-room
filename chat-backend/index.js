import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import useSocket from 'socket.io';
import server from 'http';
import dotenv from 'dotenv';

//Controllers
import UserController from "./controllers/UserController.js";
import RoomController from "./controllers/RoomController.js";

//Config
dotenv.config();

const app = express();


app.use(bodyParser.json());
const Server = server.createServer(app);
const io = useSocket(Server);
const url = 'mongodb://localhost:27017/chat';

mongoose.connect(process.env.MONGOOSE_URL , { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});


//Create Controllers
const User = new UserController();
const Room = new RoomController();

app.get("/rooms", Room.index)
app.post("/user/registration",User.SignUp)
app.post("/user/login",User.SignIn)


io.on('connection',(socket)=>{
    console.log('user connected',socket.id);
})

Server.listen(process.env.PORT,(err)=>{
    if(err){
        throw Error(err);
    }
    console.log(`listening port ${process.env.PORT}`)
})


