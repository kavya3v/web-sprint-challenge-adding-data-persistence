exports.up = async function(knex) {
  //projects
  await knex.schema.createTable("projects",(table)=>{
    table.increments("project_id")
    table.string("project_name",128).notNullable()
    table.string("project_description",1000)
    //table.integer("project_completed").defaultTo(0).notNullable();
    table.boolean("project_completed").notNullable().defaultTo(false);
  })
  //resources
  await knex.schema.createTable("resources",(table)=>{
    table.increments("resource_id")
    table.string("resource_name").notNullable().unique()
    table.string("resource_description")
  })
  //tasks
  await knex.schema.createTable("tasks",(table)=>{
    table.increments("task_id")
    table.string("task_description").notNullable()
    table.string("task_notes")
    table.boolean("task_completed").defaultTo(false).notNullable()
    //creates foreign key to projects table
    table.integer("project_id").notNull().unsigned()
        .references("project_id").inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
  })
  //the intermediary/bridge table
  await knex.schema.createTable("project_resources",(table)=>{
    table.integer("project_id").notNull().unsigned()
          .references("project_id").inTable("projects")
          .onDelete("CASCADE")
          .onUpdate("CASCADE")
   table.integer("resource_id").notNull().unsigned()
          .references("resource_id").inTable("resources")
          .onDelete("CASCADE")
          .onUpdate("CASCADE")
   table.primary(["project_id","resource_id"])

})
}

  
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("project_resources")   
  await knex.schema.dropTableIfExists("tasks")  
  await knex.schema.dropTableIfExists("resources")
  await knex.schema.dropTableIfExists("projects")
}