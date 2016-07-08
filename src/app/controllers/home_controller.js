/* 
 * Home Controller.
 */
appTesting.controller("homeController", function ($scope, $translate, $http, Service, $location, $mdDialog, Flash, $anchorScroll, $route) {

    $scope.citiesAux = [];

    /**
     * Get Cities
     * @returns {Array|home_controller_L4.$scope.citiesAux}
     */
    $scope.getCities = function () {
        var rs = [];
        angular.forEach(CONFIGURATION.CITIES, function (value) {
            $scope.getData(value);
        });
        return $scope.citiesAux;
    };

    /*
     * Get Data
     * @param {type} name
     * @returns {undefined}
     */
    $scope.getData = function (name) {
        var temp = [];
        Service.getCityInformationByName(name).then(function (result) {
            temp = result;
        }).finally(function () {
            $scope.citiesAux.push(temp);
        });
    };

    /**
     * 
     * @param {type} ev
     * @param {type} id
     * @returns {undefined}
     */
    $scope.showMoreDays = function (ev, id) {
        $mdDialog.show({
            controller: MorePopUpController,
            templateUrl: 'app/views/more.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            locals: {
                cityId: id,
            }
        });
    };

    $scope.cities = $scope.getCities();
});
