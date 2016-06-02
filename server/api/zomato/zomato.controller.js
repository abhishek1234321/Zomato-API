'use strict';

var request = require('request');

function handleError (res, err) {
  return res.status(500).send(err);
}

/**
 * Get list of Zomato Restaurants
 *
 * @param req
 * @param res
 */
exports.index = function (req, res) {
  console.log(req.query);
  var data = {
    "entity_id": req.query.cityId,
    "entity_type": "city",
    "q": req.query.searchTerm
  }

  var options = {
    url: 'https://developers.zomato.com/api/v2.1/search',
    headers: {
      'user-key': 'c7599abdf3dfef0270e953938fe6a9bc'
    },
    qs: data
  };

  function callback(error, response, body) {
   if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      res.send(data);
   }
  }

  request(options, callback);

};
