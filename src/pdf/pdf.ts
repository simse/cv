import * as fs from "fs";
import * as https from "https";

import CloudConvert from 'cloudconvert';
import { toBase64 } from '../word/word';

if (!process.env.CLOUDCONVERT_API_KEY) {
    throw new Error("Missing CLOUDCONVERT_API_KEY environment variable");
}

const cloudConvert = new CloudConvert(process.env.CLOUDCONVERT_API_KEY);

const wordToPdf = async () => {
    let job = await cloudConvert.jobs.create({
        tasks: {
            'upload-cv': {
                operation: 'import/base64',
                file: await toBase64(),
                filename: 'cv.docx'
            },
            'convert-cv': {
                operation: 'convert',
                input: 'upload-cv',
                input_format: 'docx',
                output_format: 'pdf',
                engine: 'office',
                optimize_print: false,
                include_markups: false,
                bookmarks: false
            },
            'download-cv': {
                operation: 'export/url',
                input: 'convert-cv'
            }
        }
    });

    job = await cloudConvert.jobs.wait(job.id);

    const file = cloudConvert.jobs.getExportUrls(job)[0];
    if (!file.url) {
        throw new Error("No file URL");
    }

    const writeStream = fs.createWriteStream('./cv.pdf');

    https.get(file.url, function(response) {
        response.pipe(writeStream);
    });

    await new Promise((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    });
}

export {
    wordToPdf
}