import Ember from 'ember';
const { getProperties, get } = Ember;
import RecognizerMixin from 'ember-gestures/mixins/recognizers';

export default Ember.Component.extend(RecognizerMixin, {
  routing: Ember.inject.service('-routing'),
  state: Ember.inject.service(),
  classNameBindings: ['available:available:booked'],
  click() {
    const{routing, state, doctor, tiav} = getProperties(this, 'routing', 'state', 'doctor', 'tiav');
    if (get(tiav, 'available')) {
      state.setState(doctor, '_selectedDoctor');
      state.setState(tiav, '_selectedTime');
      routing.transitionTo('appointment');
    }
  },
  recognizers: 'tap',
  tap() {
    this.click.call(this);
  }
});
