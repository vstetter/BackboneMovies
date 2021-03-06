// Model View

var MovieView = Backbone.View.extend ({
  template: _.template($("#movieTmpl").html()),
  tagName: 'article',
  initialize: function () {
    //console.log(this.el);
  },
  events: {
    "click .deleteMovie": "removeMovie",
    "click .editMovie": "showEdit",
    "click .updateMovieInfo": "editMovie"
  },

  showEdit: function () {
    this.$el.find('.editform').addClass('show');
    console.log(this.model.toJSON());
  },

  editMovie: function (event) {
    console.log('submit edit');
    event.preventDefault();
    this.model.set({
      image: this.$el.find('input[class="editImage"]').val(), //or this.$(rest the same)?
      title: this.$el.find('input[class="editTitle"]').val(),
      releaseDate: this.$el.find('input[class="editReleaseDate"]').val(),
      synopsis: this.$el.find('input[class="editSynopsis"]').val()
    });
    console.log(this.model.toJSON());
    this.model.save();
    this.$el.find('.editform').removeClass('show');
    this.render();
  

  },

  render: function () {
    //console.log(this.el);
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);

    return this;
  },

  removeMovie: function () {
    this.$el.remove();
    this.model.destroy();
  }



});



//Collection View

var AppView = Backbone.View.extend({
  el: $('section'),
  initialize: function () {
    console.log("AppView initialized");
    this.addAllMovies();
  },
  events: {
    "click .showCreate": "showCreate",
    "submit #createMovie": "createMovie"
  },
  createMovie: function (event) {
    event.preventDefault();
    var newMovie = {
      image: $('#createMovie').find('input[name="newImage"]').val(),
      title: $('#createMovie').find('input[name="newTitle"]').val(),
      releaseDate: $('#createMovie').find('input[name="newReleaseDate"]').val(),
      synopsis: $('#createMovie').find('textarea[name="newSynopsis"]').val()
    };

    var newModelMovie = new MovieModel(newMovie);
    newModelMovie.save();
    console.log(this.collection.length);
    this.collection.add(newModelMovie);
    // this.$el.find('article').remove();
    console.log(this.collection.length);
    this.addOneMovie(newModelMovie);
    this.$el.find('#createMovie').find('input, textarea').val('');
    this.showCreate();
  },

  showCreate: function () {
    this.$el.find('#createMovie').toggleClass('show');
  },

  addOneMovie: function (movie) {
    var movieView = new MovieView({model: movie});
    this.$el.append(movieView.render().el);
  },

  addAllMovies: function () {
    _.each(this.collection.models, this.addOneMovie, this)

  }

});
