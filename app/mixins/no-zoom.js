import Ember from 'ember';

let lastTouchEnd = 0;

function zoomTouchEnd(event) {
  let now = (new Date()).getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}

function zoomTouchStart(event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}

export default Ember.Mixin.create({
  didInsertElement(){
    this._super(...arguments);
    if (document && document.documentElement) {
      document.documentElement.addEventListener('touchend', zoomTouchEnd, false);
      document.documentElement.addEventListener('touchstart', zoomTouchStart, false);
    }
  },
  willDestroyElement() {
    this._super(...arguments);
    if (document && document.documentElement) {
      document.documentElement.removeEventListener('touchend', zoomTouchEnd, false);
      document.documentElement.removeEventListener('touchstart', zoomTouchStart, false);
    }
  }
});
