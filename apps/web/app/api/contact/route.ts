import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validations'
export async function POST(req: NextRequest) {
  try {
    const data = contactSchema.parse(await req.json())
    // TODO: send via Resend
    return NextResponse.json({ success:true })
  } catch { return NextResponse.json({ error:'Invalid data' }, { status:400 }) }
}
