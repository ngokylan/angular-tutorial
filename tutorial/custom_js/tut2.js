function PhoneListCtrl($scope){
	$scope.phones = [
		{"name":"Nexus S", "snippet": "Fast just got faster with Nexus S."},
		{"name":"Motorola XOOM with wifi", "snippet": "The Next, Next Generation tablet."},
		{"name": "Motorola XOOM", "snippet": "The Next, Next Generation tablet."}
	];
	
	$scope.hello = 'Hello World!';
}



//Test
describe('PhoneCat controllers', function() {
 
  describe('PhoneListCtrl', function(){
 
    it('should create "phones" model with 3 phones', function() {
      var scope = {},
          ctrl = new PhoneListCtrl(scope);
 
      expect(scope.phones.length).toBe(3);
    });
  });
});

