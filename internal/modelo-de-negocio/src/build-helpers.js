const {
  Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell,
  WidthType, ShadingType, BorderStyle, LevelFormat, PositionalTab,
} = require('docx');

const NAVY = '1F3864';
const SLATE = '44546A';
const LIGHT = 'EDF1F7';
const BAND = 'F5F7FA';
const RULE = 'C7D0DC';
const ACCENT = '8C6B2F';

const CONTENT_W = 9360; // Letter 12240 − 2×1440 margins

// --- inline formatting: **bold**, *italic*, `code` ---------------------------
function runs(text, opts = {}) {
  const base = { size: opts.size || 21, color: opts.color, font: opts.font };
  const out = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(new TextRun({ ...base, text: text.slice(last, m.index) }));
    const tok = m[0];
    if (tok.startsWith('**')) {
      out.push(new TextRun({ ...base, text: tok.slice(2, -2), bold: true }));
    } else if (tok.startsWith('`')) {
      out.push(new TextRun({ ...base, text: tok.slice(1, -1), font: 'Consolas', size: (opts.size || 21) - 2 }));
    } else {
      out.push(new TextRun({ ...base, text: tok.slice(1, -1), italics: true }));
    }
    last = m.index + tok.length;
  }
  if (last < text.length) out.push(new TextRun({ ...base, text: text.slice(last) }));
  return out;
}

// --- block builders ----------------------------------------------------------
const h1 = (t) => new Paragraph({
  heading: HeadingLevel.HEADING_1,
  spacing: { before: 480, after: 200 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 10, color: NAVY, space: 6 } },
  children: [new TextRun({ text: t, bold: true, size: 32, color: NAVY, font: 'Calibri' })],
});

const h2 = (t) => new Paragraph({
  heading: HeadingLevel.HEADING_2,
  spacing: { before: 320, after: 140 },
  children: [new TextRun({ text: t, bold: true, size: 25, color: NAVY, font: 'Calibri' })],
});

const h3 = (t) => new Paragraph({
  heading: HeadingLevel.HEADING_3,
  spacing: { before: 240, after: 100 },
  children: [new TextRun({ text: t, bold: true, size: 22, color: SLATE, font: 'Calibri' })],
});

const p = (t, opts = {}) => new Paragraph({
  spacing: { after: opts.after === undefined ? 140 : opts.after, line: 276 },
  alignment: opts.align,
  indent: opts.indent,
  children: runs(t, opts),
});

const bullet = (t, level = 0) => new Paragraph({
  numbering: { reference: 'bullets', level },
  spacing: { after: 70, line: 264 },
  children: runs(t),
});

const check = (t) => new Paragraph({
  numbering: { reference: 'checks', level: 0 },
  spacing: { after: 70, line: 264 },
  children: runs(t),
});

const numbered = (t, level = 0) => new Paragraph({
  numbering: { reference: 'nums', level },
  spacing: { after: 70, line: 264 },
  children: runs(t),
});

const spacer = (h = 120) => new Paragraph({ spacing: { after: h }, children: [] });

// Monospace block (ASCII diagrams, formulas)
const mono = (lines, opts = {}) => {
  const rows = Array.isArray(lines) ? lines : lines.split('\n');
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [CONTENT_W],
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: RULE },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: RULE },
      left: { style: BorderStyle.SINGLE, size: 4, color: RULE },
      right: { style: BorderStyle.SINGLE, size: 4, color: RULE },
      insideHorizontal: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
      insideVertical: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
    },
    rows: [new TableRow({
      children: [new TableCell({
        width: { size: CONTENT_W, type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, fill: BAND },
        margins: { top: 140, bottom: 140, left: 180, right: 140 },
        children: rows.map((ln) => new Paragraph({
          spacing: { after: 0, line: 216 },
          children: [new TextRun({ text: ln || ' ', font: 'Consolas', size: opts.size || 15 })],
        })),
      })],
    })],
  });
};

// Highlighted callout — used for "Aplicación a nuestra firma"
const callout = (title, bodyParas, opts = {}) => new Table({
  width: { size: CONTENT_W, type: WidthType.DXA },
  columnWidths: [CONTENT_W],
  borders: {
    top: { style: BorderStyle.SINGLE, size: 4, color: opts.edge || NAVY },
    bottom: { style: BorderStyle.SINGLE, size: 4, color: opts.edge || NAVY },
    left: { style: BorderStyle.SINGLE, size: 24, color: opts.edge || NAVY },
    right: { style: BorderStyle.SINGLE, size: 4, color: opts.edge || NAVY },
    insideHorizontal: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
    insideVertical: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
  },
  rows: [new TableRow({
    children: [new TableCell({
      width: { size: CONTENT_W, type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill: opts.fill || LIGHT },
      margins: { top: 160, bottom: 160, left: 200, right: 180 },
      children: [
        new Paragraph({
          spacing: { after: 100 },
          children: [new TextRun({ text: title, bold: true, size: 21, color: opts.edge || NAVY, allCaps: true })],
        }),
        ...bodyParas.map((t) =>
          typeof t === 'string'
            ? new Paragraph({ spacing: { after: 90, line: 264 }, children: runs(t) })
            : t),
      ],
    })],
  })],
});

// Data table: headers = [str], rows = [[str]], widths = [dxa] summing to CONTENT_W
const table = (headers, rows, widths, opts = {}) => {
  const total = widths.reduce((a, b) => a + b, 0);
  if (total !== CONTENT_W) throw new Error(`widths sum ${total} != ${CONTENT_W}`);
  const cell = (text, w, o = {}) => new TableCell({
    width: { size: w, type: WidthType.DXA },
    shading: { type: ShadingType.CLEAR, fill: o.fill || 'FFFFFF' },
    margins: { top: 80, bottom: 80, left: 110, right: 110 },
    verticalAlign: 'center',
    children: String(text).split('\n').map((ln) => new Paragraph({
      spacing: { after: 0, line: 250 },
      alignment: o.align,
      children: runs(ln, { size: opts.size || 19, color: o.color }),
    })),
  });
  const headRow = new TableRow({
    tableHeader: true,
    children: headers.map((hh, i) => new TableCell({
      width: { size: widths[i], type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill: NAVY },
      margins: { top: 90, bottom: 90, left: 110, right: 110 },
      children: [new Paragraph({
        spacing: { after: 0, line: 250 },
        children: [new TextRun({ text: hh, bold: true, size: opts.size || 19, color: 'FFFFFF' })],
      })],
    })),
  });
  const bodyRows = rows.map((r, ri) => new TableRow({
    children: r.map((c, ci) => cell(c, widths[ci], {
      fill: ri % 2 ? BAND : 'FFFFFF',
      align: opts.rightCols && opts.rightCols.includes(ci) ? AlignmentType.RIGHT : undefined,
    })),
  }));
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: widths,
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: RULE },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: RULE },
      left: { style: BorderStyle.SINGLE, size: 4, color: RULE },
      right: { style: BorderStyle.SINGLE, size: 4, color: RULE },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 2, color: RULE },
      insideVertical: { style: BorderStyle.SINGLE, size: 2, color: RULE },
    },
    rows: [headRow, ...bodyRows],
  });
};

const numberingConfig = {
  config: [
    {
      reference: 'bullets',
      levels: [
        { level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 400, hanging: 240 } } } },
        { level: 1, format: LevelFormat.BULLET, text: '◦', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 780, hanging: 240 } } } },
      ],
    },
    {
      reference: 'checks',
      levels: [
        { level: 0, format: LevelFormat.BULLET, text: '❑', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 400, hanging: 260 } } } },
      ],
    },
    {
      reference: 'nums',
      levels: [
        { level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 420, hanging: 260 } } } },
      ],
    },
  ],
};

module.exports = {
  NAVY, SLATE, LIGHT, BAND, RULE, ACCENT, CONTENT_W,
  runs, h1, h2, h3, p, bullet, check, numbered, spacer, mono, callout, table, numberingConfig,
};
