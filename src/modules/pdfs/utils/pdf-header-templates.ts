export const getHeaderTemplate = (
  headerType: string,
  logoBase64: string,
): string => {
  if (headerType === 'none' || !logoBase64) return '';

  const baseLogo = `
    <div style="width: 75px; text-align: left; margin: 10px 0px 20px 2cm;">
      <img src="${logoBase64}" style="max-height: 50px; margin-bottom: 10px;" />
    </div>
  `;

  switch (headerType) {
    case 'anexo_m3':
      return `
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 0 2cm;">
          ${baseLogo}
          <div style="text-align: center; flex: 1;">
            <h2 style="margin: 0; font-size: 14pt; font-weight: bold;">ANEXO M.3</h2>
          </div>
          <div style="width: 75px;"></div>
        </div>
      `;

    case 'anexo_m4':
      return `
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 0 2cm;">
          ${baseLogo}
          <div style="text-align: center; flex: 1;">
            <h2 style="margin: 0; font-size: 14pt; font-weight: bold;">ANEXO M.4</h2>
          </div>
          <div style="width: 75px;"></div>
        </div>
      `;

    case 'default':
    default:
      return baseLogo;
  }
};
