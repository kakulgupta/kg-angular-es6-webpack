export default function routes($stateProvider, $urlRouterProvider) {
  'use strict';
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    });
  $urlRouterProvider.otherwise('/');
}
routes.$inject = ['$stateProvider', '$urlRouterProvider'];
