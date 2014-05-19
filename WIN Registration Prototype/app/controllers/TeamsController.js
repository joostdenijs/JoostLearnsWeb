app.controller('TeamsController', function ($scope, TeamsFactory) {
    $scope.teams = TeamsFactory.getTeams();

});
