import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.resource('posts', function(){
    this.resource('post', { path: '/posts/:post_id'});
  });
  this.route('new-post');
});

export default Router;
