function getuser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(
                {
                    id:1,
                    name:'Lin'
                }
            );
        },1000);
    });
}

function getorders(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve([
                {id:1001,product:'mac'},
                {id:1002,product:'iphone'}]
            );
        },2000);
    });
}

function getpoint(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(100);
        },1500);
    });
}

async function main(){
    try{
        console.time('total');
        const users=await getuser()
        const orders=await getorders()
        const points=await getpoint()

        console.log(users)
        console.log(orders)
        console.log(points)
        console.timeEnd('total')
    }catch(err){
        console.log(err.message);
    };
}

main();