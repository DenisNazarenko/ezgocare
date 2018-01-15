import DS from 'ember-data';
import Ember from 'ember';

const { getOwner, get, computed } = Ember;

export default DS.JSONAPIAdapter.extend({
  host: computed({
    get() {
      const config = getOwner(this).resolveRegistration('config:environment');
      return get(config, 'host');
    }
  }),
  namespace: 'api'
});
