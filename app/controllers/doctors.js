import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  state: Ember.inject.service(),
  actions: {
    onSelectedDate(date) {
      const state = this.get('state');
      state.setState(moment(date), '_dateState');
    }
  }
});
