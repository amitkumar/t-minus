'use strict';

angular.module('tminus.controllers')

.controller('CountdownListCtrl', function($scope, $interval) {
    var _this = this;

        _this.list = [
        {
            id: 1,
            title: 'Slide to the left',
            dueAt: moment().add(10, 'minutes')
        },
        {
            id: 2,
            title: 'Slide to the right',
            dueAt: moment().add(5, 'hours')
        },
        {
            id: 3,
            title: 'Shuffle',
            dueAt: moment().add(1, 'day')
        },
        {
            id: 4,
            title: 'And dip',
            dueAt: moment().add(1, 'week')
        }
    ];


        _this.updateCountdownDisplays = function(){
            var now = moment();
            _this.list.forEach(function(countdown){
                var fromNow = moment.duration(countdown.dueAt.diff(now));
                countdown.remaining = fromNow.format();
            });
        };

        _this.updateCountdownDisplays();


        $interval(_this.updateCountdownDisplays, 1000);
})
