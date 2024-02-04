import mongoose from "mongoose";

class Database {
    constructor(URL) {
        this.url = URL;
    }
    open = async () => {
        try {
            await mongoose.connect(this.url);
            console.log('MongoDB connected successfully');
        } catch(e) {
            console.log('ERROR in mongo connect: ', e);
        }
    }
}

export default Database;