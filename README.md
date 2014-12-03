#Angular Picklist
Angular component mildly inspired by [Primeface's PickList](http://www.primefaces.org/showcase/ui/data/pickList.xhtml).

There is one important feature to be mentioned: lists are searchable :)


##Prerequisities
- Angular 1.2 (Angular 1.3 was not tested, but should work as well)
- Bootstrap 3
- Lodash

##Usage

include CSS and Javascript:

 ```
 <link href="angular-picklist.min.css" rel="stylesheet"/>
 <script src="angular-picklist.min.js"></script>
  ```

**Important note:** angular-picklist.min.js must be loaded **after** angular and lodash (and angular must be loaded before lodash...)

```
<picklist left-list-rows="leftList" right-list-rows="rightList"/>
```

Load angular module *spicklist*, such as:

```
 var app = angular.module('ngApp', ['spicklist']);
```


Additional parameters (optional)

- list-width - min-width of list panel
- list-height - height of list
- show-move-all-buttons - show/hide move all buttons; default is true

Advanced usage with all the perks:

```
<picklist left-list-rows="leftList" right-list-rows="rightList" list-width="150" list-height="200" show-move-all-buttons="false"/>
```

##Example
Download a HTML file from _prodtest/_ directory and open it in your favourite browser.


Alternatively, you may try a [sample Angular Picklist] (http://cdn.rawgit.com/IgorKvasn/angular-picklist/master/prodtest/test2.html)

__Note that example provided by this URL may contain some bugs that DOES NOT reflect the current state of the project... this is an unfortunate problem of _rawgit_ service, that is caching files indefinetly... Please consider the example as a simple showcase, NOT an actual demo. I am in no mood to fiddle with this anymore, maybe later...__
