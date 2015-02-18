var MovieModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/vsmovies',
  idAttribute: "_id",
  defaults: function () {
    return {
      movieImage: 'http://ia.media-imdb.com/images/M/MV5BMTgxNzY3MzUxOV5BMl5BanBnXkFtZTcwMDA0NjMyNA@@._V1_SX214_AL_.jpg'

    };

  },
  initialize: function () {
    console.log("Moviemodel was created");
  }

});
