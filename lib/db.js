import mongoose from 'mongoose'

const MONGODB_URL = process.env.DB_URL;

let isConnected = false;

async function dbConnect() {
    if (isConnected) {
        console.log("Mongodb is already connected");
        return;
    }

    try {
        const db = await mongoose.connect(MONGODB_URL);
        isConnected = db.connections[0].readyState === 1;
        console.log("MongoDb connected successfully");
    } catch (error) {
        console.log("Faied to connect mongodb: ", error);
    }
}

export default dbConnect;