(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;

/* Package-scope variables */
var STRIPEMETEOR;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/mrgalaxy_stripe/stripe_server.js                         //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
this.StripeAPI = Npm.require('stripe');
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['mrgalaxy:stripe'] = {}, {
  STRIPEMETEOR: STRIPEMETEOR
});

})();
