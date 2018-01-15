import Ember from 'ember';
import NoZoomMixin from 'ezgocare/mixins/no-zoom';
import { module, test } from 'qunit';

module('Unit | Mixin | no zoom');

// Replace this with your real tests.
test('it works', function(assert) {
  let NoZoomObject = Ember.Object.extend(NoZoomMixin);
  let subject = NoZoomObject.create();
  assert.ok(subject);
});
