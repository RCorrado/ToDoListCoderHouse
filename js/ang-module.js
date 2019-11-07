import { enableDisabled, clearInputs, msg } from "./functions.js";
import { Task } from "./classes.js";

angular.module('toDoList', [])
    .controller('ListController', ListController);
ListController.$inject = ['$scope'];

function ListController($scope, $http) {
    let elemAdd = document.getElementById("add");
    let elemDelete = document.getElementById("delete");
    let elemUpdate = document.getElementById("update");
    let elemName = document.querySelector('#TaskName');

    $scope.list = [];

    $scope.add = function () {
        let code = $('#TaskCode').val();
        let name = $('#TaskName').val();
        let desc = $('#TaskDesc').val();
        if (name == "") {
            msg(1, elemName, "red", "El campo nombre no puede estar vac\u00edo");
        } else {
            msg(0, elemName, "inherit", "La tarea fue a\u00f1adida con \u00e9xito");
            let item = new Task(code, name, desc);
            $scope.list.push(item);
            this.updateCode();
            clearInputs();
        }
    }
    $scope.modificar = function () {
        let name = $('#TaskName').val();
        if (name == "") {
            msg(1, elemName, "red", "El campo nombre no puede estar vac\u00edo");
        } else {
            msg(0, elemName, "inherit", "La tarea fue modificada con \u00e9xito");
            for (let i = 0; i < $scope.list.length; i++) {
                let code = $scope.list[i].getCode();
                if (code == $('#TaskCode').val()) {
                    $scope.list[i].setName($('#TaskName').val());
                    $scope.list[i].setDesc($('#TaskDesc').val());
                }
            }
            this.updateCode();
            enableDisabled(elemAdd, false);
            enableDisabled(elemDelete, true);
            enableDisabled(elemUpdate, true);
            clearInputs();
        }
    }
    $scope.borrar = function () {
        let codeToDel = $('#TaskCode').val();
        for (let i = 0; i < $scope.list.length; i++) {
            let code = $scope.list[i].getCode();
            if (code == codeToDel) {
                codeToDel = i;
            }
        }
        msg(0, elemName, "inherit", "La tarea fue removida con \u00e9xito");
        //delete $scope.list[codeToDel];
        $scope.list.splice(codeToDel, 1);
        this.updateCode();
        enableDisabled(elemAdd, false);
        enableDisabled(elemDelete, true);
        enableDisabled(elemUpdate, true);
        clearInputs();
    }
    $scope.select = function (item) {
        let indexElem = $scope.list.indexOf(item);
        let code = $scope.list[indexElem].getCode();
        let name = $scope.list[indexElem].getName();
        let desc = $scope.list[indexElem].getDesc();
        $scope.codeNew = code;
        $('#TaskName').val(name);
        $('#TaskDesc').val(desc);
        enableDisabled(elemAdd, true);
        enableDisabled(elemDelete, false);
        enableDisabled(elemUpdate, false);
    }
    $scope.updateCode = function () {
        let len = $scope.list.length;
        if (len > 0) {
            let codeOld = parseInt($scope.list[len - 1].getCode());
            codeOld++;
            $scope.codeNew = codeOld;
        } else {
            $scope.codeNew = 1;
        }
    }
}