const express =require('express');
const app=express();

app.get('/chocolate',(req,res)=>{
     const {amount}=req.query;
     res.send(`You Request ${amount} of Chocolate`)
})











/*  Create PORT*/
const PORT=3000;
 const server = app.listen(PORT,()=>{
    console.log(`This Server Is Runnig On port ${PORT} Hi`);
});
