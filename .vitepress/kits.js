import { dirname, resolve } from "node:path";
import os from "node:os";

// console.log(path);
// console.log(os.version());

// path.basename("", "md");
console.log(dirname("."));

console.log(resolve());

const absPath = resolve();

const resPath = "../blogs";

const res = () => {};
