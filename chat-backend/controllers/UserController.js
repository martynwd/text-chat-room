import UserModel from "../schema/User.js";


class UserController{
    SignUp = (req, res) => {
        const user = new UserModel({
            username: req.body.username,

        });

        user.save((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.json(user)

        });
    };

    SignIn = (req, res) => {
        UserModel.findOne({
            username: req.body.username
        })

            .exec((err, user) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                if (!user) {
                    return res.status(404).send({ message: "User Not found." });
                }
                res.status(200).json({
                    user: user,


                });
            });
    };

}


export default UserController;
