const express=require('express')
const app=express()
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

app.listen(3000,()=>{
    console.log('Express server running at http://localhost:3000');
});