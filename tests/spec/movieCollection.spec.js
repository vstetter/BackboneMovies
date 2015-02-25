describe("Movie Collection", function () {
  beforeEach(function () {
    this.movieCollection = new MovieCollection();
  });
  it("should be an instance of MovieCollection", function () {
    expect(this.movieCollection).is.instanceof(MovieCollection);
  });

  it("should have correct url", function () {
    expect(this.movieCollection.url).to.be.ok;
    expect(this.movieCollection.url).to.be.equal('http://tiy-fee-rest.herokuapp.com/collections/vsmovies');
  });

});
