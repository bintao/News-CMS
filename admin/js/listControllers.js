'use strict';

/* Controllers */

angular.module('listControllers', []).
controller('ListCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.page = 0;
        $scope.tags = []

        $scope.searchNews = function() {
            var data = {
                search: $scope.search,
                tags: [],
                page: $scope.page
            }

            angular.forEach($scope.tags, function(tag) {
                    data.tags.push(tag.name);
            })

            $http.post(url + '/search_news', data)
                .success(function(response) {
                    $scope.newsList = response;
                })
        }

        $scope.searchNews();
    }
]);