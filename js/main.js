$ (function () {
  var movieCollection = new MovieCollection();

  movieCollection.fetch().then(function () {
    var appView = new AppView({collection: movieCollection});

  });

});


// example movie
//
// Fargo
// 1996
// "Jerry Lundegaard's inept crime falls apart due to his and his henchmen's bungling and the persistent police work of the quite pregnant Marge Gunderson."
//
