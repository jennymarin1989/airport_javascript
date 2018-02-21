var Airport = function() {
  this.hangar = [];
};

Airport.prototype.land = function(plane) {
  if (plane.isLanded()) {
    throw 'This plane has already landed';
  } else {
    plane.land();
    this.hangar.push(plane);
    return plane;
  }
};

Airport.prototype.takeOff = function(plane) {
  if (!this.isAtAirport(plane)) {
    throw `${plane} is not in hangar`;
  } else {
    var index = this.hangar.indexOf(plane);
    this.hangar.splice(index, 1);
    return `${plane} has taken off`;
  }
};

Airport.prototype.isAtAirport = function(plane){
  return this.hangar.includes(plane);
};
