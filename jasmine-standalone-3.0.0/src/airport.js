var Airport = function() {
  this.hangar = [];
};

Airport.prototype.land = function(plane) {
  this.hangar.push(plane);
  return plane;
};

Airport.prototype.takeOff = function(plane) {
  return plane;
};
