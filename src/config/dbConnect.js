import mongoose from "mongoose";

async function conectarDb(){
    mongoose.connect("mongodb://localhost:27017/livraria");

    return mongoose.connection;
}

export default conectarDb;