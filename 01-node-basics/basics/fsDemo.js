//import fs from 'fs';
import fs from 'fs/promises';

/* fs.readFile('../data/text.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
 */

/* //同步
const data = fs.readFileSync('../data/text.txt', 'utf-8');
console.log(data); */

//Promise.then()
/* fs.readFile('../data/text.txt', 'utf-8')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
 */
//异步
const readFile =async () => {
    try{
        const data = await fs.readFile('../data/text.txt', 'utf-8');
        console.log(data);
    }catch(err){
        console.error(err);
    }

}

//writeFile
const writeFile = async () => {
    try{
        await fs.writeFile('../data/text.txt', 'Hello, I am writing to the file!', 'utf-8');
        console.log('File written to ...');
    }catch(err){
        console.error(err);
    }
};


//appendfile
const appendFile = async () => {
    try{
        await fs.appendFile('../data/text.txt', '\nThis is an appended line!', 'utf-8');
        console.log('File');
    }catch(err){
        console.error(err);
    }
}



writeFile();
appendFile();
readFile();