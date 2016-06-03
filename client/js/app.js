// (function(){
  'use strict';

  angular.module('myApp', ['ngRoute', 'CertAppModule', 'profileModule', 'inboxModule', 'searchModule', 'ngMaterial'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: 'client/views/applications/profile.html',
          controller: 'ProfileController'
        })
        .when('/inbox', {
          templateUrl: 'client/views/applications/inbox.html',
          controller: 'InboxController'
        })
        .when('/search', {
          templateUrl: 'client/views/applications/search.html',
          controller: 'SearchController'
        })
        .when('/certificationSelection', {
            templateUrl: 'client/views/applications/certificationSelection.html',
            controller: 'NewApplicationController'
        })
        .when('/application/new', {
            templateUrl: 'client/views/applications/newApplication.html',
            controller: 'NewApplicationController'
        });

  }]);
// })();
