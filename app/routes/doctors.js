import Ember from 'ember';
import RSVP from 'rsvp';
import BeforeModelMixin from '../mixins/before-model';


export default Ember.Route.extend(BeforeModelMixin, {
  beforeModelTransitionCond: [
    {
      prop: 'state.requestDataValid',
      pathElse: 'request'
    }
  ],
  model() {
    return RSVP.hash({
      doctors: this.get('store').findAll('doctor')
    });
  }
});
