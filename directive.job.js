(function () {
	'use strict';

	window.angular.module("resume").directive('resumeJob', function () {
		var linker = function (scope, element, attr) {

		};

		return {
			restrict: 'AE',
			link: linker,
			template:   '<table class="table">' +
							'<tr>' +
								'<td class="text-info"><h4>{{project.projectName}} ({{project.company}})</h4></td>' +
								'<td class="text-right text-info">' +
									'<span ng-repeat="skill in project.skillsUsed">{{skill}}<span ng-hide="$last">,</span> </span>' +
									'<br>' +
									'{{project.dates}}' +
								'</td>' +
							'</tr>' +
						'</table>' +
						'<ul>' +
							'<li ng-repeat="highlight in project.highlights" ng-bind-html="highlight"></li>' +
						'</ul>',
			scope: {
				project: '='
			}
		};
	});
}).call();