///<reference path="angular.min.js"/>
 var app = angular.module("myModule",[])
                     .controller("myController",function($scope){
                        var technologies=[
                            { name : "JAVA", likes : 0 , dislikes : 0 },
                           { name : "SQL", likes : 0 , dislikes : 0 },
                           { name : "ANGULARJS", likes : 0 , dislikes : 0}
                        ];

 $scope.technologies=technologies;
 $scope.increementLikes=function(technology){
     technology.likes++;
 }
 $scope.increementDislikes=function(technology){
     technology.dislikes++;
 }


 });