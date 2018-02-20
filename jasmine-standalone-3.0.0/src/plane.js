var Plane = function() {
  this.landed = false;
};

Plane.prototype.isLanded = function() {
  return this.landed;
};

Plane.prototype.land = function() {
  this.landed = true;
};

Plane.prototype.takeOff = function() {
  this.landed = false;
};
