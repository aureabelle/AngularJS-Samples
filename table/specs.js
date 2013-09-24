describe("Testing the factory", function(){
	var transactions
	, options;
	
	beforeEach(function(){
		transactions = [
			{ date: {year: '2013', month: 'February', day: '2'}, type: 'Request Received', name: 'Sonu Test', email: 'cctesting315@hotmail.com', method: 'not applicable', status: 'Pending Acceptance', currency: '$HKD ', amount: '100', fees: '0', total: '100' },

			{ date: {year: '2013', month: 'January', day: '31'}, type: 'Deposit', name: 'Jane Doe', email: 'not applicable', method: 'Money Order / Check', status: 'Completed', currency: '$USD ', amount: '14', fees: '0', total: '14' },

			{ date: {year: '2013', month: 'January', day: '23'}, type: 'Request Sent', name: 'Professor X', email: 'acpayza@gmail.com', method: 'not applicable', status: 'Pending', currency: 'BGN ', amount: '100', fees: '0', total: '100' }
			
			];
			
		options = [{itemsPerPage: '1'}, {itemsPerPage: '2'}, {itemsPerPage: '3'}];
	});
	
	it('should get the transactions and count how many', function(){
		expect(transactions).not.toEqual(null);
		expect(transactions.length).toEqual(3);
	});

	it('should get the options and count how many', function(){
		expect(options).not.toEqual(null);
		expect(options.length).toEqual(3);
	});
	
	
	
});


/*describe("Testing the Pagination Controller", function(){

	var scope, ctrl;
	
	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope.new();

		// instantiate the controller stand-alone, without the directive
		ctrl = $controller(paginationController, {$scope: scope, $element: null});
	}));
	
	describe('it should set the default option to 2', function(){
		var optionDefault = 2;
		
		expect(optionDefault).toEqual(2);
	});
	
});*/