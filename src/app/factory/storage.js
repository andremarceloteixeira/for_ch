appTesting.factory('DataStorage', function ($http) {
    var Data = {
        data: [],
        getData: function () {
            /* load data from json */
            //create new promisse and if
            var promise = $http.get('app/data/dataDefault.json').then(function (r) {
                Data.data = Data.data.length == 0 ? r.data.todos : Data.data;
                return Data.data;
            });
            return promise;
        },
        setData : function (data) {
            Data.data = data;
        }
    };
    return Data;
});