import fsExtra from 'fs-extra';
import path from 'path';

fsExtra.copySync(path.resolve(process.cwd(), 'src/sass'), path.resolve(process.cwd(), 'sass'));
