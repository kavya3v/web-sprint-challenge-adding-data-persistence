
exports.seed = async function(knex) {
  await knex("tasks").insert([
    {task_description:"Dry clean tent",task_notes:"waterproof and clean tent",task_completed:"false",project_id:2},
    {task_description:"Clean Kitchen cabinets",task_notes:"clean and sanitize",task_completed:"false",project_id:4},
    {task_description:"Clean garage area",task_notes:"waterwash garage",task_completed:"false",project_id:1},
    {task_description:"Patti garage walls",task_notes:"wall clean garage",task_completed:"false",project_id:1},
    {task_description:"Check and tighten ski boots",task_notes:"Dry clean ski boots",task_completed:"false",project_id:3},
    {task_description:"Clean camping Grill",task_notes:"Wash and clean grill",task_completed:"false",project_id:2},])
};
