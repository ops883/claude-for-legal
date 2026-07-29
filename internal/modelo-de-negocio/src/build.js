const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Footer, Header, PageNumber, AlignmentType,
  BorderStyle, PageOrientation,
} = require('docx');

const H = require('./build-helpers');
const C1 = require('./content-1');
const C2 = require('./content-2');
const C3 = require('./content-3');

const { NAVY, SLATE, RULE } = H;
const FIRM = C1.FIRM;

const body = [
  ...C1.cover,
  ...C1.preliminar,
  ...C1.parte0,
  ...C1.parte1,
  ...C1.parte2,
  ...C1.parte3,
  ...C1.parte4,
  ...C2.parte5,
  ...C2.parte6,
  ...C2.parte7,
  ...C2.parte8,
  ...C2.parte9,
  ...C2.parte10,
  ...C2.parte11,
  ...C2.parte12,
  ...C2.parte13,
  ...C3.parte14,
  ...C3.parte15,
  ...C3.parte16,
  ...C3.resumen,
  ...C3.anexo,
];

const footer = new Footer({
  children: [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      border: { top: { style: BorderStyle.SINGLE, size: 4, color: RULE, space: 8 } },
      children: [
        new TextRun({ text: `${FIRM}  ·  Modelo de negocio  ·  Documento interno  ·  `, size: 15, color: '8A94A6' }),
        new TextRun({ children: [PageNumber.CURRENT], size: 15, color: '8A94A6' }),
        new TextRun({ text: ' / ', size: 15, color: '8A94A6' }),
        new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 15, color: '8A94A6' }),
      ],
    }),
  ],
});

const doc = new Document({
  creator: FIRM,
  title: 'Modelo de Negocio de una Firma Legal en Estados Unidos',
  description: `Documento de estudio y planificacion estrategica — ${FIRM}`,
  numbering: H.numberingConfig,
  styles: {
    default: {
      document: { run: { font: 'Calibri', size: 21, color: '212934' } },
    },
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

Packer.toBuffer(doc).then((buf) => {
  const out = process.argv[2] || 'modelo-de-negocio.docx';
  fs.writeFileSync(out, buf);
  console.log(`wrote ${out}  (${(buf.length / 1024).toFixed(1)} KB)`);
});
