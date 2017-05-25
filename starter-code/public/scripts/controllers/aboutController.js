'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // COMMENT-DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // 1. This function is hiding the #about elements siblings while showing the #about element. Following this it is making a call to the github api to retrieve the repos and then rendering using the app.repoView.index method. 2. It is called in the routes.js as the handler for the '/about' route. 3. It is calling app.repos.requestRepos from the repo.js file and passing in the app.repoView.index.
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
