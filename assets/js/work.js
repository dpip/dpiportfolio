dpip.controller( 'WorkController', function ($scope) {

  $scope.projects = [
    {id: 1,
      title: "PurposeUX",
      tools: [{
        html5: "HTML5",
        css3: "CSS3",
        sass: "SASS",
        angular: "AngularJS",
      }],
      description: "llhjhlkjlkhkjhk",
    },
    {id: 2,
      title: "TRIND",
      tools: [{
        html5: "HTML5",
        css3: "CSS3",
        sass: "SASS",
        angular: "AngularJS",
        ruby: "Ruby",
      }],
      description: "",
    },
    {id: 3,
      title: "MoffettCraft",
      tools: [{
        html5: "HTML5",
        css3: "CSS3",
        sass: "SASS",
        jquery: "JQuery",
      }],
      description: "",
    },
  ];

  var purpose = $scope.projects[0];
  var trind = $scope.projects[1];
  var moffettcraft = $scope.projects[2];
  

});
