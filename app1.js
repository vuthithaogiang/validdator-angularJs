


var validationApp = angular.module('validationApp',[]);
console.log(validationApp);

validationApp.controller('mainController', function ($scope){
    $scope.submitForm = function (isValid){
       
        if(isValid){
            console.log('form is valid!');
            //alert('form is valid.');
            
        }
        else{
            console.log('form is not valid!');
        }
        
    }
})



//if(document.querySelector('#password').value !== ){

//}