export const getPdfConfig = (pdfType: string) => {
  switch (pdfType) {
    case 'anexo_m3':
      return { headerType: 'anexo_m3', includeFooter: false };
    case 'anexo_m4':
      return { headerType: 'anexo_m4', includeFooter: false };
    case 'atestado':
    case 'laudo_avaliacao':
    case 'relatorio_fotografico':
      return { headerType: 'default', includeFooter: true };
    default:
      return { headerType: 'default', includeFooter: true };
  }
};
