import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
        EnterID:{
            type: Number,
            required: 'EnterID is required',
            unique: true
        } ,
    },
    {
        timestamps: true
    }
);

const RoomModel = mongoose.model("Room",RoomSchema);

export default RoomModel;
