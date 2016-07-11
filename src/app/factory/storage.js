appTesting.factory('DataStorage', function ($http) {
    var Data = {
        data: [],
        loadData: function () {
            /* load data from json */
            //create new promisse and if
            firstCall = true;
            var promise = $http.get('app/data/dataDefault.json').then(function (r) {
                Data.data = r.data.todos;
                return Data.data;
            });
            return promise;
        },
        getData: function () {
            return Data.data;
        },
        setData: function (data) {
            Data.data = data;
        },
        addData: function (object) {
            Data.data.push(object);
            return Data.data;
        },
        removeData: function (index) {
            Data.data = Data.data.filter(function (item) {
                return item.id !== index;
            });
            return Data.data;

        },
        editData: function (index, todo) {
            Data.data[index].title = todo.title;
            Data.data[index].note = todo.note;
            return Data.data;

        },
    };
    return Data;
});