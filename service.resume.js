(function() {
	"use strict";

	var _ = window._;
	var myResume = {
		//Enter your name here
		name : 'Amir Yasin',

		//Enter your address here
		address : {
			street1: '1069 Sussex Way',
			street2: '',
			city: 'Round Rock',
			state: 'TX',
			zip: '78665'
		},

		phoneNumber: '512 522 2647',

		email: 'ayasin@datatensor.com',

		github: 'github.com/ayasin',

		blog: null,

		//Enter your objective here
		objective : "<p>To utilize my 10+ years of experience as a top-notch software engineer/architect as well as enjoyment of learning " +
					"to help companies solve difficult and interesting problems and stay on the cutting edge of technology innovation.</p>" +
					'<strong class="text-muted">Active TS Clearance</strong>',

		//Enter your comma separated skills here.  Any skills you enter will appear at the
		//front of the skills list.  Other skills from your tags and skillsUsed in projects
		//will be added at the end
		skills : [
			"JavaScript",
			"HTML5/CSS",
			"MongoDB",
			"Asynchronous Development",
			"Python"
		],

		projectsHeader : '<h4>Consulting (DataTensor & Direct Contract) October 2003 to Present</h4>' +
						 '<h5>Project History</h5>',

		projectsFooter : '<strong class="text-muted">Non-DataTensor work can be discussed during interview.</strong>',

		//List your projects below
		projects : [
			{
				company : 'Partial Contract',
				projectName : 'June Recruiting Platform',
				dates: '3/15 - Present',
				skillsUsed : [
					'JavaScript',
					'React',
					'FRP',
					'BaconJS',
					'NodeJS',
					'Python'
				],
				tags : [
					'System Architecture',
					'AJAX',
					'Data Modeling'
				],
				highlights : [
					'Wrote the front and backend of a candidate management system which helped recruiters find interested candidates',
					'Wrote financial tracking in Node with a PostgreSQL backend',
					'Helped with marketing and messaging',
					'Performed various devops duties'
				]
			},
			{
				company : 'DataTensor - Contract',
				projectName : 'Sapling Learning',
				dates: '9/14 - 9/15',
				skillsUsed : [
					'JavaScript',
					'React',
					'FRP',
					'BaconJS',
					'NodeJS'
				],
				tags : [
					'System Architecture',
					'AJAX',
					'Data Modeling'
				],
				highlights : [
					'Lead team to redesign and rearchitect an existing flash based homework system into a single page HTML5/React.js application',
					'System was redesigned into a functional reactive application using Bacon as the streams library',
					'Created plugin system that allowed for easy future expantion into different subjects by adding new modules',
					'Wrote mock server code to allow disconnected development of modules',
					'Created a test harness to test components in isolation',
					'Trained 3rd party developers on how to create modules for the system',
					'The SPA was later embedded into various homework modules and e-books'
				]
			},
			{
				company : 'DataTensor - Product',
				projectName : 'ShopTensor',
				dates: '2/13 - 2/14',
				skillsUsed : [
					'JavaScript',
					'AngularJS',
					'NodeJS',
					'MongoDB'
				],
				tags : [
					'System Architecture',
					'AJAX',
					'Data Modeling'
				],
				highlights : [
					'Architected and developed large portions of ShopTensor Machine Shop ERP software',
					'Responsible for technology decisions',
					'Responsible for code reviews and ensuring production stability',
					'Entire system written in JavaScript with backend utilizing NodeJS and MongoDB',
					'Collaborated on marketing website copy',
					'Wrote marketing website code for <a href="http://shoptensor.com">ShopTensor</a>'
				]
			},
			{
				company : 'NeoGenis - DataTensor Contract',
				projectName : 'NeoGenis Web/Backend Support',
				dates: '2/14 - 6/14',
				skillsUsed : [
					'JavaScript',
					'HTML5/CSS'
				],
				tags : [
					'AJAX'
				],
				highlights : [
					'Responsible for updating and maintaining NeoGenis web properties',
					'Assist in automating a number of backend data collection processes'
				]
			},
			{
				company : 'Thermopylae Science And Technology - Direct Contract',
				projectName : 'Core Services',
				dates: '1/13 - 9/14',
				skillsUsed : [
					'Java',
					'Android',
					'Objective-C'
				],
				tags : [
					'WebSockets',
					'Low Level Sockets',
					'System Architecture',
					'Data Modeling',
					'SQL'
				],
				highlights : [
					'Responsible for architecture and implementation of core technology stack',
					'Custom Message Queue solution to address needs of closed network, disconnected and mobile users',
					'Agent Manager which acts as a host for business logic',
					'Designed and developed complex event processor capable of processing millions of events a second',
					'Common data abstraction service which allows developers to access data from anywhere without caring where or how it\'s stored',
					'Created "Atlas", a Mac application to help developers develop on and integrate with the Core Services stack',
					'Helped rewrite the entire backend of a TST GeoSpatial product (iSpatial) to utilize the Core Services stack'
				]
			},
			{
				company : 'Thermopylae Science And Technology - Direct Contract',
				projectName : 'Ubiquity',
				dates: '2/12 - 1/13',
				skillsUsed : [
					'Java',
					'Android',
					'Objective-C'
				],
				tags : [
					'System Architecture',
					'Low Level Sockets'
				],
				highlights : [
					'Responsible for maintenance and development of iOS offering as well as Android offering',
					'Significantly reduced battery utilization of application through improvements to radio usage',
					'Created SDK on both Android and iOS for external developers to plug functionality into apps',
					'Created local HTTP server to support a web API in disconnected situations'
				]
			},
			{
				company : 'Thermopylae Science And Technology - Direct Contract',
				projectName : 'Windshear',
				dates: '5/12 - 9/12',
				skillsUsed : [
					'Android'
				],
				tags : [
					'Low Level Sockets'
				],
				highlights : [
					'Helped integrate a library I wrote for Ubiquity to reduce battery usage on mobile application through better use of radio'
				]
			},
			{
				company : 'Thermopylae Science And Technology - Direct Contract',
				projectName : 'ContinuityX',
				dates: '10/12 - 12/12',
				skillsUsed : [
					'Objective-C',
					'Java'
				],
				tags : [
					'Low Level Sockets'
				],
				highlights : [
					'Designed and implemented a storyboarding scheme for iPad that appeared to be a live app',
					'Created backend services to feed simulated data to front end',
					'Assisted client in using app to demonstrate capabilities at trade show'
				]
			},
			{
				company : 'Novus - DataTensor Contract',
				projectName : 'Novus',
				dates: '2/10 - 12/12',
				skillsUsed : [
					'Objective-C',
					'Android',
					'Java',
					'HTML5/CSS',
					'PHP'
				],
				tags : [
					'SQL'
				],
				highlights : [
					'Responsible for designing and developing a celebrity personality monitization platform',
					'Created initial version of both iOS and Android apps for Novus',
					'Created mobile application generator (based on original apps) for both iOS and Android, generator was used to create a number of production apps',
					'Directed efforts of database team',
					'Directed efforts of front end team and code reviewed pull requests into source control'
				]
			},
			{
				company : 'DataTensor - Product',
				projectName : 'DiscoverMyVoice',
				dates: '1/10 - Present',
				skillsUsed : [
					'Objective-C',
					'Android',
					'HTML5/CSS'
				],
				highlights : [
					'Created an assistive communication app for severely disabled children for Android and iOS',
					'Worked with special education teachers to optimize workflow for both kids and caregivers'
				]
			},
			{
				company : 'Various - DataTensor Contract',
				projectName : 'Mobile Apps',
				dates: '2/10-12/12',
				skillsUsed : [
					'Objective-C',
					'Android',
					'HTML5/CSS'
				],
				highlights : [
					'<strong>DubMeNow</strong> Business card sharing app',
					'<strong>EFAS</strong> Fire safety inspection report generator app',
					'<strong>iNeedStuff</strong> Shopping list app with syncing across multiple users',
					'<strong>MobileAlly</strong> Encrypted SIP communication client for Android',
					'<strong>Several others under NDA</strong>'
				]
			},
			{
				company : 'Can discuss during interview',
				projectName : 'Other Clients',
				dates: '2/10-12/12',
				skillsUsed : [
					'Objective-C',
					'Android',
					'Java',
					'HTML5/CSS'
				],
				tags : [
					'C#',
					'C/C++',
					'.NET/IL'
				],
				highlights : [
					'<strong>Schwab</strong> Member of core services team, trading platform team',
					'<strong>Kershner Trading Group</strong> Algorithmic trading and high frequency trading platform team',
					'<strong>YouNeedABudget.com</strong> Port of their C# application to Java',
					'<strong>TotalChart</strong> Medical coding scrubber for PalmOS',
					'<strong>AviSys</strong> Electronic warfare countermeasures system for wide body aircraft',
					'<strong>IBM</strong> Member of E-Config Web Portal team',
					'<strong>Buffalo Wireless</strong> Wireless LAN card driver for Windows',
					'<strong>AdvonTech</strong> Survey tool on Windows CE/PocketPC',
					'<strong>Toolbuilders Labs</strong> Created compiler for C to assist in static analysis of code for security vulnerabilities'
				]
			}
		],

		//List your education here
		education : [
			{
				degree : 'BS in Computer Science',
				school : "Oklahoma City University",
				gradDate : 'December, 1997',
				comments : '3.4 GPA'
			}
		]
	};

	window.angular.module("resume").factory('ResumeService', ['$q', function ($q) {
		function getResume() {
			var defer = $q.defer();
			//if later you want to use REST inject $http and change this
			setTimeout(function () {
				var skills = {};
				//build the skills list from the tags and skills listed in the projects

				//rapidly de-dup skills
				_.each(myResume.projects, function (project) {
					_.each(project.skillsUsed, function (aSkill) {
						skills[aSkill] = (skills[aSkill] || 0) + 1;
					});
					if (project.tags) {
						_.each(project.tags, function (aTag) {
							skills[aTag] = true;
						});
					}
				});

				//now remove ones that we want at the top of the skills list
				_.each(myResume.skills, function (aPredefinedSkill) {
					skills[aPredefinedSkill] = false;
				});

				//attach the leftovers to the skills list and build activeSkills list
				myResume.activeSkills = {};
				_.each(Object.keys(skills), function (aSkill) {
					if (skills.hasOwnProperty(aSkill)) {
						if (skills[aSkill]) {
							myResume.skills.push(aSkill);
						}
						myResume.activeSkills[aSkill] = true;
					}
				});

				defer.resolve(myResume);
			}, 0);
			return defer.promise;
		}

		function toggleSkillActive(skill) {
			if (skill) {
				myResume.activeSkills[skill] = !myResume.activeSkills[skill];
			}
		}

		function containsActiveSkills (skillSet) {
			return _.reduce(skillSet, function(memo, skill) {
				return memo || myResume.activeSkills[skill];
			}, false);
		}

		function skillIsActive (skill) {
			return myResume.activeSkills[skill] === true;
		}

		return {
			getResume : getResume,
			toggleSkillActive: toggleSkillActive,
			skillIsActive: skillIsActive,
			containsActiveSkills: containsActiveSkills
		};
	}]);
}).call();
