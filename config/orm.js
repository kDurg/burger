var connection = require("./connection.js");


var orm = {
    all: function (input, callback) {
        var queryString = "SELECT * FROM burgers_db";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result)
        // }, {
        //     callback(result)
        });
    },
    create: function (name, devoured) {
        var queryString = "INSERT INTO burgers_db VALUE(burger_name, devoured)";
        connection.query(queryString, [burger_name, devoured], function (err, result) {
            if (err) throw err;
            console.log(result)
        // need a callback? callback(result)
        });
    },
    updateOne: function (id) {
        var queryString = "UPDATE burgers_db SET devour = true WHERE id = ??";
        connection.query(queryString, [id], function (err, result) {
            if (err) throw err;
            console.log(result)
        });
    }
}

module.exports = orm;