const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Footer, PageNumber, AlignmentType,
  BorderStyle, PageOrientation,
} = require('docx');

const H = require('../../lib/build-helpers');
const M = require('./memo-content');
const { NAVY, SLATE, RULE } = H;

const FIRM = 'Law Offices of Jose R. Santiago, PLLC';

function makeDoc(titleText, label, body) {
  const footer = new Footer({
    children: [new Paragraph({
      alignment: AlignmentType.CENTER,
      border: { top: { style: BorderStyle.SINGLE, size: 4, color: RULE, space: 8 } },
      children: [
        new TextRun({ text: `${FIRM}  ·  ${label}  ·  Documento interno  ·  `, size: 15, color: '8A94A6' }),
        new TextRun({ children: [PageNumber.CURRENT], size: 15, color: '8A94A6' }),
        new TextRun({ text: ' / ', size: 15, color: '8A94A6' }),
        new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 15, color: '8A94A6' }),
      ],
    })],
  });

  return new Document({
    creator: FIRM,
    title: titleText,
    description: `${label} — ${FIRM}`,
    numbering: H.numberingConfig,
    styles: {
      default: { document: { run: { font: 'Calibri', size: 21, color: '212934' } } },
      paragraphStyles: [
        { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { font: 'Calibri', size: 32, bold: true, color: NAVY } },
        { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { font: 'Calibri', size: 25, bold: true, color: NAVY } },
        { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { font: 'Calibri', size: 22, bold: true, color: SLATE } },
      ],
    },
    sections: [{
      properties: {
        page: {
          size: { width: 12240, height: 15840, orientation: PageOrientation.PORTRAIT },
          margin: { top: 1440, right: 1440, bottom: 1300, left: 1440 },
        },
      },
      footers: { default: footer },
      children: body,
    }],
  });
}

const jobs = [
  ['Nota de cumplimiento — Preparación de escritos presentados pro se',
   'Nota de cumplimiento', M.memo1, 'Nota-Cumplimiento-Escritos-Pro-Se.docx'],
  ['Memorando de decisión — Camino A o Camino B',
   'Memorando de decisión', M.memo2, 'Memo-Decision-Camino-A-o-B.docx'],
];

(async () => {
  for (const [t, label, body, out] of jobs) {
    const buf = await Packer.toBuffer(makeDoc(t, label, body));
    fs.writeFileSync(out, buf);
    console.log(`wrote ${out}  (${(buf.length / 1024).toFixed(1)} KB)`);
  }
})();
