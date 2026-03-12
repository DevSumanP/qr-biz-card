import { NextRequest, NextResponse } from 'next/server'
export async function POST(req: NextRequest) {
  try {
    const { businessId, source } = await req.json()
    if (!businessId) return NextResponse.json({ error:'businessId required' }, { status:400 })
    // TODO: await prisma.qRScan.create({ data:{ businessId, source, userAgent:req.headers.get('user-agent') } })
    return NextResponse.json({ success:true })
  } catch { return NextResponse.json({ error:'Failed' }, { status:500 }) }
}
