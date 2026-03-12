import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@repo/database'
import { onboardingSchema } from '@/lib/validations'
import { generateHandle } from '@/lib/utils'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { ownerId, ...formData } = body

        // Validate form data
        const validated = onboardingSchema.safeParse(formData)
        if (!validated.success) {
            return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
        }

        // Generate a unique handle
        const handle = generateHandle(validated.data.name)

        // Check for handle collision
        const existing = await prisma.business.findUnique({ where: { handle } })
        const finalHandle = existing ? `${handle}-${Math.floor(Math.random() * 1000)}` : handle

        // Create business profile
        const business = await (prisma as any).business.create({
            data: {
                handle: finalHandle,
                name: validated.data.name,
                category: validated.data.category,
                description: validated.data.description,
                phone: validated.data.phone,
                email: validated.data.email,
                website: (validated.data as any).website,
                role: body.role || 'Professional',
                estYear: body.estYear,
                isVerified: body.isVerified || false,
                ownerId: ownerId || 'admin',
                plan: 'FREE',
                isPublished: true,
            }
        })

        return NextResponse.json({ success: true, business })
    } catch (error) {
        console.error('Business Creation Error:', error)
        return NextResponse.json({ error: 'Failed' }, { status: 500 })
    }
}
