import { ITableBordersOptions, BorderStyle } from "docx";

const NO_BORDER: ITableBordersOptions = {
    bottom: {
        color: "FFFFFF",
        size: 0,
        style: BorderStyle.NONE
    },
    top: {
        color: "FFFFFF",
        size: 0,
        style: BorderStyle.NONE
    },
    left: {
        color: "FFFFFF",
        size: 0,
        style: BorderStyle.NONE
    },
    right: {
        color: "FFFFFF",
        size: 0,
        style: BorderStyle.NONE
    },
};

export {
    NO_BORDER,
};