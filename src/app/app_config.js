/* 
 * Config Module.
 */
var appTesting = angular.module("appTesting", ["ngMaterial", "ngRoute", 
     "ngMessages", "ngCookies", "ngFlash", "pascalprecht.translate"]);

var LANG_EN = "en";

appTesting.config(function ($routeProvider, $locationProvider, $mdThemingProvider, $mdIconProvider, $translateProvider) {
    $routeProvider
            .when(CONFIGURATION.ROUTES.HOME.PATH, {
                templateUrl: CONFIGURATION.ROUTES.HOME.TEMPLATE,
                controller: CONFIGURATION.ROUTES.HOME.CONTROLLER
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

