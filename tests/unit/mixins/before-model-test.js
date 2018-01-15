import Ember from 'ember';
import BeforeModelMixin from 'ezgocare/mixins/before-model';
import { module, test } from 'qunit';

module('Unit | Mixin | before model');

// Replace this with your real tests.
test('it works', function(assert) {
  let BeforeModelObject = Ember.Object.extend(BeforeModelMixin);
  let subject = BeforeModelObject.create();
  assert.ok(subject);
});
