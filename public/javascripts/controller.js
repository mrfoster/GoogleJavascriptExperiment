function MessageController($scope, $http) {
    $scope.url = "/message";
    $scope.message = "";

    $http.get($scope.url).then(function (response) {
        $scope.message = response.data;
    });
}
  