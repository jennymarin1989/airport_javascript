describe("Airport", function(){
  var airport = new Airport();

  describe("land", function(){
    it('returns a plane', function(){
      expect(airport.land("plane")).toEqual("plane")

    });
  });
  describe("take off", function(){
    it("returns a plane when plane takes off", function(){
      expect(airport.takeOff("plane")).toEqual("plane")
    });
  });
  describe("hangar", function(){
    it("returns an empty array when instantiated", function(){
      expect(airport.hangar()).toEqual([])
    });
  });


})
