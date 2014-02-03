App = Ember.Application.create();

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
}];

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

App.PostRoute = Ember.Route.extend({
  model: function(params){
    return posts.findBy('id', params.post_id);
  }
});

App.PostController = Ember.ObjectController.extend({
  isEditing: false,
      edit: function(){
        this.set('isEditing', true);
      },
      doneEditing: function(){
        this.set('isEditing', false);
    }
});

Ember.Handlebars.helper('format-date', function(date){
    return moment(date).fromNow();
});

// var showdown = new Showdown.converter();

// Ember.Handlebars.helper('format-markdown', function(input){
//   return new Handlebars.SafeString(showdown.makeHtml(input));
// });


