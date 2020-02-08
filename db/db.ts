import mongoose from 'mongoose';
import mongodb from 'mongodb';
import {Config} from '../config';

export class DbConnection {

    initServer(){
        const dbServer = new mongodb.Server('localhost', 27017);
        dbServer.on('connection',(connection)=> {
            console.log('connection', connection);
        });
        this.initDBClient();
    }

initDBClient() {
    const url = 'mongodb://localhost:27017/studentDB';
    mongoose.createConnection(url).then((connection: any)=> {
        console.log('DB connected successfully', connection);
    });
}

}
