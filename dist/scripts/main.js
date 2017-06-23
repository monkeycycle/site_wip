
(function(){
  console.log('Init Init');

  var project_count = data_projects.length;

  console.log("data_projects %o", data_projects);

  for(i=0; i < project_count; i++){

    var project = data_projects[i];

    console.log(i + " ::: " + project.title + " " + project.date)
    console.log(project.url)


  }


})();
