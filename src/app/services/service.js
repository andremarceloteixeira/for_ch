

/**
 * Service for get all web service data!
 */
appTesting.service("Service", function ($http, $location, Flash, $translate) {

    return {
        getCityInformationByName: function (name) {
            var promise = $http.get(CONFIGURATION.WEBSERVICE_PATH + "weather?q=" + name + "&&appid=" + CONFIGURATION.API_KEY + "&units=metric")
                    .then(function (result) {
                        if (result.status == 200) {
                            return {cityId: result.data.id, cityName: result.data.name, averageTemperature: result.data.main.temp,
                                windStrength: result.data.wind.speed};
                        } else {
                            var id = Flash.create("danger", $translate.instant("ERROR_OCCURRED_CITY") + name);
                        }
                    });

            return promise;
        },
        getNextDaysInformationById: function (id) {
            var promise = $http.get(CONFIGURATION.WEBSERVICE_PATH + "forecast/city?id=" + id + "&&APPID=" + CONFIGURATION.API_KEY + "&units=metric")
                    .then(function (result) {
                        if (result.status == 200) {
                            
                            return {
                                list: result.data.list,
                            };
                        } else {
                            var id = Flash.create("danger", $translate.instant("ERROR_OCCURRED_CITY") + name);
                        }
                    });

            return promise;
        }
    }
});
