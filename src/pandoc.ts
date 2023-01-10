import { spawnSync } from 'child_process';

export function getHtml(filename: string) {
    let pandoc = spawnSync('pandoc', [filename, '-t', 'html']);
    return pandoc.stdout;
}
