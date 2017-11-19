const treeify = require('../build/index');

// pass the dir name
const obj = new treeify.Treeify('../build');

obj.treeify()
.then((data)=>{
    console.log(data);
    console.log(data.ram.shyam.bhanu.fname);
})
.catch((error)=>{
    console.log(error);
});
