set dotenv-load

gen-docx: load-linkedin
    pnpm ts-node src/gen-docx.ts

gen-pdf: gen-docx
    pnpm ts-node src/gen-pdf.ts

load-linkedin:
    python linkedin.py >> data/linkedin.json