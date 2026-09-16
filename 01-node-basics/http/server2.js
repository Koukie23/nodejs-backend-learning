import {createServer} from 'http';
const port=process.env.PORT;

const users=[
    {id:1,name:'John'},
    {id:2,name:'Jane'},
    {id:3,name:'Bob'}
];

const logger=(req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
}

const jsonMiddleware=(req,res,next)=>{
    res.setHeader('Content-Type','application/json');
    next();
}

const getUsersHandler=(req,res)=>{
    res.write(JSON.stringify(users));
    res.end();
}

const getUserByIdHandler=(req,res)=>{
    const id=req.url.split('/')[3];
    const user=users.find((user)=>user.id===parseInt(id, 10));

    if(!user){
        res.statusCode=404;
        res.write(JSON.stringify({message:'User Not Found'}));
        res.end();
        return;
    }

    res.write(JSON.stringify(user));
    res.end();
}

const createUserHandler=(req,res)=>{
    let body='';
    req.on('data',(chunk)=>{
        body+=chunk.toString();
    });
    req.on('end',()=>{
        const newUser=JSON.parse(body);
        users.push(newUser);
        res.statusCode=201;
        res.write(JSON.stringify(newUser));
        res.end();
    });
}


const notFoundHandler=(req,res)=>{
    res.statusCode=404;
    res.write(JSON.stringify({message:'Not Found'}));
    res.end();
}

const server = createServer((req,res)=>{
    logger(req,res,()=>{
        jsonMiddleware(req,res,()=>{
            if(req.method==='GET' && req.url==='/api/users'){
                getUsersHandler(req,res);
            }else if(req.url.match(/\/api\/users\/[0-9]+/) && req.method==='GET'){
                getUserByIdHandler(req,res);
            }else if(req.url==='/api/users' && req.method==='POST'){
                createUserHandler(req,res);
            }
            else{
                notFoundHandler(req,res);
            }
    
        });
    });
});

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});