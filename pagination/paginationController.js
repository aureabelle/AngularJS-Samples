var transactionsApp = angular.module('transactionsApp', []);
	
	transactionsApp.factory('transactionsFactory', function(){
		var transactions = [
			{ date: {year: '2013', month: 'February', day: '2'}, type: 'Request Received', name: 'Sonu Test', email: 'cctesting315@hotmail.com', method: 'not applicable', status: 'Pending Acceptance', currency: '$HKD ', amount: '100', fees: '0', total: '100' },

			{ date: {year: '2013', month: 'January', day: '31'}, type: 'Deposit', name: 'Jane Doe', email: 'not applicable', method: 'Money Order / Check', status: 'Completed', currency: '$USD ', amount: '14', fees: '0', total: '14' },

			{ date: {year: '2013', month: 'January', day: '23'}, type: 'Request Sent', name: 'Professor X', email: 'acpayza@gmail.com', method: 'not applicable', status: 'Pending', currency: 'BGN ', amount: '100', fees: '0', total: '100' },

			{ date: {year: '2013', month: 'January', day: '23'}, type: 'Transfer Sent', name: 'Peter Parker', email: 'acpayza@gmail.com', method: 'not applicable', status: 'Pending', currency: '$CAD ', amount: '1000', fees: '0', total: '1000' },

			{ date: {year: '2012', month: 'October', day: '9'}, type: 'Withdrawal', name: 'Clark Kent', email: 'not applicable', method: 'Check', status: 'Pending', currency: '$USD ', amount: '90', fees: '0', total: '90' },
			
			{ date: {year: '2012', month: 'November', day: '9'}, type: 'Withdrawal', name: 'Doree', email: 'not applicable', method: 'Check', status: 'Pending', currency: '$USD ', amount: '90', fees: '0', total: '90' },
			
			{ date: {year: '2011', month: 'October', day: '9'}, type: 'Payment', name: 'Speedy Gonzales', email: 'not applicable', method: 'Check', status: 'Pending', currency: '$USD ', amount: '90', fees: '0', total: '90' },
			
			{ date: {year: '2011', month: 'March', day: '4'}, type: 'Payment', name: 'Tazmanian Devil', email: 'not applicable', method: 'Check', status: 'Pending', currency: '$USD ', amount: '90', fees: '0', total: '90' },
			
			{ date: {year: '2011', month: 'May', day: '13'}, type: 'Payment', name: 'Magilla Gorilla', email: 'not applicable', method: 'Check', status: 'Pending', currency: '$USD ', amount: '90', fees: '0', total: '90' },
			
			{ date: {year: '2012', month: 'October', day: '9'}, type: 'Withdrawal', name: 'Bilbo Baggins', email: 'not applicable', method: 'Check', status: 'Pending', currency: '$USD ', amount: '90', fees: '0', total: '90' },
			
			{ date: {year: '2012', month: 'November', day: '9'}, type: 'Withdrawal', name: 'Hero Nakamura', email: 'not applicable', method: 'Check', status: 'Pending', currency: '$USD ', amount: '90', fees: '0', total: '90' },
			
			{ date: {year: '2011', month: 'October', day: '9'}, type: 'Payment', name: 'Miss Piggy', email: 'not applicable', method: 'Check', status: 'Pending', currency: '$USD ', amount: '90', fees: '0', total: '90' },
			
			{ date: {year: '2011', month: 'March', day: '4'}, type: 'Payment', name: 'Kermit The Frog', email: 'not applicable', method: 'Check', status: 'Pending', currency: '$USD ', amount: '90', fees: '0', total: '90' },
			
			{ date: {year: '2011', month: 'May', day: '13'}, type: 'Payment', name: 'Cookie Monster', email: 'not applicable', method: 'Check', status: 'Pending', currency: '$USD ', amount: '90', fees: '0', total: '90' },
	
			{ date: {year: '2011', month: 'January', day: '2'}, type: 'Payment', name: 'Bugs Bunny', email: 'bug.bunny@email.com', method: 'Bank Transfer', status: 'Completed', currency: '$USD ', amount: '200', fees: '0', total: '200' }
		];
		
		
		var options = [ {itemsPerPage: '1'}, {itemsPerPage: '2'}, {itemsPerPage: '3'}, {itemsPerPage: '4'}, {itemsPerPage: '5'}, {itemsPerPage: '6'}, {itemsPerPage: '7'}, {itemsPerPage: '8'}, {itemsPerPage: '9'}, {itemsPerPage: '10'} ];
								
		var factory = {};
					
		factory.getTransactions = function(){
			return transactions;
		};
		
		factory.getOptions = function(){
			return options;
		};
		
		return factory;

	});
	
	var paginationController = function($scope, $element, transactionsFactory){
		// Get the transactions and render into the page
		$scope.transactions = transactionsFactory.getTransactions();
		
		// Capture the original list of transactions
		var trans = transactionsFactory.getTransactions();
		
		// Get the option choices, set and output the default value
		$scope.options = transactionsFactory.getOptions();
		$scope.option = $scope.options[1]; // Select the default limit
		$scope.limit = parseFloat( $scope.options[1].itemsPerPage ); // Output the default limit value
		
		// Initialize the page numbers and set the active page to the first page
		$scope.pages = [];			
		$scope.numOfPages = Math.ceil( $scope.transactions.length / $scope.limit );
		$scope.activePage = 1;
		createPagination($scope.numOfPages, $scope.pages);
		
		$scope.setLimit = 5;
		groupPages();
		
		// Place the page numbers into sets of 5
		function groupPages(){
			var pageSet = $scope.pages
			, activePg = $scope.activePage
			, newSet = [];
			
			// Checks if the number of pages is more than set limit (5)
			// If true, the following will be executed.
			// The newSet array length should be equal to the set limit (5) value
			if($scope.numOfPages >= $scope.setLimit){
				if(activePg === 1){
					newSet = [activePg, activePg1, activePg2, activePg3, activePg4];
					$scope.pages = newSet;
				}else if(activePg >= 3 && activePg < $scope.numOfPages-1){
					newSet = [activePg-2, activePg-1, activePg, activePg1, activePg2];
					$scope.pages = newSet;
				}else if(activePg === $scope.numOfPages){
					newSet = [activePg-4, activePg-3, activePg-2, activePg-1, activePg];
					$scope.pages = newSet;
				}
			}
			
		}
		
		// goToPage function: Go from page number to page number
		$scope.goToPage = function(p){
			var pageNum =  p
			, increment = $scope.limit
			, startSlice = (increment * pageNum) - increment
			, endSlice = increment * pageNum
			, updatedList = [];
			
			// Outputs the transactions in each page 
			updatedList = trans.slice(startSlice, endSlice);
			$scope.transactions = updatedList;
			$scope.activePage = pageNum; 
			
			// Updates the page number order
			groupPages();
		};
		
		// nextPage function: Goes to the next page using the next button
		$scope.nextPage = function(){
			var nxtPage = $scope.activePage1;
			if(nxtPage <= $scope.numOfPages){
				$scope.goToPage(nxtPage);
			}
		};
		
		// previousPage function: Goes to the previous page using the previous button
		$scope.previousPage = function(){
			var prevPage = $scope.activePage-1;
			if(prevPage >= 1){
				$scope.goToPage(prevPage);
			}
		};
		
		$scope.hideButton = function(){
			return $scope.activePage;
		};
		
		// setActive function: sets the class name of the selected page number to "active"
		$scope.setActive = function(){
			if(this.page == $scope.activePage){
				return 'active';
			}
		};
		
		// selectChange function: sets the limit items per page
		$scope.selectChange = function(opt){
			var limit = parseFloat( opt.itemsPerPage );
			$scope.limit = limit; // Sets new limit
			
			$scope.transactions = transactionsFactory.getTransactions();
			
			// Updates the pagination depending on the selected limit per page
			$scope.pages = [];
			$scope.numOfPages = Math.ceil( transactionsFactory.getTransactions().length / $scope.limit );
			$scope.activePage = 1;
			createPagination($scope.numOfPages, $scope.pages);
			
			/*setLength = $scope.pages.length;*/
			groupPages();
		};
		
		// createPagination function: creates / updates the pagination
		function createPagination(numberOfPages, pagesArray){
			for(var p=0; p < numberOfPages; p){
				var pageNum = p1;
				
				pagesArray.push(pageNum);
			}
			
		}					
	};
	
	transactionsApp.directive('pagination', function(){
		return {
			restrict: 'C',
			controller: 'paginationController',
			
			template: 
				'<button data-ng-click="previousPage()" class="btn" data-ng-hide="hideButton() == 1">Previous</button>'
				'<ul>'
					'<li data-ng-repeat="page in pages | limitTo: setLimit" data-ng-class="setActive()">'
						'<a href="" data-ng-click="goToPage(page)">{{ page-number }}</a>'
					'</li>'
				'</ul>'
				'<button data-ng-click="nextPage()" class="btn" data-ng-hide="hideButton() == numOfPages ">Next</button>'
				'<p>Page {{ activePage }} of {{ numOfPages }}</p>'
				'<label for="items_per_page">Items per page</label>'
				'<select id="items_per_page" data-ng-model="option" data-ng-options="option.itemsPerPage for option in options" data-ng-change="selectChange(option)"></select>',
			
			// Should have a local server to work locally for Chrome, IE, Opera
			/*templateUrl: 'pagination.html',*/
			
			replace: false
			
		};
	});
