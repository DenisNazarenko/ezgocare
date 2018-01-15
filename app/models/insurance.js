import DS from 'ember-data';
import Ember from 'ember';

const inflector = Ember.Inflector.inflector;
inflector.uncountable('insurance');


export default DS.Model.extend({
  name: DS.attr('string')
});
