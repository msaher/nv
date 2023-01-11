import { spawnSync } from 'child_process';
import path from 'path';

const accepExt = [
    '.docx',
    '.epub',
    '.fb2',
    '.gfm',
    '.haddock',
    '.html',
    '.jats',
    '.json',
    '.tex',
    '.man',
    '.md',
    '.markdown',
    '.odt',
    '.opml',
    '.org',
    '.rst',
    '.t2t',
    '.wiki',
];

export function getHtml(filename: string): Buffer | null {
    let ext = path.extname(filename);
    if (!accepExt.includes(ext))
        return null;

    let pandoc = spawnSync('pandoc', [filename, '--mathjax', '-t', 'html']);
    return pandoc.stdout;
}
