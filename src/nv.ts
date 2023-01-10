import fs from 'fs';
import path from 'path';
import { setupServer } from './app';

function die(msg: string) {
    console.error(msg);
    process.exit(1);
}

function main() {
    let argv = process.argv.slice(2)
    if (argv.length != 1)
        die("nv: Invalid number of arguements.");

    let notedir = argv[0];
    if (!fs.existsSync(notedir))
        die("nv: " + notedir + " No such file or directory");

    if (!fs.lstatSync(notedir).isDirectory())
        die("nv: " + notedir + " Not a directory");

    notedir = path.resolve(notedir);
    setupServer(notedir);
}

main();
