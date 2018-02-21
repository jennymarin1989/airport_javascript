var Weather = function() {
  this.report = ["sunny", "sunny", "sunny", "stormy"]
};

Weather.prototype.randomWeather = function() {

  var randomIndex = Math.floor(Math.random() * this.report.length);
  console.log(randomIndex);
  return this.report[randomIndex];
};
