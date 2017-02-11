var mysql = require('mysql');
var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'myblog4'
});

exports.query = function (sql, param, callback) {
    pool.getConnection(function (err, connection) {
        connection.query(sql, param, function (err, result) {
            if (err) {
                throw  err;
            }
            callback && callback(result);


            connection.release();
        });
    });
};