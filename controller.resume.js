(function () {
	'use strict';

	var _ = window._;
	window.angular.module("resume").controller('resumeController', ['$scope', 'ResumeService', function($scope, ResumeService) {
		function init() {
			ResumeService.getResume().then(function(data) {
				$scope.resume = data;
				$scope.activeSkills = {};
				_.each($scope.resume.skills, function (val) {
					$scope.activeSkills[val] = true;
				});

			}, function (error) {

			});
		}

		$scope.containsActiveSkills = ResumeService.containsActiveSkills;

		init();
	}]);
}).call();