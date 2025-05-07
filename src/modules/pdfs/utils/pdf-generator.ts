import * as fs from 'fs';
import * as path from 'path';
import * as puppeteer from 'puppeteer';

export async function generatePdfFromTemplate(
  templateName: string,
  data: any,
): Promise<Buffer> {
  const templatePath = path.resolve(
    __dirname,
    '..',
    'template',
    `${templateName}.hbs`,
  );
  const templateContent = fs.readFileSync(templatePath, 'utf8');
  const template = Handlebars.compile(templateContent);

  const logoPath = path.resolve(__dirname, '..', 'assets', 'logoPDF.png');
  const logoBuffer = fs.readFileSync(logoPath);
  const logoBase64 = logoBuffer.toString('base64');

  const html = template({
    ...data,
    logoBase64: `data:image/png;base64,${logoBase64}`,
  });

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: 'networkidle0' });

  const pdfBuffer = Buffer.from(
    await page.pdf({
      format: 'A4',
      displayHeaderFooter: true,
      headerTemplate: `
        <div style="width: 100%; text-align: center; margin-top: 10px;">
            <img src="data:image/png;base64,${logoBase64}" style="max-height: 80px; margin-bottom: 10px;" />
        </div>
      `,
      footerTemplate: `
        <div style="width: 100%; font-size: 10pt; text-align: center; padding-top: 10px; border-top: 1px solid #ddd;">
            <div>Arqtª Cinara Gonçalves (11) 98015-7566 — Engª Bárbara Gonçalves (11) 97960-5000 — Engº Vinicius Gonçalves (11) 98310-2161</div>
            <div><a href="https://www.fagon.com.br/" style="color: #000;">www.fagon.com.br</a></div>
            <div>End.: Rua da Fraternidade, 53 Osasco - SP — tel.: (011) 4386-8746</div>
            <div style="margin-top: 5px; font-size: 8pt; color: #666;">Página <span class="pageNumber"></span> de <span class="totalPages"></span></div>
        </div>
      `,
      margin: {
        top: '100px',
        bottom: '100px',
        left: '1cm',
        right: '1cm',
      },
    }),
  );

  await browser.close();
  return pdfBuffer;
}
