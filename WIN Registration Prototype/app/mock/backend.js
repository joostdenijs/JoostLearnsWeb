var myMock = angular.module('myMock', ['WINRegistration', 'ngMockE2E']);

myMock.run(function ($httpBackend) {
    var teams = [
        { "TeamName": "Team 1", "MembershipNo": "147-164530", "TeamId": 1 },
        { "TeamName": "Team 2", "MembershipNo": "147-164531", "RegistrationStatus": 'Submitted' }
    ]


    $httpBackend.whenGET('/api/teams').respond(teams);
    $httpBackend.whenGET(/^\/app\//).passThrough();
});