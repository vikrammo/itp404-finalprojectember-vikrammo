import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {

    return Ember.$.ajax({

      url: 'https://www.reddit.com/r/coupons.json'

    }).then(function(json) {

      return json.data.children;
    });
  }
});
