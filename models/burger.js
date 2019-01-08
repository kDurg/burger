var orm = require("../config/orm");

// create code that calls ORM functions

var burgers = {
  all: function(callback) {
    orm.all("burgers", function(res) {
      res.body(callback);
    });
  },
  create: function(burger_name, devoured) {
    orm.create("burgers", burger_name, devoured, function(res) {
      res.body(callback);
    });
  },
  update: function(burger_name, devoured) {
    orm.update("burgers", burger_name, devoured, function(res) {
      res.body(callback);
    });
  },
};

// export data
module.exports = burgers;