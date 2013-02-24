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
  	
  	beforeEach(function(){
  		browser().navigateTo('../../index.html')
  	})
 
    it('should filter the phone list as user types into the search box', function(){
    	expect(repeater('.phones li').count()).toBe(3);
    	
    	input('query').enter('nexus');
    	expect(repeater('.phones li').count()).toBe(1);
    	
    	input('query').enter('motorola');
    	expect(repeater('.phones li').count()).toBe(2);
    })
  });
});

