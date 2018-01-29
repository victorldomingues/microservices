angular.module('app.services', [])
    .factory('api.products', function ($http) {

        var api = {};

        var url = window.location.origin + ':3000/';

        api.save = function (data) {
            return $http({
                method: 'POST',
                url: url,
                data: data
            });
        }


        api.get = function (id) {
            return $http({
                method: 'GET',
                url: url + id
            });
        }

        api.query = function () {
            return $http({
                method: 'GET',
                url: url
            });
        }

        api.update = function (id, data) {
            return $http({
                method: 'PUT',
                url: url,
                data: data
            });
        }

        return api;
    })
    .factory('api.sales', function ($http) {

        var api = {};

        var url =  window.location.origin + ':3001/';

        api.save = function (data) {
            return $http({
                method: 'POST',
                url: url,
                data: data
            });
        }


        api.get = function (id) {
            return $http({
                method: 'GET',
                url: url + id
            });
        }

        api.query = function () {
            return $http({
                method: 'GET',
                url: url
            });
        }

        api.update = function (id, data) {
            return $http({
                method: 'PUT',
                url: url,
                data: data
            });
        }

        return api;
    });