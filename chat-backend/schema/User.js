import mongoose from "mongoose";
//import {isEmpty} from 'validator'

const UserSchema = new mongoose.Schema({
        username:{
            type: String,
            required: 'Username is required',
            unique: true,
            //validate :[,"Username can't be empty"]
        } ,
    },
    {
        timestamps: true
    }
);

const UserModel = mongoose.model("User",UserSchema);

export default UserModel;
