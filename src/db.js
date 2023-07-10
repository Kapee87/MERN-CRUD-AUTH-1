import mongoose from "mongoose";

const MONGODB_URI = 'mongodb+srv://kapee87:Kapee87@sandbox.eylwt.mongodb.net/myfirstdb?retryWrites=true&w=majority'

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log('>>> DB is connected');
    } catch (error) {
        console.log(error.codeName, error.code);
    }
}