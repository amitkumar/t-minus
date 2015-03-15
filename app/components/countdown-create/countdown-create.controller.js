'use strict';

angular.module('tminus.controllers')

    .controller('CountdownCreateCtrl', function($scope, $interval) {
        var _this = this;

        _this.create = function(remainder){
          var newCountdown = {
            title : _this.newCountdown.title,
            dueAt : undefined
          };

          switch (remainder){
            case '1m':
              newCountdown.dueAt = moment().add(1, 'minutes');
              break;
            case '10m':
              newCountdown.dueAt = moment().add(10, 'minutes');
              break;
            case '25m':
              newCountdown.dueAt = moment().add(25, 'minutes');
              break;
            case '1h':
              newCountdown.dueAt = moment().add(1, 'hours');
              break;
            case 'End of Day':
              newCountdown.dueAt = moment().endOf('day');
              break;
            case 'End of Week':
              newCountdown.dueAt = moment().endOf('week');
              break;
            case 'End of Month':
              newCountdown.dueAt = moment().endOf('month');
              break;
            case 'End of Year':
              newCountdown.dueAt = moment().endOf('year');
              break;
          }

          console.log('newCountdown', newCountdown);
        };

        _this.cancel = function(){

        }
    });
