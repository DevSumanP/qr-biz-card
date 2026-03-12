export async function recordScan(businessId: string, source = 'qr') {
  try { await fetch('/api/analytics/scan',{ method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({businessId,source}) }) } catch {}
}
export async function recordClick(businessId: string, platform: string, linkType: string) {
  try { await fetch('/api/analytics/click',{ method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({businessId,platform,linkType}) }) } catch {}
}
