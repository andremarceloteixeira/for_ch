/* 
 * Home Controller.
 */
appTesting.controller("homeController", function ($scope, $translate, $http,
        DataStorage, $location, $mdDialog, Flash, $anchorScroll, $route, $routeParams, $filter, Flash) {


    $scope.todos = [];

    $scope.todo = false;


    //list home view - First Load
    $scope.getData = function () {
        var temp = [];
        DataStorage.loadData().then(function (result) {
            temp = result;
        }).finally(function () {
            $scope.todos = temp;
        });

        return $scope.todos;
    }

    //Exists @todo - preview view
    $scope.existTodo = function (id, type) {

        var idTodo = id !== undefined ? id : $routeParams.id;
        var operationType = type !== undefined ? true : false;
        $scope.todo = $filter('filter')(DataStorage.getData(), {id: parseInt(idTodo)}, true)[0];
        if (!$scope.todo) {
            var id = Flash.create("danger", "Not found Todo " + parseInt(idTodo) + " in list");
            $location.path("/");
        }
        if (operationType) {
            return idTodo;
        }
    };

    $scope.remove = function (ev, idRemoved, type) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
                .title('Remove @todo?')
                .textContent('Remove this @todo?.')
                .ariaLabel('Remove')
                .targetEvent(ev)
                .ok('Yes')
                .cancel('No');
        $mdDialog.show(confirm).then(function () {
            $scope.todos = DataStorage.getData();
            //var removeID = $scope.existTodo(idRemoved, type);
            var removed = $scope.removeById(idRemoved);
            var id = Flash.create("success", "Removed element " + parseInt(idRemoved) + " in list");
        }, function () {
            $mdDialog.cancel();
        });
    };

    //remove elements
    $scope.removeById = function (id) {
        $scope.todos = DataStorage.removeData(id);
    }

    //preview
    if ($routeParams.id) {
        //verify if exists in data
        $scope.existTodo();
    }

    $scope.todos = !firstCall ? $scope.getData() : DataStorage.getData();

    $scope.formSubmitted = false;

    //validate insert new step
    $scope.validate = function () {
        $scope.formSubmitted = false;
        //first time validation
        console.log($scope.todo);
        if ($scope.todo.title == undefined || $scope.todo.note == undefined) {
            var message = "Validation error"
            var id = Flash.create("danger", message);

            $scope.formSubmitted = true;
            return false;
        }
        return true;
    };


    $scope.submitForm = function () {
        // body...
        if ($scope.validate()) {
            console.log("AAAA");
            angular.forEach($scope.todos, function (todo, index) {
                if (todo.id == parseInt($routeParams.id)) {
                    var data = DataStorage.editData(index, todo);
                    $scope.todos = data;

                }
            });
            var id = Flash.create("success", "Edit element " + parseInt(parseInt($routeParams.id)) + " in list");
            DataStorage.setData($scope.todos);

            $location.path("/");
        }
    }

    $scope.addNew = function (ev) {

        $scope.formSubmitted = false;

        $mdDialog.show({
            controller: AddController,
            templateUrl: CONFIGURATION.ROUTES.ADD.TEMPLATE,
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: false,
            locals: {
                todosList: $scope.todos,
            }
        })
                .then(function (param) {
                    // ok function
                    if (param.newElement) {
                        //set todos
                        var data = DataStorage.addData(param.newElement);
                        DataStorage.setData(data);
                        $scope.todos = data;
                        var id = Flash.create("success", "added " + JSON.stringify(param.newElement) + " in list");
                    } else {
                        var id = Flash.create("danger", "Erro in add element!");
                    }
                }, function () {
                    // cancel function
                    console.log("cancel");
                });

    };

});
