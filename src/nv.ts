import fs from 'fs';
import path from 'path'
import { setupServer } from './app';
import open from 'open';

function die(msg: string) {
    console.error(msg);
    process.exit(1);
}

function main() {
    let argv = process.argv.slice(2)
    let argc = argv.length;

    if (argc < 1 && argc > 3)
        die("nv: Invalid number of arguements.");

    let dir = "";
    let port = 8000;
    for (let i = 0; i < argc; i++)
        if (argv[i] == '-p') {
            if (!(port = parseInt(argv[++i])))
                die("nv: Invalid port number");
        }
        else {
            dir = argv[i];
        }

    if (!dir)
        die("nv: Missing note directory");

    if (!fs.existsSync(dir))
        die("nv: " + dir + " No such file or directory");

    // check if file or directory
    dir = fs.lstatSync(dir).isDirectory() ? dir : path.dirname(dir);
        setupServer(dir, port);
}

main();
