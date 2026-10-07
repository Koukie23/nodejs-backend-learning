const express=require('express')
const app=express()

console.log('RUNNING FILE:', __filename);

app.use((req, res, next) => {
  console.log('REQUEST:', req.method, req.url);
  next();
});

app.use(express.json())
const contacts=[
    {id:1,name:'Amy'},
    {id:2,name:'Bob'}
];
const greet={
    "message":'hello'
};

app.get('/contacts',(req,res)=>{
    const name=req.query.name
    const limit=Number(req.query.limit)
    let result=contacts
    if(name){
        result=result.filter((item)=>item.name===name);
    }
    if(limit){
        result=result.slice(0,limit)
    }
    res.status(200).json(result)
});

app.get('/hello',(req,res)=>{
    res.status(200).json(greet);
});

app.get('/contacts/:id',(req,res)=>{
    const id=Number(req.params.id);
    const contact=contacts.find((item)=>item.id===id);
    if(!contact){
        return res.status(404).json({
            message:'Contact not found'
        })
    };
    res.status(200).json(contact);
})

app.post('/contacts',(req,res)=>{
    const {name,phone}=req.body;

    const newcontact={
        id:contacts.length+1,
        name,
        phone
    }
    contacts.push(newcontact)
    res.status(201).json(newcontact);
})

app.patch('/contacts/:id',(req,res)=>{
    const id=Number(req.params.id)
    const contact=contacts.find((item)=>item.id===id);
    if(!contact){
        return res.status(404).json({
            message:'Contact not found'
        });
    };
    const {name,phone}=req.body
    if(name!=undefined){
        contact.name=name
    };
    if(phone!=undefined){
        contact.phone=phone
    }
    res.status(200).json(contact);

})

app.delete('/contacts/:id',(req,res)=>{
    const id=Number(req.params.id)
    const index=contacts.findIndex((item)=>item.id===id)
    if(index==-1){
        return res.status(404).json({
            message:'Contact not found'
        })
    }
    contacts.splice(index,1);
    res.status(204).end();
})

app.get('/error',(req,res,next)=>{
    const err=new Error('This is a test error');
    next(err);
});

app.use((err,req,res,next)=>{
    console.error(err.message)
    res.status(500).json({
        message:err.message
    });
});

app.use((req,res,next)=>{
    const err=new Error('Route not found')
    err.status=404
    next(err);
})

app.use((err,req,res,next)=>{
    console.error(err.message)
    const status=err.status||500
    res.status(status).json({
        message:err.message||'Internal Server Error'
    });
});

app.listen(3000,()=>{
    console.log('Express server running at http://localhost:3000');
});