import { ListController } from "./ang-module";
import { selectCriteria } from "./functions.js"

$(document).ready(function () {
    let app = angular.module('toDoList', []);

    $('th').click(function () {
        selectCriteria(this);
    });
});
