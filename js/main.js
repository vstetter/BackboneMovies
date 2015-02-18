$ (function () {
  var movieCollection = new MovieCollection();

  movieCollection.fetch().then(function () {
    var appView = new AppView({collection: movieCollection});

  });

});


// example movie
//
// 'http://ia.media-imdb.com/images/M/MV5BMTgxNzY3MzUxOV5BMl5BanBnXkFtZTcwMDA0NjMyNA@@._V1_SX214_AL_.jpg'
// Fargo
// 1996
// "Jerry Lundegaard's inept crime falls apart due to his and his henchmen's bungling and the persistent police work of the quite pregnant Marge Gunderson."
//
