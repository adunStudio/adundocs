var converter = new showdown.Converter();

var AdunDocs = angular.module('AdunDocs', ['ngRoute']);


AdunDocs.config(function($routeProvider) {
    $routeProvider
        .when('/',      {templateUrl: 'views/intro.html'})
        .when('/about', {templateUrl: 'views/about.html'})
        .when('/news',  {templateUrl: 'views/news.html'})
        .when('/tips',  {templateUrl: 'views/tips.html'})
        .when('/search/:dirName/:subName/:fileName', {templateUrl: 'views/view.html', controller: 'searchCtrl'})
        .when('/:dirName', {templateUrl: 'views/dir.html', controller: 'dirCtrl'})
        .when('/:dirName/:subName', {templateUrl: 'views/sub.html', controller: 'subCtrl'})
        .when('/:dirName/:subName/:fileName', {templateUrl: 'views/view.html', controller: 'viewCtrl'})
        .otherwise({redirectTo: '/'});
});