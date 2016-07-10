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
        },
        addData : function(object) {
            Data.data.push(object);
            return Data.data;
        },
        removeData : function(index) {
           Data.data = Data.data.filter(function(item) {
              return item.id !== index;
           });
           return Data.data;

        },
        editData : function(index, todo) {
             Data.data[index].title = todo.title;
             Data.data[index].note = todo.note;
          return Data.data;

        }
    };
    return Data;
});