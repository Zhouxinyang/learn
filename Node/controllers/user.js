exports.login = function(req,res,next){
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'me',
        password : 'secret',
        database : 'my_db'
    });
    connection.connect();




    res.render('login');
}