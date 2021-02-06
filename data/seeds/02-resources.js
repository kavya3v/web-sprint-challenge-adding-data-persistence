
exports.seed = async function(knex) {
  await knex("resources").insert([
    {resource_name:"Paint Brush",resource_description:"Wide and Narrow"},
    {resource_name:"Camp Tent",resource_description:"happy camping"},
    {resource_name:"Grill",resource_description:"Grill for camp and trips"},
    {resource_name:"Ski Shoes",resource_description:"ski n play"},
    {resource_name:"Flashlight",resource_description:"flashlight for camp and ski"},])
};
