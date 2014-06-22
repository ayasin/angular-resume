(function () {
	'use strict';
	var _ = window._;
	window.angular.module("resume").directive('skillSet', ['ResumeService', function (ResumeService) {
		var controller = function ctrl ($scope) {
			var i, currentBlock;

			$scope.$watch('resume.skills', function (newValue, oldValue) {
				if (oldValue === newValue) {
					return;
				}
				$scope.skillBlocks = [];
				$scope.allSkills  = newValue;

				function resetCurrentBlock() {
					currentBlock = [];
					_.times($scope.skillsPerLine, function() {
						currentBlock.push('');
					});
				}

				if ($scope.allSkills) {
					for (i = 0; i < $scope.allSkills.length; i += 1) {
						if (i % $scope.skillsPerLine === 0) {
							resetCurrentBlock();
							$scope.skillBlocks.push(currentBlock);
						}
						currentBlock[i % $scope.skillsPerLine] = $scope.allSkills[i];
					}
				}
			});

			ResumeService.getResume().then(
				function (data) {
					$scope.resume = data;
				},
				function (error) {

				}
			);


			$scope.skillAdditionalClasses = function(skill) {
				if (ResumeService.skillIsActive(skill)) {
					return 'text-primary';
				}
				return 'text-muted hide-on-print strike-through';
			};

			$scope.onSkillClicked = function (skill) {
				ResumeService.toggleSkillActive(skill);
			};
		};

		return {
			restrict: 'AE',
			controller : ['$scope', controller],
			template:   '<table class="table">' +
							'<tr ng-repeat="skillBlock in skillBlocks" class="text-center" style="line-height: 2em">' +
								'<td ng-repeat="aSkill in skillBlock track by $index" >' +
									'<div class="cursor-hand" skill="aSkill" ng-class="skillAdditionalClasses(aSkill)" ng-click="onSkillClicked(aSkill)"></div>' +
								'</td>' +
							'</tr>' +
						'</table>',
			scope: {
				skillsPerLine: '='
			}
		};
	}]).directive('skill', function () {
		var linker = function (scope, element/*, attr */) {
			element.hover(function () {
				$(this).transition({scale : '1.5'});
			}, function () {
				$(this).transition({scale : '1'});
			});
		};

		return {
			restrict: 'A',
			link: linker,
			template: '{{skill}}',
			scope: {
				skill : '='
			}
		};
	});
}).call();