import * as fs from 'fs';
import * as path from 'path';
import * as puppeteer from 'puppeteer';
import Handlebars from '../../../config/handlebars.config';

export async function generatePdfFromTemplate(templateName: string, data: any) {
  const templatePath = path.join(
    __dirname,
    '../templates',
    `${templateName}.hbs`,
  );
  const templateContent = fs.readFileSync(templatePath, 'utf8');

  const template = Handlebars.compile(templateContent);

  const logoPath = path.join(__dirname, '../assets/logoPDF.png');
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
        <div style="width: 75px; text-align: left; margin: 10px 0px 20px 2cm;">
            <img src="data:image/png;base64,${logoBase64}" style="max-height: 50px; margin-bottom: 10px;" />
        </div>
      `,
      footerTemplate: `
        <div style="width: 100%; font-size: 8pt; text-align: center; padding: 10px 50px 0px; border-top: 1px solid #ddd;">
            <div>Arqtª Cinara Gonçalves (11) 98015-7566 — Engª Bárbara Gonçalves (11) 97960-5000 — Engº Vinicius Gonçalves (11) 98310-2161</div>
            <div style="margin-top: 5px;"><a href="https://www.fagon.com.br/" style="color: #000;">www.fagon.com.br</a></div>
            <div style="margin-top: 5px;">End.: Rua da Fraternidade, 53 Osasco - SP — tel.: (011) 4386-8746</div>
            <div style="margin-top: 5px; font-size: 6pt; color: #666;">Página <span class="pageNumber"></span> de <span class="totalPages"></span></div>
        </div>
      `,
      margin: {
        top: '2.5cm',
        bottom: '2.5cm',
        left: '2cm',
        right: '1.5cm',
      },
    }),
  );

  await browser.close();
  return pdfBuffer;
}
