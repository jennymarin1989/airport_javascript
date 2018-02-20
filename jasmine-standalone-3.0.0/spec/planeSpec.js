describe('Plane', function(){
  var plane = new Plane();

  describe('is landed', function(){
    it('returns true if landed', function(){
      expect(plane.isLanded()).toEqual(false)
    });

  });


})
