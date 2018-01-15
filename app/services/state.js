import Ember from 'ember';
import moment from 'moment';

const LOCATION_STATE_IDENTIFIER = 'ezgocare_location';

const { computed, set, get, isEmpty } = Ember;

export default Ember.Service.extend({
  _symptomState: null,
  symptomState: computed.readOnly('_symptomState'),

  _insuranceState: null,
  insuranceState: computed.readOnly('_insuranceState'),

  _locationState: null,
  locationState: computed('_locationState', {
    get() {
      let _locationState = get(this, '_locationState');
      if (isEmpty(_locationState) && window && window.localStorage) {
        _locationState = localStorage.getItem(LOCATION_STATE_IDENTIFIER);
        set(this, '_locationState', _locationState);
      }
      return _locationState;
    }
  }),
  _setLocationState(item) {
    if (window && window.localStorage) {
      localStorage.setItem(LOCATION_STATE_IDENTIFIER, item);
    }
    set(this, '_locationState', item);
  },

  requestDataValid: computed.and('locationState', 'insuranceState', 'symptomState'),

  appointmentDataValid: computed.and('selectedDoctor', 'selectedTime'),

  allDataValid: computed.and('appointmentDataValid', 'requestDataValid'),

  _dateState: null,
  dateState: computed('_dateState', {
    get() {
      let _dateState = get(this, '_dateState');
      if (isEmpty(_dateState)) {
        _dateState = moment();
        set(this, '_dateState', _dateState);
      }
      return _dateState;
    }
  }),

  _selectedDoctor: null,
  selectedDoctor: computed.readOnly('_selectedDoctor'),

  _selectedTime: null,
  selectedTime: computed.readOnly('_selectedTime'),


  setState(item, prop) {
    const propSetter = get(this, `_set${prop.slice(1, prop.length).capitalize()}`);
    if (propSetter) {
      propSetter.call(this, item);
    } else {
      set(this, prop, item);
    }
  }
});
