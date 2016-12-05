import { test } from 'qunit';
import moduleForAcceptance from 'viks-deals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | deals');

test('ensure correct number of deals from my SQL database', function(assert) {
  visit('/deals');

  andThen(function() {
    assert.equal(find('.product').length, 7);
  });
});
