import { DbConnection } from './db/db';
import { AppInit } from './app/app';


const db = new DbConnection();
const app = new AppInit();

//db.initServer();
db.initDBClient();
setTimeout(() => {
app.init();
}, 2000);
