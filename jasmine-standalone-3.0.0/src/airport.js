var Airport = function() {
  this.hangar = [];
  this.DEFAULT_CAPACITY = 10;
  this._capacity = this.DEFAULT_CAPACITY;
};

Airport.prototype.capacity = function(number){
  return this._capacity;
};

Airport.prototype.land = function(plane) {
  if (plane.isLanded()) {
    throw 'This plane has already landed';
  } else if (this.isFull()){
    throw "hangar is full";
  }
  else {
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

Airport.prototype.isFull = function(){
  return this.hangar.length >= this._capacity;
};

Airport.prototype.setCapacity = function(number){
  this._capacity = number;
};
