import { PdfType, ProjectType } from '@prisma/client';

export const getPdfFileName = (
  pdfType: PdfType,
  agencyNumber: number,
  projectType: ProjectType,
  //   isSigned: boolean = false,
): string => {
  //   const prefix = isSigned ? 'assinado-' : '';

  switch (pdfType) {
    case 'atestado':
      return `${projectType}-${agencyNumber}-EF-A-001-R00.pdf`;
    case 'anexo_m3':
      return `${projectType}-${agencyNumber}-EF-L-001-01-R00.pdf`;
    case 'anexo_m4':
      return `${projectType}-${agencyNumber}-EF-L-001-02-R00.pdf`;
    case 'laudo_avaliacao':
      return `${projectType}-${agencyNumber}-EF-L-001-R00.pdf`;
    case 'relatorio_fotografico':
      return `${projectType}-${agencyNumber}-EF-R-001-R00.pdf`;
    default:
      return `docs-${agencyNumber}.pdf`;
  }
};
