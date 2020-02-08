import express from 'express';
import { Config } from '../config';
import { Profile } from './api/profile/profile';
import body from 'body-parser';

export class AppInit {
app = express();
profile = new Profile();

init() {
    Config['app'] = this.app;
    this.initMiddleware();
    this.profile.init();    
    this.app.use('/api/profile', Config['userRouter']);
    this.app.listen(3000, () => {
        console.log('server listening to 3000');
    })
}

initMiddleware() {
    this.app.use(body.json());
}

}
