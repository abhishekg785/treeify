/**
 * treeify: a simple manager to treeify the directory having modules
 *
 * @author: abhishek goswami ( hiro )
 * abhishekg785@gmail.com
 */

import path from 'path';
import fs, { stat } from 'fs';

class Treeify {

  // get the name of the directory here
  constructor(directory) {

    // maybe a relative path or an absolute path
    this.inputDir = directory;

    // the path of the module in which it has been required or imported
    this.parentDir = path.dirname(module.parent.filename);

    this.resolvedPath = path.resolve(this.parentDir, this.inputDir);
  }

  /**
   * Promisified version
   * treeify the given dir
   */
  async treeifyPromise() {
    let fileStatus = await this.checkDirExistStatus();
    if (!fileStatus) {
      throw new Error('No such directory exists!');
    }
    let genTree = this.createTree(this.resolvedPath);
    return genTree;
  }

  /**
   * Non-Promisified version
   * treeify the given dir
   */
  treeify() {
    if(this.checkDirExistStatusSync()) {
      return this.createTree(this.resolvedPath);
    }
    else {
      throw new Error('No such directory exists!');
    }
  }

  // this function create the required tree using
  // a little magic of recursion :P
  // pass the dir here and it will recursively get the files
  // in the dir and require the modules to form the tree
  createTree(dir) {
    let genTree = {};
    fs.readdirSync(dir).forEach(file => {
      let filePath = path.join(dir, file);
      if (fs.lstatSync(filePath).isDirectory()) {
        return genTree[file] = this.createTree(filePath);
      }

      let requireFile = require(filePath);
      Object.getOwnPropertyNames(requireFile).forEach((key) => {
        genTree[key] = requireFile[key];
      });
    });

    return genTree;
  }

  /**
   * check for the given dir exists or not
   */
  checkDirExistStatus() {
    return new Promise((res, rej) => {
      let resolvedPath = path.resolve(this.parentDir, this.inputDir);
      fs.stat(resolvedPath, (err, stats) => {
        if(err && err.errno == '-2') { // error code for not exists
          res(false);
        }
        res(true);
      });
    });
  }

  /**
   * checks whether the dir exists or not
   */
  checkDirExistStatusSync() {
    try {
      return fs.statSync(this.resolvedPath).isDirectory();
    } catch(err) {
      if(err.errno === 2) {
        return false;
      }
    }
  }

}

export { Treeify };
