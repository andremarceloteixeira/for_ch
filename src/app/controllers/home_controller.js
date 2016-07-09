/* 
 * Home Controller.
 */
appTesting.controller("homeController", function ($scope, $translate, $http,
        DataStorage, $location, $mdDialog, Flash, $anchorScroll, $route, $routeParams, $filter, Flash) {


    $scope.todos = [];

    $scope.todo = false;


    //list home view
    $scope.getData = function () {
        var temp = [];
            DataStorage.getData().then(function (result) {
                temp = result;
            }).finally(function () {
                $scope.todos = temp;
            });
        
        return $scope.todos;
    }

    //Exists @todo - preview view
    $scope.existTodo = function (id, type ) {
        var idTodo = id !== undefined ? id : $routeParams.id;
        var operationType = type !== undefined ? true : false;
        DataStorage.getData().then(function (result) {
            temp = result;
        }).finally(function () {
            $scope.todo = $filter('filter')(temp, { id: parseInt(idTodo)}, true)[0];
            if (!$scope.todo) {
                var id = Flash.create("danger", "Not fount Todo " + parseInt(idTodo) + " in list");
                $location.path( "/");
            }
        });
        if (operationType) {
            return idTodo;
        }

    };

    $scope.remove = function(ev, idRemoved, type) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
              .title('Remove @todo?')
              .textContent('Remove this @todo?.')
              .ariaLabel('Remove')
              .targetEvent(ev)
              .ok('Yes')
              .cancel('No');
            console.log(idRemoved, "BN");
              console.log(type, "BM");
        $mdDialog.show(confirm).then(function() {
             var removeID = $scope.existTodo(idRemoved, type);
             var removed = $scope.removeById(removeID);
             var id = Flash.create("success", "Removed element " + parseInt(removeID) + " in list");
        }, function() {
            $mdDialog.cancel();
        });
      };

      //remove elements
      $scope.removeById = function(id) {
        $scope.todos = $scope.todos.filter(function(item) {
            return item.id !== id;
        });
     }

    //preview
    if ($routeParams.id) {
        //verify if exists in data
        $scope.existTodo();
    }

        if ($scope.todos.length == 0 ) {
                $scope.getData();

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
                    if(param.newElement) {
                      //set todos
                      $scope.todos.push(param.newElement);
                         DataStorage.setData($scope.todos);
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
