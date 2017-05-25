'use strict';
var app = app || {};

(function(module) {
  const adminView = {
    initAdminPage : () => {
      let template = Handlebars.compile($('#author-template').text());
        // COMMENT-done: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
        // 1. We're looping through the number of words per author and appending that value to the class authorstats. Then we are inserting the total number of articles and total word count to the blog-stats id. 2. This is called in line 16. 3. It calls numWordsByAuthor, to pull the data describing the words per author.
      app.Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));
      $('#blog-stats .articles').text(app.Article.all.length);
      $('#blog-stats .words').text(app.Article.numWordsAll());
    }
  };

  app.Article.fetchAll(adminView.initAdminPage);
  module.adminView = adminView;
})(app);
