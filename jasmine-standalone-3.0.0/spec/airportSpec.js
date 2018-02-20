describe('Airport', function() {
  var airport;
  // var plane = jasmine.createSpyObj('plane', ['isLanded', 'land', 'takeOff']);
  var plane;
  beforeEach(function() {
    airport = new Airport();
    // plane = {
    //   isLanded: function() {}
    // };
    plane = new Plane();
  });

  describe('land', function() {
    it('returns a plane', function() {
      expect(airport.land('plane')).toEqual('plane');
    });

    it('raises an error if plane has landed already', function() {
      airport.land(plane);
      expect(function() {
        airport.land(plane);
      }).toThrow(new Error('This plane has already landed'));
    });
  });
  describe('take off', function() {
    it('returns a plane when plane takes off', function() {
      airport.land(plane);
      expect(airport.takeOff(plane)).toEqual(`${plane} has taken off`);
    });
    it('removes a plane from hangar', function() {
      airport.land('plane');
      airport.takeOff('plane');
      expect(airport.hangar).not.toContain('plane');
    });
  });
  describe('hangar', function() {
    it('returns an empty array when instantiated', function() {
      expect(airport.hangar).toEqual([]);
    });

    it('can hold planes', function() {
      airport.land('plane');
      expect(airport.hangar).toContain('plane');
    });
  });
});
