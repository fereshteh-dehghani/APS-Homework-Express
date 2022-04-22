const app =require('express')();
app.get('/multiply',(req,res)=>{
     const{value1 , value2}=req.query;
     res.send(`mutiply is ${value1 * value2}`);
})

const PORT=3200;
app.listen(PORT,()=>{
    console.log(`this server is Running on port ${PORT}`);
})