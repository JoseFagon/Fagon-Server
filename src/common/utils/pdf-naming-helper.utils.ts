import { PdfType } from '@prisma/client';

export const getPdfFileName = (
  pdfType: PdfType,
  agencyNumber: number,
  //   isSigned: boolean = false,
): string => {
  //   const prefix = isSigned ? 'assinado-' : '';

  switch (pdfType) {
    case 'atestado':
      return `${agencyNumber}-EF-A-001-R00.pdf`;
    case 'anexo_m3':
      return `${agencyNumber}-EF-L-001-01-R00.pdf`;
    case 'anexo_m4':
      return `${agencyNumber}-EF-L-001-02-R00.pdf`;
    case 'laudo_avaliacao':
      return `${agencyNumber}-EF-L-001-R00.pdf`;
    case 'relatorio_fotografico':
      return `${agencyNumber}-EF-R-001-R00.pdf`;
    default:
      return `docs-${agencyNumber}.pdf`;
  }
};
