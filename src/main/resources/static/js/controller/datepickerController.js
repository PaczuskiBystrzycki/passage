rootModule.controller("datepickerController",function ($scope) {

    $scope.time = "1970-01-01T09:30:40.000Z"; // (formatted: 10:30 AM)
    $scope.selectedTimeAsNumber = 37840000; // (formatted: 11:30 AM)
    $scope.sharedDate = "2017-10-22T19:00:00.214Z"; // (formatted: 10/22/17 9:00 PM)

    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

    var checkin = $('#dpd1').datepicker({
        onRender: function(date) {
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function(ev) {
        if (ev.date.valueOf() > checkout.date.valueOf()) {
            var newDate = new Date(ev.date)
            newDate.setDate(newDate.getDate() + 1);
            checkout.setValue(newDate);
        }
        checkin.hide();
        $('#dpd2')[0].focus();
    }).data('datepicker');
    var checkout = $('#dpd2').datepicker({
        onRender: function(date) {
            return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function(ev) {
        checkout.hide();
    }).data('datepicker');
})