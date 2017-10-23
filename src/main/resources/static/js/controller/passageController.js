rootModule.controller("passageController", function($scope) {
	$scope.imie = "Lord Mateusz";
})


	$(function(){
		
		$('.datepicker').pickadate({
			selectMonths : true, // Creates a dropdown to control month
			selectYears : 15, // Creates a dropdown of 15 years to control year,
			today : 'Today',
			clear : 'Clear',
			close : 'Ok',
			closeOnSelect : false
		});
		});

