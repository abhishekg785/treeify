/**
 * treeify: a simple manager to treeify the directory having modules
 * 
 * @author: abhishek goswami ( hiro )
 * abhishekg785@gmail.com
 */

import path from 'path';
import fs from 'fs';
import merge from 'merge'; // using for merging the objects when needed
import type from 'component-type'; // for checking types when needed

class Treeify {

    // get the name of the directory here
    constructor(directory) {

        // maybe a relative path or an absolute path
        this.inputDir = directory;

        // the path of the module in which it has been required or imported
        this.parentDir = path.dirname(module.parent.filename);
    }

    /**
     * 
     */
    async readDir() {
        return await this.checkDirExistStatus();
    }

    /**
     * eheck for the given dir exists or not
     */
    checkDirExistStatus() {
        return new Promise((res, rej) => {
            let resolvedPath = path.resolve(this.parentDir, this.inputDir);
            fs.stat(resolvedPath, (err, stats) => {
                if(err && err.errno == '-2') { // error code for not exists
                    rej(new Error('No such directory!'));
                }
                res(true);
            });
        });
    }
    
}

export { Treeify };