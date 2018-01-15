import Ember from 'ember';
import BeforeModelMixin from '../mixins/before-model';

export default Ember.Route.extend(BeforeModelMixin, {
  beforeModelTransitionCond: [
    {
      prop: 'state.allDataValid',
    },
    {
      prop: 'state.requestDataValid',
      pathIf: 'request',
      pathElse: 'doctors'
    }
  ]
});
