// Array.find polyphill from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

var comments = [{
  id: 1,
  text: "this is a great comment",
  post: 1
},

{
  id: 2,
  text: "This is also a great comment",
  post: 2
},

{
  id: 3,
  text: "This is the greatest comment",
  post: 2
}];

var posts = [{
  id: 1,
  title: 'Bananas',
  body: 'Whoa, bananas are awesome!',
  comments: [1]
},

{
  id: 2,
  title: 'Apples',
  body: 'Oh no, apples suck!',
  comments: [2,3]
}];



module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      'posts': posts,
      'comments': comments
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'post': posts.find(function(post){
          return post.id == req.params.id
      }),
      'comments': comments
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};
