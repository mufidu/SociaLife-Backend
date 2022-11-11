import mongoose from "mongoose"

const userSchema = mongoose.Schema(
    {
        username: {
            type: String, 
            required: true,
        },
        password: {
            type: String,
            required: true
        }, 
        friends: []
    },
    {
        timestamps: true
    }
)

const UserModel = mongoose.model("Users", userSchema)

export default UserModel