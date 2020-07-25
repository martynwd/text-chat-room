import RoomModel from "../schema/Room.js";

class RoomController{
    index = (req, res)=>{
        RoomModel.find()
            .exec((err, rooms)=>{
            if(err){
                res.status(500).json({
                    message: "Error"
                })
            }
            else{
                res.json(rooms);
            }
        })

    }
    show = (req, res)=>{
        const id = req.params.id;
        RoomModel.findById(id,(err, room)=>{
            if (err){
                return res.status(404).json({
                    message: "room not found"
                })

            }
            else {
                res.json(room);
            }
        });
    }
}


export default RoomController;
