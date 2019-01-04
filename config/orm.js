var connection = require("./connection.js");

var orm = {
    selectAll: function () {
        var queryString = "SELECT * FROM burger_db";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result)
        });
    },
    insertOne: function (name, devoured) {
        var queryString = "INSERT INTO burger_db VALUE(name, devoured)";
        connection.query(queryString, [name, devoured], function (err, result) {
            if (err) throw err;
            console.log(result)
        });
    },
    updateOne: function (id) {
        var queryString = "UPDATE burger_db SET devour = true WHERE id = ??";
        connection.query(queryString, [id], function (err, result) {
            if (err) throw err;
            console.log(result)
        });
    }
}

module.exports = orm;