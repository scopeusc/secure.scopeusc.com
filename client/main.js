import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

//import './main.html';

Template.hello.onCreated(function helloOnCreated() {
});

Template.hello.helpers({
});

Template.hello.events({
    'click button': function(e) {
      e.preventDefault();

      var amount = $('input#amount').val();
      amount = amount.replace(/\$/g, '').replace(/\,/g, '')

      amount = parseFloat(amount);

      if (isNaN(amount)) {
        $('#error_explanation').html('<p>Please enter a valid amount in USD ($).</p>');
        return;
      }
      else if (amount < 5.00) {
        $('#error_explanation').html('<p>Sponsorship amount must be at least $5.</p>');
        return;
      }
      else {
        amount = amount * 100; // Needs to be an integer!
        StripeCheckout.open({
        key: Meteor.settings.public.stripe_public,
        amount: Math.round(amount),
        name: 'Scope',
        description: 'Sponsorship payment',
        panelLabel: 'Pay',
        token: function(res) {
          stripeToken = res.id;
          console.info(res);
          Meteor.call('chargeCard', stripeToken, Math.round(amount));
        }
      });
      }

  },
});
