module.exports = function(router) {
    
    var UserSchema = require('../models/User.js');
    router.post('/signup', function(req, res, next) {
        var UserSchema = require('../models/User.js');

        UserSchema.findOne({
            username: req.body.userName,
            password: req.body.password
        }, function(err, user) {
            if (err) {
                console.log('err');
                res.json({
                    type: false,
                    data: "Error occured: " + err
                });
            } else {
                if (user) {
                    console.log('exists');
                    res.json({
                        type: false,
                        data: "User already exists!"
                    });
                } else {
                    console.log('Creating new user');
                    var userModel = new UserSchema();
                    userModel.username = req.body.userName;
                    userModel.password = req.body.password;
                    userModel.firstname = req.body.firstName;
                    userModel.lastname = req.body.lastName;
                    userModel.save(function(err, user) {
                        console.log("user: " + user);
                        res.json({
                            type: true,
                            data: user
                        });
                    })
                }
            }
        });
    });
    router.post('/login', function(req, res, next) {
        var UserSchema = require('../models/User');

        UserSchema.findOne({
            username: req.body.userName,
            password: req.body.password
        }, function(err, user) {
            if (err) {
                console.log('err');
                res.json({
                    type: false,
                    data: "Error occured: " + err
                });
            } else {
                if (user) {
                    
                    res.json({
                        type: true,
                        data: user
                    });
                } else {
                	res.json({
                     type: false,
                    data: "Invalid login"});
                }
            }
        });
    });
    router.post('/editProfile', function(req, res, next) {
        var UserSchema = require('../models/User.js');

        UserSchema.findOne({
            username: req.body.userName
        }, function(err, user) {
            if (err) {
                console.log('err');
                res.json({
                    type: false,
                    data: "Error occured: " + err
                });
            } else {
                if (user) {
                    var userModel = user;
                    userModel.username = req.body.newUserName;
                    userModel.password = req.body.newPassword;
                    userModel.firstname = req.body.firstName;
                    userModel.lastname = req.body.lastName;
                    userModel.save(function(err, user) {
                        console.log("user: " + user);
                        res.json({
                            type: true,
                            data: user
                        });
                    });
                    }else {
                        res.json({
                                type: false
                        });
                    }
            }
        });
    });

}