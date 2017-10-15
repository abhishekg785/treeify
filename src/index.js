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
        this.inputDir = directory;
    }

    /**
     * 
     */
    readDir() {
        let parentDir = module.parent.filename;
        console.log(path.resolve(parentDir, this.inputDir));
    }

    /**
     * checks whether the dir exists or not
     * all i need is a base directory and then doing this will help:
     * path.resolve('.', '../build') => /treeify/build where '.' is the current dir
     * or the base directory and the '../build' is the passed directory
     * 
     * user might pass => 
     */
    checkDirExistStatus() {

    }
    
}

export { Treeify };