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

// for the name calculator

// (function (){
//   'use strict';
//
//   angular.module('NameCalculator', [])
//   .controller ('NameCalculatorController' , function($scope){
//       $scope.name="";
//       $scope.totalValue=0;
//       $scope.displayNumeric = function (){
//         let totalNameValue = calculateNum($scope.name);
//         $scope.totalValue = totalNameValue;
//
//       function calculateNum( string){
//           let totaStringValue = 0 ;
//           for (let i = 0 ; i < string.length; i++){
//             totaStringValue += string.charCodeAt(i);
//           }
//           return totaStringValue;
//         }
//       }
//   });
//
// })();

(function (){

  'use strict';

  angular.module( "DiApp" , [])
  .controller("DiController", function($scope , $filter){

    $scope.name="nassim";

    $scope.upper = function (){

      let upCase = $filter('uppercase');
      $scope.name= upCase($scope.name);

    }

  })
})();
