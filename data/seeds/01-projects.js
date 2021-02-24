exports.seed = async function(knex) {
  await knex("projects").insert([
    {project_name:"Paint Garage",project_description: "Summer project - paint",project_completed:true},
    {project_name:"Camping Trip",project_description: "Camping Trip to Crater Lake",project_completed:true},
    {project_name:"Ski Trip",project_description: "Mt.Hood Ski Trip",project_completed:true},
    {project_name:"Paint Kitchen",project_description: "Paint kitchen cabinet",project_completed:false},
   ])
};