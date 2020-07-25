import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
        enterID:{
            type: Number,
            required: 'EnterID is required',
            unique: true
        } ,
        topic:{
            type: String,
            default: 'Room'
        },
        messages: [mongoose.Schema.Types.ObjectId],
        users: [mongoose.Schema.Types.ObjectId]
    },
    {
        timestamps: true
    }
);

const RoomModel = mongoose.model("Room",RoomSchema);

export default RoomModel;
