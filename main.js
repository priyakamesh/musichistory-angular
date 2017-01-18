const app = angular.module("musicApp",["ngRoute"])
app.config(($routeProvider, $locationProvider)=>{
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/",{
      controller: "MainCtrl",
      templateUrl: "partials/main.html"
    })
    .when("/songs", {
      controller: "SongsCtrl",
      templateUrl: "partials/song-list.html"
    })
    .when("/songs/:id",{
      controller: "DetailsCtrl",
      templateUrl: "partials/song-details.html"
    })
    .otherwise("/")
})

//controller

app.controller("MainCtrl", function($scope){})
app.controller("SongsCtrl", function($scope, $http){
  $http.get(`songs.json`)
  .then(function (value){
    $scope.songs = value.data.songs
    console.log($scope.songs)
  })
})
app.controller("DetailsCtrl", function($scope,$http,$routeParams){
  $scope.songList = $routeParams.id
  $http.get(`songs.json`)
  .then(function(value){
    let songs =value.data.songs
    $scope.selectedItem = songs[$scope.songList]

  })
})
