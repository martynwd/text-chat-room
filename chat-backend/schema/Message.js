import mongoose from "mongoose";


const MessageSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: String,

},
    {
        timestamps: true
    }
)

const MessageModel = mongoose.model("Message",MessageSchema)
