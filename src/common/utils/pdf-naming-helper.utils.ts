import { PdfType, ProjectType } from '@prisma/client';

export const getPdfFileName = (
  pdfType: PdfType,
  projectType: ProjectType,
  agencyNumber: number,
  isSigned: boolean = false,
): string => {
  const prefix = isSigned ? 'assinado-' : '';

  switch (pdfType) {
    case 'atestado':
      return `${prefix}-${projectType}-${agencyNumber}-EF-A.pdf`;
    case 'anexo_m3':
      return `${prefix}-${projectType}-${agencyNumber}-EF-M3.pdf`;
    case 'anexo_m4':
      return `${prefix}-${projectType}-${agencyNumber}-EF-M4.pdf`;
    case 'laudo_avaliacao':
      return `${prefix}-${projectType}-${agencyNumber}-EF-L.pdf`;
    case 'relatorio_fotografico':
      return `${prefix}-${projectType}-${agencyNumber}-EF-R.pdf`;
    default:
      return `docs-${projectType}-${agencyNumber}.pdf`;
  }
};
