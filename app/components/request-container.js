import Ember from 'ember';
const { computed, get, set, getProperties } = Ember;
import service from 'ember-service/inject';

export default Ember.Component.extend({
  mobile: service('mobile'),
  mobileWidth: computed.readOnly('mobile.mobileWidth'),
  state: service(),
  currentFilterQuery: '',

  filteredInsurance: computed(
    'currentFilterQuery',
    'insurance', {
      get() {
        const {
          insurance,
          currentFilterQuery
        } = getProperties(this, [
          'insurance',
          'currentFilterQuery'
        ]);
        if (currentFilterQuery === '') {
          return insurance;
        }
        return insurance.filter((insurance) => {
          return get(insurance, 'data.name').toLowerCase().includes(currentFilterQuery.toLowerCase());
        });
      }
    }
  ),

  filteredSymptoms: computed(
    'currentFilterQuery',
    'symptoms', {
      get() {
        const {
          symptoms,
          currentFilterQuery
        } = getProperties(this, [
          'symptoms',
          'currentFilterQuery'
        ]);
        if (currentFilterQuery === '') {
          return symptoms;
        }
        return symptoms.filter((symptom) => {
          return get(symptom, 'data.name').toLowerCase().includes(currentFilterQuery.toLowerCase());
        });
      }
    }),

  actions: {
    filterBySymptoms(param) {
      set(this, 'currentFilterQuery', param);
    },

    filterByInsurance(param) {
      set(this, 'currentFilterQuery', param);
    },

    changed(prop, item) {
      const state = get(this, 'state');
      state.setState(item, prop);
    }
  }
});
