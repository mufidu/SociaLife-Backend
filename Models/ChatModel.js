import mongoose from 'mongoose'

const ChatSchema = moongose.Schema(
    {
        members: {
            type: Array,
        },
    },
    {
        timestamps: true,
    }
);

const ChatModel = mongoose.model("Chat", ChatSchema)
export default ChatModel