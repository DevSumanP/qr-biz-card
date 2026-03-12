import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@repo/database'
import { quoteRequestSchema } from '@/lib/validations'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()

        // Validate request body
        const validated = quoteRequestSchema.safeParse(body)
        if (!validated.success) {
            return NextResponse.json({
                error: 'Invalid request data',
                details: validated.error.format()
            }, { status: 400 })
        }

        // Save to database
        const quote = await (prisma as any).quoteRequest.create({
            data: {
                ...validated.data,
                status: 'PENDING'
            }
        })

        return NextResponse.json({
            success: true,
            id: quote.id,
            message: 'Quote request submitted successfully'
        })
    } catch (error) {
        console.error('Quote Request API Error:', error)
        return NextResponse.json({
            error: 'Internal server error',
            message: 'Failed to process your quote request. Please try again later.'
        }, { status: 500 })
    }
}
