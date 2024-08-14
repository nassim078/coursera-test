// (function () {
// 'use strict';
//
// angular.module('myFirstApp', [])
//
// .controller('MyFirstController', function ($scope) {
//   $scope.name ="nassim"
//   $scope.hello = function (){
//     return "hello there";
//   }
// });
//
// })();

(function (){
  'use strict';

  angular.module('NameCalculator', [])
  .controller ('NameCalculatorController' , function($scope){
      $scope.name="";
      $scope.totalValue=0;
      $scope.displayNumeric = function (){
        let totalNameValue = calculateNum($scope.name);
        $scope.totalValue = totalNameValue;

      function calculateNum( string){
          let totaStringValue = 0 ;
          for (let i = 0 ; i < string.length; i++){
            totaStringValue += string.charCodeAt(i);
          }
          return totaStringValue;
        }
      }
  });

})();
