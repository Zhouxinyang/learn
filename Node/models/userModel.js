var db = require('./db');
exports.queryByNamePwd = function(username,password,callback){
    var sql = "select * from t_user where username=? and password=?";
    db.query(sql,[username,password],callback);
}