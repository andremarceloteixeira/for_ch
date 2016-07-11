
function AddController($scope, $mdDialog, $http, $q, Flash, $translate, $filter, todosList) {

    $scope.title;
    $scope.note;
    $scope.formSubmitted = false;

    //validate insert new step
    $scope.validate = function () {
        $scope.formSubmitted = false;
        //first time validation
        if ($scope.title == undefined || $scope.note == undefined) {
            var message = "Validation error"
            var id = Flash.create("danger", message);

            $scope.formSubmitted = true;
            return false;
        }
        $scope.titleS = $scope.title;
        $scope.noteS = $scope.note;

        return true;
    };


    $scope.idSequenceNext = function () {
        var result = Math.max.apply(Math, todosList.map(function (o) {
            return o.id;
        }));
        result = parseInt(result) ? result : 0;
        return (result + 1);
    };


    //validate seteps collection inserted new
    $scope.ok = function () {
        if ($scope.validate()) {
            var elementForPush = {
                id: $scope.idSequenceNext(),
                title: $scope.titleS,
                note: $scope.noteS
            };
            var result = {newElement: elementForPush}
            $mdDialog.hide(result);
        }
    };

    //cancel event
    $scope.cancel = function () {
        $mdDialog.cancel();
        $scope.formSubmitted = false;
    };

}