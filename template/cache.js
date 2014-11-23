angular.module('template/picklist.html', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('template/picklist.html',
    "<div class=container-fluid ng-cloak=\"\"><div class=row><div class=col-xs-5><input placeholder=Search class=form-control ng-model=leftFilter style=\"width: 75%;margin-bottom: 10px\"><select multiple ng-multiple=true ng-model=leftSelected ng-options=\"r.data for r in leftListRows | filter:{data:leftFilter}\" style=\"overflow: auto\" ng-style=listCss></select></div><div class=\"col-xs-1 v-center\"><button style=\"display: block\" type=button class=\"btn btn-default\" ng-click=moveRightSelected()><span class=\"glyphicon glyphicon-forward\"></span></button> <button style=\"display: block\" type=button class=\"btn btn-default\" ng-click=moveRightAll() ng-show=showAllButtons><span class=\"glyphicon glyphicon-fast-forward\"></span></button> <button style=\"display: block\" type=button class=\"btn btn-default\" ng-click=moveLeftSelected()><span class=\"glyphicon glyphicon-backward\"></span></button> <button style=\"display: block\" type=button class=\"btn btn-default\" ng-click=moveLeftAll() ng-show=showAllButtons><span class=\"glyphicon glyphicon-fast-backward\"></span></button></div><div class=col-xs-5><input placeholder=Search class=form-control ng-model=rightFilter style=\"width: 75%;margin-bottom: 10px\"><select multiple ng-model=rightSelected ng-options=\"r.data for r in rightListRows | filter:{data:rightFilter}\" style=\"overflow: auto\" ng-style=listCss></select></div></div></div>"
  );

}]);
