import { NextRequest, NextResponse } from 'next/server'
import { generateQRBuffer } from '@/lib/qr'
export async function GET(req: NextRequest) {
  try {
    const handle = req.nextUrl.searchParams.get('handle')
    if (!handle) return NextResponse.json({ error:'handle required' }, { status:400 })
    const buffer = await generateQRBuffer(`${process.env.NEXT_PUBLIC_PROFILE_BASE_URL}/${handle}`)
    return new NextResponse(buffer, { headers:{ 'Content-Type':'image/png', 'Content-Disposition':`attachment; filename="qr-${handle}.png"` } })
  } catch { return NextResponse.json({ error:'Failed' }, { status:500 }) }
}
