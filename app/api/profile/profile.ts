import { Config } from '../../../config';
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import {UserModel} from '../../../db/models/user-model';
import { userModel } from '../../../db/models/user';

export class Profile {

    init() {
        const router = Router();
        Config['userRouter'] = router;
        
        router.post('/signup', (req, res) => {

            const username = req.body['username'];
            const password = req.body['password'];
            console.log('req.body', req.body);
            console.log('UserModel', UserModel);

            // let test = new userModel();
            // test["name"] = "test";
            // test["city"] = "city";
            // test.save((err, result) => {
            //     console.log('err', err);
            //     console.log('res', result);
            //     res.status(200).json({message: 'success'});
            // })

            // UserModel.findOne({username, password}, (err, existingUser) => {
            //     console.log('err', err);
            //     console.log('exist', existingUser);
            //     if(!existingUser || err) {
                    let user = new UserModel();
                    console.log('user', user);
                    user['username'] = req.body['username'];
                    user['password'] = req.body['password'];
                    user['emailid'] = req.body['emailid'] ? req.body['emailid'] : '';
                    if(req.body['usertype']) {
                        user['usertype'] = req.body['usertype'];
                    }
                    user.save((creationErr, userCreated) => {
                        if(creationErr) {
                            res.status(403).json({message: 'error in creating profile please try again', error: creationErr});
                        } else {
                            jwt.sign({username, password}, 'dhanlakshmi', (jwtErr, token) => {
                                if(jwtErr) {
                                    res.status(403).json({message: 'error in creating account', error: jwtErr});
                                } else {
                                    res.status(200).send({message: 'Successfully created profile', token: token, user: userCreated});
                                } 
                            });
                        }
                    })
            //     } else {
            //         res.status(403).json({message: 'user already exist!'});
            //     }
            // });
        });
    }
}
