import { INumberingOptions, IStylesOptions, LevelFormat, LevelSuffix, AlignmentType } from "docx";
import { SANS_SERIF_FONT, SERIF_FONT } from "./constants";

const styles: IStylesOptions = {
    /*default: {
        heading1: {
            run: {
                font: 'Bierstadt',
            }
        },
        document: {
            run: {
                font: 'Bierstadt',
            }
        }
    },*/
    paragraphStyles: [
        {
            id: "Normal",
            name: "Normal",
            run: {
                font: SANS_SERIF_FONT,
                size: 24
            }
        },
        {
            id: "SectionHeading",
            name: "Section Heading",
            basedOn: "Normal",
            next: "Normal",
            quickFormat: true,
            run: {
                bold: true,
                size: 22,
                color: '#4b5563',
                font: SANS_SERIF_FONT
            },
            paragraph: {
                spacing: {
                    before: 240,
                    after: 240,
                },
            },
        },
        {
            id: "HeaderTitle",
            name: "Header Title",
            basedOn: "Normal",
            next: "Normal",
            quickFormat: true,
            run: {
                bold: true,
                size: 26,
                color: '#000000',
                font: SANS_SERIF_FONT
            },
        },
        {
            id: "Title",
            name: "Title",
            basedOn: "Normal",
            next: "Normal",
            quickFormat: true,
            run: {
                bold: false,
                size: 30,
                color: '#000000',
                font: SERIF_FONT,
            },
        },
        {
            id: "Muted",
            name: "Header Muted",
            basedOn: "Normal",
            next: "Normal",
            quickFormat: true,
            run: {
                bold: false,
                size: 22,
                color: '#6b7280',
                font: SANS_SERIF_FONT
            },
        },
        {
            id: "List",
            name: "List",
            basedOn: "Normal",
            next: "Normal",
            quickFormat: true,
            paragraph: {
                indent: {

                },
                spacing: {
                    line: 240 * 1.5,
                    after: 0
                }
            }
        }
    ],
};

const numbering: INumberingOptions = {
    config: [
        {
            reference: "List",
            levels: [
                {
                    level: 0,
                    format: LevelFormat.BULLET,
                    text: "\u2022    ",
                    alignment: AlignmentType.LEFT,
                    suffix: LevelSuffix.NOTHING,
                    /*style: {
                        paragraph: {
                            indent: {
                                left: 360,
                                hanging: 240,
                            },
                        }
                    }*/
                },
            ]
        }
    ]
}

export {
    styles,
    numbering
}