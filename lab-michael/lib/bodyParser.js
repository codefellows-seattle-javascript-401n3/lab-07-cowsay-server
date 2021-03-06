'use strict';

  // Will parse the JSON body

module.exports = function(req, cb, err) {
  req.body = '';
  req.on('data', function(data) {
    req.body += data.toString();
  });
  req.on('end', function() {
    req.body = JSON.parse(req.body);
    cb(null, req.body);
    if(err) {
      console.error(err);
    }
  });
};