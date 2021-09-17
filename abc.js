var mysql = require('mysql');
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"usersdb"
});
function getUsers () {
     return new Promise((resolve,reject) => {
        connection.query(`select * from usersdb.user where user_cli=?`,[+310000],
        (err,results,fields)=> {
            if(err) {
                return reject(err);
            } else {
            return resolve(results);
        }
    });
    })
}
function getPrompt() {
    return new Promise((resolve,reject) => {
        connection.query(`select * from usersdb.prompt`,(err,result)=> {
            if(err) {
                return reject(err);
            } else {
            return resolve(result);
            }
        });
    });
    
}
getUsers()
    .then(function(results){
        console.log('success',results)
    })
    .catch(function(err) {
        console.log('caught error',err)
        
    });
getPrompt()
    .then(function(result){
        console.log('success',result)
    })
    .catch(function(err) {
        console.log('error',err)
        
    });
// module.exports = getPrompt;
// module.exports = getUsers;