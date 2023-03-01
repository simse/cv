import * as fs from "fs";
import { Document, Packer } from "docx";

import { certificationItem, educationItem, header, heading, title, workItem, spacer } from "./components";
import { styles, numbering } from "./styles";

const cv = new Document({
    creator: "Simon Sorensen",
    description: "Simon Sorensen's CV",
    title: "Simon Sorensen's CV",
    styles: styles,
    numbering: numbering,
    sections: [
        {
            properties: {
                page: {
                    margin: {
                        top: 650,
                        right: 650,
                        bottom: 650,
                        left: 650,
                    }
                }
            },
            children: [
                header,
                title("Software Engineer", "Two years of experience building fast web experiences"),
                heading("Work Experience"),
                workItem({
                    company: "LEGO",
                    location: "London, UK",
                    position: "Software Engineering Intern",
                    startDate: "March 2022",
                    highlights: [
                        "Worked on Next.js applications",
                        "Built internal Typescript SDK",
                        "Worked on serverless applications deployed with AWS CDK and AWS Lambda"
                    ]
                }),
                spacer(1),
                workItem({
                    company: "LEGO",
                    location: "Billund, DK",
                    position: "Student Worker",
                    startDate: "March 2021",
                    endDate: "October 2021",
                    highlights: [
                        "Built internal tools using Microsoft PowerApps",
                        "Created business reports with Microsoft PowerBI",
                        "Advocated for Agile practices within the team"
                    ]
                }),
                spacer(2),
                heading("Education"),
                educationItem({
                    institution: "Kingston University",
                    location: "London, UK",
                    degree: "Computer Science, BSc",
                    startDate: "September 2021",
                    endDate: "June 2024"
                }),
                spacer(2),
                heading("Certifications"),
                certificationItem({
                    issuer: "AWS",
                    name: "Cloud Practitioner",
                    date: "November 2022"
                })
            ],
        },
    ],
});

/*Packer.toBuffer(cv).then((buffer) => {
    fs.writeFileSync("cv.docx", buffer);
});*/

const toBase64 = async () => {
    return Packer.toBase64String(cv);
}

const toBuffer = async () => {
    return Packer.toBuffer(cv);
}

export {
    toBase64,
    toBuffer
}