import DS from 'ember-data';

export default DS.Model.extend({
  symptoms: DS.attr('string'),
  insurance: DS.attr('string')
});
