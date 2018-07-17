/**
 * Created by aayusharora on 7/17/18.
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const db = require('./dbconfig.json');
const database = require('./database');
const operations = require('./operations');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({secret: 'I have a dog'}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/',express.static('public'));

app.post('/login', passport.authenticate('local',
    {
       successRedirect: '/success',
       failureRedirect: '/failure'
     }
));

passport.use(new passportLocal(
             function(username, password, done) {
              database.getUser(username, function(data) {
                 console.log(data[0].password);
                 console.log(data);

                  if(username !== data[0].username) {
                      return done(null, false, {message: 'username is incorrect'});
                  }

                  operations.compare(password, data[0].password, function(show){

                      if(!show) {
                          return done(null, false, {message: 'password is incorrect'});
                      }



                      return done(null, data[0].username);


                  });

              })

             })
);

passport.serializeUser(function(id, done) {
    return done(null, id);
});

passport.deserializeUser(function(id, done) {

        return done(null, id)


});

app.get('/success', function(req,res) {
    console.log(req.user)
    res.send(req.user);

});

app.get('/failure', function(req,res) {
    req.logout();
    res.redirect('/');

});

app.get('/data', function(req, res) {
    if(req.user) {
        res.send("Validated");
    }
    else {
        res.redirect('/');
    }

});

app.post('/signup', function(req, res) {

    operations.encrypt(req.body.username, req.body.password, function(data){
        res.send(data);

    })
});

app.listen(5000, function(req,res) {
    console.log("Port listening on 5000")
    database.connectDb();
})