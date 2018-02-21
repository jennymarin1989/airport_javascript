describe('Weather', function() {
  var weather = new Weather();

  it('returns sunny some of the time', function(){
    spyOn(Math, 'random').and.returnValue(0.1);
    expect(weather.randomWeather()).toEqual("sunny");
  });
});
