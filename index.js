// start your server here
//Kavya-Gunasekar
const server=require('./api/server');

const port = process.env.PORT || 8000

server.listen(port,()=>{
    console.log(`** \n Server listening port ${port} \n**`)
})
