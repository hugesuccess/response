<<<<<<< HEAD
# Response

## Standard API response's for Express API's

A simple package to build standard API response messages in an Express app.

To create a new API response simply use the build command, which accepts the express resopnse as the first parameter and message to be sent back to the client in the API response as the second.


Example:

````
var rs = require('rs');

// 1st param is the express response object
// Second is the message to be sent to the user
app.get('/api/foo', function(req, res) {
  return rs.build(res, msg);
})
````

To build a generic response message simply use the .message method. Add the correct response code ad the first parameter and an optional 2nd parameter which appends data (probs the response from the database).

Example:

````
var msg = rs.message(200);
````

To append data from a database to a response message:

````
// 2nd paramater accepts data
collection.find({}, function(err, things) {
  var msg = rs.message(200, things);
});
````

Complete usage example:

````
app.get('api/foo', function(req, res) {
  collection.find({}, function(err, things) {
    if(err) return rs.build(res, rs.message(500));
    return rs.build(res, rs.message(200, things));
  });
});
````

To add custom attributes to the response message:

````
app.get('api/foo', function(req, res) {
    collection.find({}, function(err, things) {
      if(err) return rs.build(res, rs.message(500));
      var msg = rs.message(200, things);
      msg.foo = 'bar';
      return rs.build(res, msg);
      });
    });
````



=======
# response
A small module which builds standard API responses in Express.js
>>>>>>> 00cc52f7d3a54f96ba84d3fd2e95f49aa12ddca3
