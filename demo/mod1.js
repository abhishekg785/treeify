const treeify = require('../build/index');

// pass the dir name
const obj = new treeify.Treeify('../build');

obj.readDir()
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
});