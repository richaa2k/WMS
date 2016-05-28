var app = angular.module('wms', []);
app.controller('wmsController', ['$scope', function ($scope) {
    
    $scope.selectedState;
    $scope.states = [
        { code: 'JK', name: 'Jammu & Kashmir', IsSelected: false },
        { code: 'PB', name: 'Panjab', IsSelected: false },
        { code: 'UP', name: 'Uttar Pradesh', IsSelected: false },
        { code: 'HP', name: 'Himachal Pradesh', IsSelected: false },
        { code: 'HR', name: 'Haryana', IsSelected: false }
    ];

    $scope.selectedCity;
    $scope.cities = [
        { ccode: 'JM', cname: 'Jammu', scode: 'JK', station: '01' },
        { ccode: 'SR', cname: 'Srinagar', scode: 'JK', station: '01' },
        { ccode: 'PK', cname: 'Pathankot', scode: 'PB', station: '01' },
        { ccode: 'PL', cname: 'Patiala', scode: 'PB', station: '01' },
        { ccode: 'ME', cname: 'Meerut', scode: 'UP', station: '01' },
        { ccode: 'AL', cname: 'Allahbad', scode: 'UP', station: '01' },
        { ccode: 'SH', cname: 'Shimla', scode: 'HP', station: '01' },
        { ccode: 'MN', cname: 'Manali', scode: 'HP', station: '01' },
        { ccode: 'GG', cname: 'Gurugram', scode: 'HR', station: '01' },
        { ccode: 'SP', cname: 'Sonepat', scode: 'HR', station: '01' }
    ];
}]);