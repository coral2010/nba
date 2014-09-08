var request = require( "request" );

var Promise = require( "./promise" );

module.exports = function jsonStrategy ( url, query ) {
  return new Promise( function ( resolve, reject ) {
    request({
      url: url,
      qs: query,
      json: true
    }, function ( err, resp, body ) {
      if ( err ) {
        return reject();
      }
      resolve( body );
    });
  });
};