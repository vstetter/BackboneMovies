describe("Movie Model", function () {
  beforeEach(function () {
    this.movieModel = new MovieModel();
    this.movieStub = sinon.stub(this.movieModel, 'save');
  });
  it("should be an instance of MovieModel Class", function () {
    expect(this.movieModel).is.instanceof(MovieModel);
  });
  it("should have correct urlRoot", function () {
    expect(this.movieModel.urlRoot).to.be.ok;
    expect(this.movieModel.urlRoot).to.be.equal('http://tiy-fee-rest.herokuapp.com/collections/vsmovies');
  });
  it("should be able to add property to model", function () {
    expect(this.movieModel.attributes.title).to.not.be.ok;
    this.movieModel.set({title: "Star Wars"});
    expect(this.movieModel.attributes.title).to.equal("Star Wars");
  });
  it("should save my model when I call save", function () {
    this.movieModel.set({title: "Lego Movie"});
    this.movieModel.save();

    expect(this.movieStub).to.have.been.calledTwice;
  });
  it("should have a default image", function () {
    expect(this.movieModel.attributes.image).to.equal('../images/FargoPoster.jpg');
  })


});
