const express = require('express');
const config = require('config');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const MongoStore = require('connect-mongo');

const { appRouter, apiRouter, sockets } = require('./src');
const { passportStrategies } = require('./src/services');

(async () => {
    const app = express();

    passport.use(passportStrategies.local);
    passport.use(passportStrategies.google);

    app.locals = {
        error: '',
        message: ''
    };

    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'src', 'views'));
    app.set('trust proxy', 1);

    app.use(bodyParser.urlencoded());
    app.use(bodyParser.json());

    app.use(session({
        secret: config.get('session.secret'),
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: config.get('db.connectionString') })
    }));
    app.use(passport.authenticate('session'));

    app.use('/assets', express.static(path.join('public', 'assets')));
    app.use('/api', apiRouter);

    app.use((req, res, next) => {
        res.locals = {
            messages: req.session.messages || [],
            auth: !!req.user,
        };
        next();
    });
    app.use('/', appRouter);

    // As a variant
    // mongoose.set('bufferCommands', true);
    mongoose.connect(config.get('db.connectionString'))
        .then(() => {
            app.listen(config.get('http.port'), () => {
                console.log(`Server is running on http://localhost:${config.get('http.port')}`);
            });
            sockets.init();
        }).catch(e => {
            console.error('Connection error: ', e);
        });
})();