import QRCode from 'qrcode'
export const generateQRDataURL = (url: string) =>
  QRCode.toDataURL(url, { width:400, margin:2, color:{ dark:'#1a1a2e', light:'#ffffff' } })
export const generateQRBuffer = (url: string): Promise<Buffer> =>
  QRCode.toBuffer(url, { type:'png', width:800, margin:2, color:{ dark:'#1a1a2e', light:'#ffffff' } })
