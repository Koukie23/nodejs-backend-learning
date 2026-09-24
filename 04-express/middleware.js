const express=require('express')
const app=express()
const contacts=[
    {id:1,name:'Amy'},
    {id:2,name:'Bob'}
];

app.use((req,res,next)=>{
    console.log(req.method,req.url);
    next();
})
app.get('/contacts',(req,res)=>{
    res.status(200).json(contacts)
})
app.listen(3000,()=>{
    console.log('Express server running at http://localhost:3000');
});