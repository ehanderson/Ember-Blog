App = Ember.Application.create();

App.Router.map(function(){
  this.resource('about');
  this.resource('posts', function(){
  this.resource('post', {path: ':post_id'});

  });
});

App.PostsRoute = Ember.Route.extend({
  model: function(){
    return posts;
  }
});

App.PostController = Ember.ObjectController.extend({
  isEditing: false,
    actions: {
      edit: function(){
        this.set('isEditing', true);
      },
      doneEditing: function(){
        this.set('isEditing', false);
      }
    }
});

var posts = [{
  id: '1',
  title: 'My first attempt with Ember',
  author: {name: 'emily'},
  date: new Date('01-10-2014'),
  excerpt: "Today I tried to understand ember by doing their todo tutorial.",
  body: "Due to the face I did not have the starter kit installed, it did not work and it took time to figure out why!"
}, {
  id: '2',
  title: 'My second attempt with Ember',
  author: {name: 'emily'},
  date: new Date('01-27-2014'),
  excerpt: "Today I tried to understand ember by doing their blog tutorial.",
  body: "I also learned about ember inspector. Ember makes things easy!"
}]
