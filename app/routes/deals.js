import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {
		var promise = Ember.$.ajax({
			type: 'get',
			url: 'https://vik-api.herokuapp.com/api/products'
		});

		return promise;
	}

});
