export const getHeaderTemplate = (
  headerType: string,
  logoBase64: string,
): string => {
  if (headerType === 'none' || !logoBase64) return '';

  const baseLogo = `
    <div style="width: 50px; margin-right: auto;">
      <img src="${logoBase64}" style="max-height: 35px;" />
    </div>
  `;

  switch (headerType) {
    case 'anexo_m3':
      return `
        <div style="display: flex; align-items: center; width: 100%; padding: 10px 2cm;">
          ${baseLogo}
          <div style="text-align: center; flex: 1; margin: 0 auto; position: absolute; left: 0; right: 0;">
            <h2 style="margin: 0; font-size: 12pt; font-weight: bold;">ANEXO M.3</h2>
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(4, 12px); border: .5px solid #3d3d3d; padding: 2px; align-items: end; width: 100px; margin-right: 150px; padding-right: 5px; font-size: 4pt;">
            <p>Pág.:</p>
            <hr style="width: 100%; border: .5px solid #3d3d3d; margin-bottom: 5px; grid-column: span 2;" />
            <p>Rúblicas:</p>
            <p style="margin-bottom: 7px; grid-column: span 2;"></p>
            <p style="white-space: nowrap;">Resp. Téc.:</p>
            <hr style="width: 100%; border: .5px solid #3d3d3d; margin-bottom: 7px; grid-column: span 2;" />
            <p>CBMSP:</p>
            <hr style="width: 100%; border: .5px solid #3d3d3d; margin-bottom: 7px; grid-column: span 2;" />
          </div>
        </div>
      `;

    case 'anexo_m4':
      return `
          <div style="display: flex; align-items: center; width: 100%; padding: 10px 2cm;">
            ${baseLogo}
            <div style="text-align: center; flex: 1; margin: 0 auto; position: absolute; left: 0; right: 0;">
              <h2 style="margin: 0; font-size: 12pt; font-weight: bold;">ANEXO M.4</h2>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(4, 12px); border: .5px solid #3d3d3d; padding: 2px; align-items: end; width: 100px; margin-right: 150px; padding-right: 5px; font-size: 4pt;">
              <p>Pág.:</p>
              <hr style="width: 100%; border: .5px solid #3d3d3d; margin-bottom: 5px; grid-column: span 2;" />
              <p>Rúblicas:</p>
              <p style="margin-bottom: 7px; grid-column: span 2;"></p>
              <p style="white-space: nowrap;">Resp. Téc.:</p>
              <hr style="width: 100%; border: .5px solid #3d3d3d; margin-bottom: 7px; grid-column: span 2;" />
              <p>CBMSP:</p>
              <hr style="width: 100%; border: .5px solid #3d3d3d; margin-bottom: 7px; grid-column: span 2;" />
            </div>
          </div>
      `;

    case 'default':
    default:
      return `
        <div style="padding: 10px 2cm;">
          <img src="${logoBase64}" style="max-height: 40px;" />
        </div>
      `;
  }
};
