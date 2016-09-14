/// <reference path="../typings/index.d.ts" />

import * as Path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as request from 'request';
import * as jwt from 'jsonwebtoken';
import * as favicon from 'serve-favicon';

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const app = express();

app.disable("x-powered-by");

app.use(favicon(Path.join(__dirname, '../www/public', 'favicon.ico')));
app.use(express.static(Path.join(__dirname, '../www/public')));

app.use('/client', express.static(Path.join(__dirname, '../www/client')));

app.get('*', function (request, response) {
    response.sendFile(Path.join(__dirname, '../www/public/index.html'));
});

// // let providers = {
// //     facebook: {
// //         url: 'https://graph.facebook.com/me'
// //     },
// //     google: {
// //         url: 'https://www.googleapis.com/oauth2/v3/tokeninfo'
// //     }
// // };

// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({
// //     extended: true
// // }));

// // passport.use(new GoogleStrategy({
// //     clientID: '230101966316-4klkchc8o1kp2kq7nsqu7o45dj3812dj.apps.googleusercontent.com',
// //     clientSecret: 'bR9QMyIg5uhnRIY-jA50v500',
// //     callbackURL: "/auth/google/callback"
// //   },
// //   function(token, tokenSecret, profile, done) {
// //       return done(null, { googleId: profile.id });      
// //   }
// // ));

// // // app.use('/', express.static(Path.join(__dirname, '../www')));

// // //  app.get('*', express.static(Path.join(__dirname, '../www/index.html')));

// // app.use('/static/node_modules', express.static(Path.join(__dirname, '../../node_modules')));

// // app.get('/auth/google',
// //     passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.email'] }));

// // // app.get('/auth/google/callback', 
// // //   passport.authenticate('google', { failureRedirect: '/login' }),
// // //   function(req, res) {
// // //     res.redirect('/');
// // //   });

// // app.get('/auth/google/callback', (req, res) =>{
// //     console.log(req);
// //     res.redirect('/static/home.html');
// // });

// // app.get('/api/google_cb', (req, res) => {
// //     console.log(req);
// //     //check login success...
// //     let token = 'abc';
// //     res.end('<script>window.opener.token="abc"; window.close();</script>');
// // })

// // app.post('/api/auth', (req, res) => {
// //     // Grab the social network token
// //     var network = req.body.network;
// //     var socialToken = req.body.socialToken;

// //     // Validate the social token with Facebook
// //     // validateWithProvider(network, socialToken).then(function (profile) {
// //     //     // Return a server signed JWT
// //     //     //res.send(createJwt(profile));
// //     //     res.send(profile);
// //     // }).catch(function (err) {
// //     //     res.send('Failed!' + err.message);
// //     // });
// // });

// // app.use('/lib', express.static(Path.resolve(__dirname, '../www/lib')));

// // var renderIndex = (req: express.Request, res: express.Response) => {   
// //     res.sendFile(Path.resolve(__dirname, '../www/index.html'));
// // }

// // app.get('/*', renderIndex);


// // function validateWithProvider(network: string, socialToken: string) {
// //     // return new Promise(function (resolve, reject) {
// //     //     // Send a GET request to Facebook with the token as query string
// //     //     request({
// //     //         url: providers[network].url,
// //     //         qs: { access_token: socialToken}
// //     //     }, (error, response, body) => {
// //     //         console.log(body);
// //     //         console.log(response.statusCode);
// //     //         if (!error && response.statusCode == 200) {
// //     //             resolve(JSON.parse(body));
// //     //         } else {                
// //     //             reject(error);
// //     //         }
// //     //     }
// //     //     );
// //     // });
// // }

// // function createJwt(profile: string) {
// //     return jwt.sign(profile, 'MY_PRIVATE_KEY', {
// //         expiresIn: '2d',
// //         issuer: 'MY_APP'
// //     });
// // }

app.listen(process.env.port || 3000, function () {
    console.log("Server listening on port %d", process.env.port || 3000);
});