import { test } from 'qunit';
import moduleForAcceptance from 'viks-deals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | tutorials');

test('TUTORIAL NUMBER TEST', function(assert) {
  visit('/tutorials');

  andThen(function() {
    assert.equal(find('.tutorial').length, 5);
  });
});
