var MovieModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/vsmovies',
  idAttribute: "_id",
  defaults: function () {
    return {
      image: '../images/FargoPoster.jpg'
    };

  },
  initialize: function () {
    console.log("Moviemodel was created");
  }

});
