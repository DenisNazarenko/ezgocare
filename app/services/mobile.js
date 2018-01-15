import Ember from 'ember';

const { set, computed, get, isEmpty, run } = Ember;

const MOBILE_WIDTH = 550;

export default Ember.Service.extend({
  init() {
    if (window && window.innerWidth) {
      run.scheduleOnce('afterRender', () => {
        set(this, '_currentWidth', window.innerWidth);
      });
    }
  },
  currentWidth: computed('_currentWidth', {
    get() {
      const _currentWidth = get(this, '_currentWidth');
      return isEmpty(_currentWidth) ? MOBILE_WIDTH : _currentWidth;
    }
  }),
  mobileWidth: computed.lte('currentWidth', MOBILE_WIDTH)
});
