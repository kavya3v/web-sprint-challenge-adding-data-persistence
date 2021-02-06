
exports.seed = async function(knex) {
  //remember to those tables with dependencies first!
  await knex("project_resources").truncate()
  await knex("tasks").truncate()
  await knex("resources").truncate()
  await knex("projects").truncate()
};
