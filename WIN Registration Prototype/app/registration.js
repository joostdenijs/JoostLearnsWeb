/// <reference path="../Scripts/angular.min.js">
var app = angular.module("WINRegistration", []);

app.config((function ($routeProvider) {
    $routeProvider
        .when('/teams',
            {
                controller: 'TeamsController',
                templateUrl: '/app/partials/teams.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/team/:teamID',
            {
                controller: 'TeamRegistrationController',
                templateUrl: '/app/partials/customerOrders.html'
            })
        .otherwise({ redirectTo: '/teams' });
});