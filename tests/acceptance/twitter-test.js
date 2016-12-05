import { test } from 'qunit';
import moduleForAcceptance from 'viks-deals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | twitter');

test('visiting /twitter goes to correct page', function(assert) {
  visit('/twitter');

  andThen(function() {
    assert.equal(currentURL(), '/twitter');
  });
});
