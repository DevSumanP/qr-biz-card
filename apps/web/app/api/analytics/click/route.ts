import { NextRequest, NextResponse } from 'next/server'
export async function POST(req: NextRequest) {
  try {
    const { businessId, platform, linkType } = await req.json()
    if (!businessId) return NextResponse.json({ error:'businessId required' }, { status:400 })
    // TODO: await prisma.linkClick.create({ data:{ businessId, platform, linkType } })
    return NextResponse.json({ success:true })
  } catch { return NextResponse.json({ error:'Failed' }, { status:500 }) }
}
