var require = meteorInstall({"server":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var Meteor = void 0;                                                 // 1
module.watch(require("meteor/meteor"), {                             // 1
  Meteor: function (v) {                                             // 1
    Meteor = v;                                                      // 1
  }                                                                  // 1
}, 0);                                                               // 1
Meteor.startup(function () {// code to run on server at startup      // 3
});                                                                  // 5
Meteor.methods({                                                     // 8
  'chargeCard': function (stripeToken, amount) {                     // 9
    check(stripeToken, String);                                      // 10
    var Stripe = StripeAPI(Meteor.settings.stripe_secret);           // 11
    Stripe.charges.create({                                          // 13
      source: stripeToken,                                           // 14
      amount: amount,                                                // 15
      currency: 'usd'                                                // 16
    }, function (err, charge) {                                      // 13
      console.log(err, charge);                                      // 18
    });                                                              // 19
  }                                                                  // 20
});                                                                  // 8
///////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./server/main.js");
//# sourceMappingURL=app.js.map
