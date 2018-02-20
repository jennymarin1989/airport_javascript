describe('Plane', function() {
  var plane;
  // var airport = jasmine.createSpyObj('airport', ['land']);
  beforeEach(function() {
    plane = new Plane();
  });

  describe('is landed', function() {
    it('returns false when instantiated', function() {
      expect(plane.isLanded()).toEqual(false);
    });

    it('returns true when landed', function() {
      plane.land();
      expect(plane.isLanded()).toEqual(true);
    });

    it('returns false when taken off', function() {
      plane.land();
      plane.takeOff();
      expect(plane.isLanded()).toEqual(false);
    });
  });
});
