function getUserbyid(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(id<=0){
                reject(new Error('invalid user id'));
                return;
            }
            resolve(
                {
                    id,
                    name:'Lin'
                }
            );
        },1000);
    });
}

getUserbyid(1)
    .then((user)=>{console.log(user)})
    .catch((err)=>{console.log(err.message)});