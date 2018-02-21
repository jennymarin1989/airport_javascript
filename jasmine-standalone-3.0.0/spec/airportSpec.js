describe('Airport', function() {
  var airport;
  // var plane = jasmine.createSpyObj('plane', ['isLanded', 'land', 'takeOff']);
  var plane;
  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['isLanded', 'land','takeOff']);
    //spyOn(plane, "isLanded").and.returnValue(true)
  });

  describe('land', function() {
    it('returns a plane', function() {
      expect(airport.land(plane)).toEqual(plane);
    });

    it('raises an error if plane has landed already', function() {
      //spyOn(plane, "isLanded").and.returnValue(true)
      plane.isLanded.and.callFake(function(){return true;});
      expect(function(){airport.land(plane)}).toThrow('This plane has already landed')
    });
  });

  describe('take off', function() {
    it('returns a plane when plane takes off', function() {
      airport.land(plane);
      expect(airport.takeOff(plane)).toEqual(`${plane} has taken off`);
    });
    it('removes a plane from hangar', function() {
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.hangar).not.toContain(plane);
    });
    it('does not take off if plane is not in hangar', function(){
       expect(function(){airport.takeOff(plane)}).toThrow(`${plane} is not in hangar`)
     });

  });

  describe('hangar', function() {
    it('returns an empty array when instantiated', function() {
      expect(airport.hangar).toEqual([]);
    });

    it('can hold planes', function() {
      plane.isLanded.and.callFake(function(){return false;});
      airport.land(plane);
      expect(airport.hangar).toContain(plane);
    });
  });

  describe('is at airport', function(){
    it('return true if plane is in the hangar', function(){
      airport.land(plane)
      expect(airport.isAtAirport(plane)).toBeTruthy();
    });

    it('return false if plane is not in the hangar', function(){
      expect(airport.isAtAirport(plane)).toBeFalsy();
    });
  });

});
