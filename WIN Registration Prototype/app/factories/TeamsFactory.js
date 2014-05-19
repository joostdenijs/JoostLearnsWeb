app.factory('TeamsFactory', function ($http) {
    var teams = [];
    init();

    return {
        getTeams: function() {
            return teams;
        }
    }


    function init() {
        $http({
            url: '/app/data/teams.json',
            responseType: 'application/json',
            method: 'get',
            transformRequest: function (data, headersGetter) {
                var result = JSON.stringify(data);
                return result;
            }
        }).success(function (data) {
            teams = data;
        });
    }
});