import Ember from 'ember';

const { get } = Ember;

export default Ember.Mixin.create({
  state: Ember.inject.service(),
  beforeModel() {
    const beforeModelTransitionCond = get(this, 'beforeModelTransitionCond');
    for (const cond of beforeModelTransitionCond) {
      if (!get(this, get(cond, 'prop'))) {
        const pathElse = get(cond, 'pathElse');
        if (pathElse) {
          this.transitionTo(pathElse);
        }
      } else {
        const pathIf = get(cond, 'pathIf');
        if (pathIf) {
          this.transitionTo(pathIf);
        } else {
          break;
        }
      }
    }
  },
});
