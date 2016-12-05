import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {
		var promise = Ember.$.ajax({
			type: 'get',
			url: 'https://vik-twitter.herokuapp.com/tweets'
		});

		return promise;
	}
});
