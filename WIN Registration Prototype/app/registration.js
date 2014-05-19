/// <reference path="../Scripts/angular.min.js">
var app = angular.module('WINRegistration', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/teams',
            {
                controller: 'TeamsController',
                templateUrl: '/app/views/teams.html'
            })
        .when('/new',
            {
                templateUrl: '/app/views/create.html',
                controller: 'NewTeamController'
            })
        .otherwise({ redirectTo: '/teams' });
});