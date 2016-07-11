/* 
 * Config Module.
 */
var appTesting = angular.module("appTesting", ["ngMaterial", "ngRoute",
    "ngMessages", "ngCookies", "ngFlash", "pascalprecht.translate"]);

var LANG_EN = "en";
var firstCall = false;

appTesting.config(function ($routeProvider, $locationProvider, $mdThemingProvider, $mdIconProvider, $translateProvider) {
    $routeProvider
            .when(CONFIGURATION.ROUTES.HOME.PATH, {
                templateUrl: CONFIGURATION.ROUTES.HOME.TEMPLATE,
                controller: CONFIGURATION.ROUTES.HOME.CONTROLLER,
                /*resolve:{
                    load:function(todosStorage){
                      return todosStorage.LoadData();
                }*/
              
            })
            .when(CONFIGURATION.ROUTES.PREVIEW.PATH, {
                templateUrl: CONFIGURATION.ROUTES.PREVIEW.TEMPLATE,
                controller: CONFIGURATION.ROUTES.PREVIEW.CONTROLLER
            })
            .when(CONFIGURATION.ROUTES.EDIT.PATH, {
                templateUrl: CONFIGURATION.ROUTES.EDIT.TEMPLATE,
                controller: CONFIGURATION.ROUTES.EDIT.CONTROLLER
            })
            .when(CONFIGURATION.ROUTES.ADD.PATH, {
                templateUrl: CONFIGURATION.ROUTES.ADD.TEMPLATE,
                controller: CONFIGURATION.ROUTES.ADD.CONTROLLER
            })
            .when(CONFIGURATION.ROUTES.REMOVE.PATH, {
                controller: CONFIGURATION.ROUTES.REMOVE.CONTROLLER
            })
            .otherwise({
                redirectTo: CONFIGURATION.ROUTES.HOME.PATH
            });

    $mdThemingProvider.theme("primary")
            .primaryPalette("blue")
            .accentPalette("blue");

    $translateProvider.translations("en", languageEN);
    $translateProvider.registerAvailableLanguageKeys(["en"], {
        en_US: "en",
        en_UK: "en"
    });
    $translateProvider.preferredLanguage(LANG_EN);
    $translateProvider.fallbackLanguage(LANG_EN);
    $translateProvider.useSanitizeValueStrategy("escape");
});

