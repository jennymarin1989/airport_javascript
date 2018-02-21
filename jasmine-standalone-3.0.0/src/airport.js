var Airport = function() {
  this.hangar = [];
  this.DEFAULT_CAPACITY = 10;
  this._capacity = this.DEFAULT_CAPACITY;
};

Airport.prototype = {
  capacity: function(number){
    return this._capacity;
  },

  setCapacity: function(number){
    this._capacity = number;
  },

  land: function(plane) {
    if (plane.isLanded()) {
      throw 'This plane has already landed';
    } else if (this.isFull()){
      throw "hangar is full";
    } else {
      plane.land();
      this.hangar.push(plane);
      return plane;
    }
  },

  takeOff: function(plane) {
    if (!this.isAtAirport(plane)) {
      throw `${plane} is not in hangar`;
    } else {
      var index = this.hangar.indexOf(plane);
      this.hangar.splice(index, 1);
      return `${plane} has taken off`;
    }
  },

  isAtAirport: function(plane){
    return this.hangar.includes(plane);
  },

  isFull: function(){
    return this.hangar.length >= this._capacity;
  },

}
