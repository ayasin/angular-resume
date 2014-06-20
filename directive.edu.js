(function () {
	'use strict';
	window.angular.module("resume").directive('resumeEducation', function() {
		var linker = function (scope, element, attrs) {

		};

		return {
			link: linker,
			restrict: 'AE',
			template:   '<table class="table">' +
							'<tr>' +
								'<td>' +
									'<strong class="text-info">{{edu.degree}}</strong>' +
									'<br>' +
									'{{edu.school}} (<span ng-bind-html="edu.comments"></span>)' +
								'</td>' +
								'<td class="text-right text-info">' +
									'{{edu.gradDate}}' +
								'</td>' +
							'</tr>' +
						'</table>',
			scope: {
				edu : '='
			}
		};
	});
}).call();