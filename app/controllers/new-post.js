import Ember from "ember";

var PostController = {
  actions: {
    save: function() {
      var newPost = this.store.createRecord('post', {
      title: this.get('title'),
      body: this.get('body')
    });

      
      this.transitionToRoute('posts');

    }
  }
};

export default Ember.ObjectController.extend(PostController);
