
(function(){

  var gallery_projectsEL   = document.getElementById('gallery_projects');
  var project_count        = data_projects.length;

  console.log("gallery_projectsEL %o", gallery_projectsEL);

  var tmpl_card   = document.getElementById('tmpl_gallery_item').innerHTML;
  var hbs_card = Handlebars.compile(tmpl_card);


  for(i=0; i < project_count; i++){

    var project = data_projects[i];

    var html    = hbs_card(project);

    gallery_projectsEL.insertAdjacentHTML('afterend', html);

  }


})();
