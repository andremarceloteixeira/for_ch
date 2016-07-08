/* 
 * MorePopUpController - load moore days information
 */
function MorePopUpController($scope, $mdDialog, $http, $q, cityId, Service, Flash, $translate, $filter) {


    $scope.tabs = [];
    /**
     * Get Moore days information by id
     * @returns {Array|fin}
     */
    $scope.getDaysInformationById = function () {
        var temp = [];
        var resultsByDays = [];
        Service.getNextDaysInformationById(cityId).then(function (result) {
            temp = result;
            var fin = [];
            angular.forEach(temp.list, function (item) {
                var info = {
                    date: item.dt_txt,
                    temp: item.main.temp,
                    wind: item.wind !== null ? item.wind.speed : "",
                };
                fin.push(info);
            });
             $scope.tabs = fin;
        }).finally(function () {

        });
        return $scope.tabs;
    };
    
    /**
     * Close 
     * @returns {undefined}
     */
    $scope.close = function () {

        $mdDialog.cancel();
    };


    $scope.tabsDays = $scope.getDaysInformationById();
}
