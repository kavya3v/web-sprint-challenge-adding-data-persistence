exports.up = async function(knex) {
  //projects
  await knex.schema.createTable("projects",(table)=>{
    table.increments("project_id")
    table.text("project_name").notNull()
    table.text("project_description")
    table.boolean("project_completed").defaultTo("false").notNull();
  })
  //resources
  await knex.schema.createTable("resources",(table)=>{
    table.increments("resource_id")
    table.text("resource_name").notNull().unique()
    table.text("resource_description")
  })
  //tasks
  await knex.schema.createTable("tasks",(table)=>{
    table.increments("task_id")
    table.string("task_description").notNull()
    table.string("task_notes")
    table.boolean("task_completed").defaultTo("false").notNull()
    //creates foreign key to projects table
    table.integer("project_id").notNull().unsigned()
        .references("project_id").inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
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
