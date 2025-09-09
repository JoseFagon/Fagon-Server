export const getFooterTemplate = (includeFooter: boolean): string => {
  if (!includeFooter) return '';

  return `
    <div style="width: 100%; font-size: 8pt; text-align: center; padding: 10px 50px 0px; border-top: 1px solid #ddd;">
      <div>Arqtª Cinara Gonçalves (11) 98015-7566 — Engª Bárbara Gonçalves (11) 97960-5000 — Engº Vinicius Gonçalves (11) 98310-2161</div>
      <div style="margin-top: 5px;"><a href="https://www.fagon.com.br/" style="color: #000;">www.fagon.com.br</a></div>
      <div style="margin-top: 5px;">End.: Rua da Fraternidade, 53 Osasco - SP — tel.: (011) 4386-8746</div>
      <div style="margin-top: 5px; font-size: 6pt; color: #666;">Página <span class="pageNumber"></span> de <span class="totalPages"></span></div>
    </div>
  `;
};
