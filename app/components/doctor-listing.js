import Ember from 'ember';
const { computed, get } = Ember;

export default Ember.Component.extend({
  timeTableLeft: computed(
    'doctor.timeTable', {
      get() {
        const timeTable = get(this, 'doctor.timeTable');
        return timeTable.filter(item => item.timeOfDay === 'am');
      }
    }),
  timeTableRight: computed.filterBy('doctor.timeTable', 'timeOfDay', 'pm')
});
