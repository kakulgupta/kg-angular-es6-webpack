import 'angular-ui-router';
import routeConfig from './app.router.js';
import angular from "angular";
import MainCtrl from "./controllers/main.controller.js";
// import CacheService from "services/cache.service.js";

angular.module('kgApp', ['ui.router'])
  .controller('MainCtrl', MainCtrl)
  // .service('CacheService', CacheService)
  .config(routeConfig);
