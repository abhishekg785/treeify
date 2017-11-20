const treeify = require('../build/index');

// pass the dir name
const obj = new treeify.Treeify('../build');

let tree = obj.treeifyPromise();

tree.then((d) => {
    console.log(d);
});
