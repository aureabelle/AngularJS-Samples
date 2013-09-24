angular.module('accountActivities', [])
	.factory('activityList', function(){
		var activities = [
			/* Business */
			// Website
			{category: 'Business', title: 'Added website', link: 'something.aspx', feature: { name: 'website', properties: {url: 'website.com', status: 'declined'} }, timestamp: '12 hours ago'},
			{category: 'Business', title: 'Added website', link: 'something.aspx', feature: { name: 'website', properties: {url: 'something.com', status: 'approved'} }, timestamp: '1 hour ago'},
			{category: 'Business', title: 'Added website', link: 'something.aspx', feature: { name: 'website', properties: {url: 'oo0022.com', status: 'awaiting approval'} }, timestamp: '5 days ago'},
			{category: 'Business', title: 'Added website, not reviewed', link: 'something.aspx', feature: { name: 'website', properties: {url: 'rertrr.com', status: 'under review'} }, timestamp: '10 days ago'},
			{category: 'Business', title: 'Removed website', link: 'something.aspx', feature: { name: 'website', properties: {url: 'blaaahs.com', status: 'removed'} }, timestamp: '5 hours ago'},
			
			// Buttons
			{category: 'Business', title: 'Added Buy Now button', link: 'something.aspx', feature: { name: 'payment button', properties: {type: 'Buy Now', action: 'add', status: 'added'} }, timestamp: '5 hours ago'},
			{category: 'Business', title: 'Added Subscription button', link: 'something.aspx', feature: { name: 'payment button', properties: {type: 'Subscription', action: 'add', status: 'added'} }, timestamp: '5 hours ago'},
			{category: 'Business', title: 'Added Donation button', link: 'something.aspx', feature: { name: 'payment button', properties: {type: 'Donation', action: 'add', status: 'added'} }, timestamp: '5 hours ago'},
			
			{category: 'Business', title: 'Edited Buy Now button', link: 'something.aspx', feature: { name: 'payment button', properties: {type: 'Buy Now', action: 'edit', status: 'edited'} }, timestamp: '5 hours ago'},
			{category: 'Business', title: 'Edited Subscription button', link: 'something.aspx', feature: { name: 'payment button', properties: {type: 'Subscription', action: 'edit', status: 'edited'} }, timestamp: '5 hours ago'},
			{category: 'Business', title: 'Edited Donation button', link: 'something.aspx', feature: { name: 'payment button', properties: {type: 'Donation', action: 'edit', status: 'edited'} }, timestamp: '5 hours ago'},
			
			{category: 'Business', title: 'Removed Buy Now button', link: 'something.aspx', feature: { name: 'payment button', properties: {type: 'Buy Now', action: 'remove', status: 'removed'} }, timestamp: '5 hours ago'},
			{category: 'Business', title: 'Removed Subscription button', link: 'something.aspx', feature: { name: 'payment button', properties: {type: 'Subscription', action: 'remove', status: 'removed'} }, timestamp: '5 hours ago'},
			{category: 'Business', title: 'Removed Donation button', link: 'something.aspx', feature: { name: 'payment button', properties: {type: 'Donation', action: 'remove', status: 'removed'} }, timestamp: '5 hours ago'},
			
			// TOS
			{category: 'Business', title: 'Added TOS', link: 'something.aspx', feature: { name: 'terms of service', properties: {email: 'someemail@email.com', type: 'Terms of Service', action: 'add', status: 'added'} }, timestamp: '5 hours ago'},
			{category: 'Business', title: 'Edited TOS', link: 'something.aspx', feature: { name: 'terms of service', properties: {email: 'asdesomeemail@email.com',type: 'Terms of Service', action: 'edit', status: 'edited'} }, timestamp: '5 hours ago'},
			{category: 'Business', title: 'Removed TOS', link: 'something.aspx', feature: { name: 'terms of service', properties: {email: 'teewsomeemail@email.com', type: 'Terms of Service', action: 'remove', status: 'removed'} }, timestamp: '5 hours ago'},
			
			/* Transactions */
			// Send Funds
			{category: 'Transactions', title: 'Sent Funds', link: 'something.aspx', feature: { name: 'send funds', properties: {type: 'send funds', action: 'sent', amount: '100', currency: 'CAD', currency_symbol: '$', receiver: 'receiver@mail.com' } }, timestamp: '2 days ago'},
			
			// Mass Pay
			{category: 'Transactions', title: 'Sent Mass Payment', link: 'something.aspx', feature: { name: 'mass payment', properties: {type: 'mass payment', action: 'sent a mass payment' } }, timestamp: '2 days ago'},
			
			// Deposit
			{category: 'Transactions', title: 'Deposit', link: 'something.aspx', feature: { name: 'deposit', properties: {type: 'deposit', action: 'added', amount: '500', currency: 'USD', currency_symbol: '$', method: 'INTERAC Online' } }, timestamp: '2 days ago'},
			
			// Email Invoice
			{category: 'Transactions', title: 'Email Invoice', link: 'something.aspx', feature: { name: 'send email invoice', properties: {type: 'sent email invoice', action: 'sent an email invoice', amount: '500', currency: 'USD', currency_symbol: '$', receiver: 'receiver@email.com' } }, timestamp: '2 days ago'},

			/* Profile */
			// Email address
			{category: 'Profile', title: 'Added email address', link: 'something.aspx', feature: { name: 'email address', properties: {value: 'someemailaddress@email.com', action: 'add', state: 'added'} }, timestamp: '3 days ago'},
			{category: 'Profile', title: 'Removed email address', link: 'something.aspx', feature: { name: 'email address', properties: {value: 'someemailaddress@email.com', action: 'remove', state: 'removed'} }, timestamp: '3 days ago'},
			{category: 'Profile', title: 'Set primary email address', link: 'something.aspx', feature: { name: 'email address', properties: {value: 'someemailaddress@email.com', action: 'set as primary', state: 'set as primary'} }, timestamp: '3 days ago'},
			
			// Credit Card
			{category: 'Profile', title: 'Added credit card', link: 'something.aspx', feature: { name: 'credit card', properties: {type: 'Visa', number: '2231', action: 'add', state: 'was added'} }, timestamp: '3 days ago'},			
			{category: 'Profile', title: 'Validated credit card', link: 'something.aspx', feature: { name: 'credit card', properties: {type: 'Visa', number: '6789', action: 'validate', state: 'was validated'} }, timestamp: '3 days ago'},
			{category: 'Profile', title: 'Updated credit card', link: 'something.aspx', feature: { name: 'credit card', properties: {type: 'Visa', number: '3443', action: 'update', state: 'was updated'} }, timestamp: '3 days ago'},
			{category: 'Profile', title: 'Expired credit card', link: 'something.aspx', feature: { name: 'credit card', properties: {type: 'Visa', number: '8889', action: 'expire', state: 'has expired'} }, timestamp: '2 days ago'},
			{category: 'Profile', title: 'Removed credit card', link: 'something.aspx', feature: { name: 'credit card', properties: {type: 'Visa', number: '4566', action: 'remove', state: 'was removed'} }, timestamp: '3 days ago'},
			
			// Password, PIN
			{category: 'Profile', title: 'Updated password', link: 'something.aspx', feature: { name: 'password', properties: {type: 'password', action: 'update', state: 'updated'} }, timestamp: '3 days ago'},
			{category: 'Profile', title: 'Updated Transaction PIN', link: 'something.aspx', feature: { name: 'pin', properties: {type: 'transaction PIN', action: 'update', state: 'updated'} }, timestamp: '3 days ago'},
			
			// Personal Information
			{category: 'Profile', title: 'Updated salutation', link: 'something.aspx', feature: { name: 'personal information', properties: {type: 'salutation', action: 'update', state: 'updated'} }, timestamp: '3 days ago'},
			{category: 'Profile', title: 'Updated occupation', link: 'something.aspx', feature: { name: 'personal information', properties: {type: 'occupation', action: 'update', state: 'updated'} }, timestamp: '3 days ago'},
			{category: 'Profile', title: 'Updated residential address', link: 'something.aspx', feature: { name: 'personal information', properties: {type: 'residential address', action: 'update', state: 'updated'} }, timestamp: '3 days ago'},
			{category: 'Profile', title: 'Updated mailing address', link: 'something.aspx', feature: { name: 'personal information', properties: {type: 'mailing address', action: 'update', state: 'updated'} }, timestamp: '3 days ago'},
			{category: 'Profile', title: 'Updated phone number', link: 'something.aspx', feature: { name: 'personal information', properties: {type: 'phone number', action: 'update', state: 'updated'} }, timestamp: '3 days ago'}
			
		];
		
		var categories = ['Business', 'Transactions', 'Profile'];
		
		var dataItems = {};
		
		dataItems.getActivities = function(){
			return activities;
		};
		
		dataItems.getCategories = function(){
			return categories;
		};
		
		return dataItems;
		
	})
	.directive('activities', function(){
		return {
			restrict: 'E',
			controller: function($scope, $element, activityList){
				$scope.activities = activityList.getActivities();
				$scope.categories = activityList.getCategories();
				$scope.limit = 2;
				
				$scope.filterResult = function(cty, event){
					var allListings = activityList.getActivities(),
						newList = [];
						
					event.preventDefault();
					
					for(var i=0; i<allListings.length; i++){
						if( allListings[i].category === cty){
							var listing = allListings[i];
							newList.push(listing);
						}
					}
					
					$scope.activities = newList;
					angular.element( event.currentTarget ).parent().parent().find('a').removeClass('selected');
					angular.element( event.currentTarget ).addClass('selected');
					$scope.limit = 2;
				};
				
				$scope.showAllResults = function(event){
					event.preventDefault();
					$scope.activities = activityList.getActivities();
					
					angular.element( event.currentTarget ).parent().parent().find('a').removeClass('selected');
					angular.element( event.currentTarget ).addClass('selected');
					$scope.limit = 2;
				};
				
				$scope.loadMore = function(event){
					var itemsToInclude = 2;
					event.preventDefault();
					$scope.limit = $scope.limit + itemsToInclude;
				};
				
				$scope.countItemsLoaded = function(){
					return  $scope.limit;
				};
				
				console.log($scope);
				console.log($element);
			},
			templateUrl: 'template/account-activities.html',
			replace: true
		};
	});

