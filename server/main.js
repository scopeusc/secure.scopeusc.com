import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});


Meteor.methods({
    'chargeCard': function(stripeToken, amount) {
      check(stripeToken, String);
      var Stripe = StripeAPI(Meteor.settings.stripe_secret);

      Stripe.charges.create({
        source: stripeToken,
        amount: amount,
        currency: 'usd'
      }, function(err, charge) {
        console.log(err, charge);
      });
    }
  });
