import Ember from 'ember';
import RSVP from 'rsvp';

const { isEmpty } = Ember;

export default Ember.Route.extend({
  model() {
    const symptoms = this.store.peekAll('symptom');
    const insurance = this.store.peekAll('insurance');
    if (!isEmpty(symptoms) && !isEmpty(insurance)) {
      return {
        symptoms,
        insurance
      };
    } else {
      return RSVP.hash({
        symptoms: this.get('store').findAll('symptom'),
        insurance: this.get('store').findAll('insurance')
      });
    }
  }
});
