import { TabStopType, Table, TableCell, TableRow, WidthType, Paragraph, LineRuleType, TextRun, Tab } from "docx";
import { NO_BORDER } from "./utils";

// header
const contactInfoLine = (left: string, right: string) => new Paragraph({
    style: "Muted",
    children: [
        new TextRun({
            children: [
                left,
                new Tab(),
                right,
            ]
        })
    ],
    tabStops: [
        {
            type: TabStopType.RIGHT,
            position: 1400,
        }
    ]
});

const contactInfo = (location: string, phone: string, email: string, website: string) => [
    contactInfoLine(location, phone),
    contactInfoLine(email, website)
]

const header = new Table({
    width: {
        size: 100,
        type: WidthType.PERCENTAGE,
    },
    borders: NO_BORDER,
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    children: [new Paragraph({ text: "Simon Sorensen", style: "HeaderTitle" })],
                    borders: NO_BORDER,
                    width: {
                        size: 64,
                        type: WidthType.PERCENTAGE,
                    }
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "London, UK",
                            style: "Muted"
                        }),
                        new Paragraph({
                            text: "hello@simse.io",
                            style: "Muted"
                        }),
                    ],
                    borders: NO_BORDER,
                    width: {
                        size: 16,
                        type: WidthType.PERCENTAGE,
                    }
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "+44 7484 173 025",
                            style: "Muted"
                        }),
                        new Paragraph({
                            text: "simse.io",
                            style: "Muted"
                        }),
                    ],
                    borders: NO_BORDER,
                    width: {
                        size: 20,
                        type: WidthType.PERCENTAGE,
                    }
                })
            ]
        })
    ]
});

const title = (career: string, experience: string) => (new Paragraph({
    style: "Title",
    spacing: {
        before: 720,
        after: 720,
        lineRule: LineRuleType.EXACTLY,
    },
    children: [
        new TextRun({
            text: career,
            italics: true,
        }),
        new TextRun({
            text: " — ",
        }),
        new TextRun({
            text: experience,
        }),
        new TextRun({
            text: ".",
        }),
    ]
}));

const heading = (text: string) => new Paragraph({
    text: text,
    style: "SectionHeading",
});

interface ItemInput {
    title: string;
    subtitle?: string;
    emphasisText: string;
    startDate: string;
    endDate?: string;
    list?: string[];
}

const item = (input: ItemInput) => {

    return new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        style: "Normal",
        borders: NO_BORDER,
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({ 
                                text: input.title, 
                                style: "Title",
                                spacing: { 
                                    after: 120 
                                }
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: input.subtitle,
                                        bold: true,
                                    }),
                                ]
                            }),
                        ],
                        borders: NO_BORDER,
                        width: {
                            size: 35,
                            type: WidthType.PERCENTAGE,
                        }
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                spacing: {
                                    after: 120,
                                },
                                children: [
                                    new TextRun({
                                        text: input.emphasisText,
                                        bold: true
                                    }),
                                    new TextRun({
                                        text: "     ",
                                    }),
                                    new TextRun({
                                        text: `${input.startDate}${input.endDate ? ` — ${input.endDate}` : ''}`,
                                        color: '#4B5563',
                                    })
                                ]
                            }),
                            ...(input.list || []).map((text) => new Paragraph({
                                numbering: {
                                    level: 0,
                                    reference: "List",
                                },
                                style: "List",
                                spacing: {
                                    after: 0,
                                },
                                children: [
                                    new TextRun({
                                        text: text + ".",
                                    })
                                ]
                            }))
                        ],
                        borders: NO_BORDER,
                        width: {
                            size: 65,
                            type: WidthType.PERCENTAGE,
                        }
                    })
                ]
            })
        ]
    });
};

// make some inputs non-optional
interface WorkItemInput {
    company: string;
    location: string;
    position: string;
    startDate: string;
    endDate?: string;
    highlights: string[];
}

const workItem = (input: WorkItemInput) => item({
    title: input.company,
    subtitle: input.location,
    emphasisText: input.position,
    startDate: input.startDate,
    endDate: input.endDate || 'Present',
    list: input.highlights,
});

interface EducationItemInput {
    institution: string;
    location: string;
    degree: string;
    startDate: string;
    endDate: string;
}

const educationItem = (input: EducationItemInput) => item({
    title: input.institution,
    subtitle: input.location,
    emphasisText: input.degree,
    startDate: input.startDate,
    endDate: input.endDate,
});

interface CertificationItemInput {
    issuer: string;
    name: string;
    date: string;
}

const certificationItem = (input: CertificationItemInput) => item({
    title: input.issuer,
    emphasisText: input.name,
    startDate: input.date,
});

const spacer = (size = 2) => new Paragraph({
    spacing: {
        before: size * 120,
        after: size * 120,
        lineRule: LineRuleType.EXACTLY,
    },
});

export {
    header,
    title,
    heading,
    item,
    workItem,
    educationItem,
    certificationItem,
    spacer
};