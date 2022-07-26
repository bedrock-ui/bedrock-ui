import bytes from 'bytes';
import { gzipSizeFromFileSync } from 'gzip-size';
import path from 'path';

const gzipSize = gzipSizeFromFileSync(path.resolve('css/bedrock-ui.css'));
const formattedSize = bytes.format(gzipSize);

console.log(`${formattedSize} GZIPPED`);
