import DS from 'ember-data';

export default DS.Model.extend({
  lastName: DS.attr('string'),
  phone: DS.attr('string'),
  address: DS.attr('string'),
  path: DS.attr('string'),
  location: DS.attr('object'),
  timeTable: DS.attr('object')
});
