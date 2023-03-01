import * as fs from 'fs';
import { getCvData } from './linkedin/linkedin';
import { toBuffer } from './word/word';

toBuffer().then((buffer) => {
    fs.writeFileSync("cv.docx", buffer);
});

getCvData();