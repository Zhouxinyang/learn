var userModel = require('../models/userModel');



    exports.login = function(req,res){
         res.render('login');
    }

    exports.checkLogin = function(req,res){
        var username = req.body.username;
        var password = req.body.password;
        userModel.queryByNamePwd(username,password,function(result){
            if(result.length>0){
                var user = result[0];
                req.session.loginUser = user;
                res.redirect('/adminIndex');
            }else{
                res.redirect('/login');
            }
        });
    };
    exports.adminIndex = function(req,res){
    res.render('adminIndex',{user:req.session.loginUser});
}

