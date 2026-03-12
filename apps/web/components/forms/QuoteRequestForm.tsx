'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { quoteRequestSchema, type QuoteRequestFormData } from '@/lib/validations'
import { textStyle, colorStyle, radiusStyle } from '@/lib/styles'

export default function QuoteRequestForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<QuoteRequestFormData>({
        resolver: zodResolver(quoteRequestSchema)
    })

    const onSubmit = async (data: QuoteRequestFormData) => {
        setIsSubmitting(true)
        setError(null)
        try {
            const resp = await fetch('/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            const result = await resp.json()

            if (!resp.ok) throw new Error(result.message || 'Submission failed')

            setIsSuccess(true)
            reset()
        } catch (err: any) {
            setError(err.message)
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSuccess) {
        return (
            <div className={`text-center p-12 ${radiusStyle.card} ${colorStyle.bgWhite} shadow-sm border border-black/[0.03]`}>
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                </div>
                <h3 className={`${textStyle.heading3} mb-2`}>Request Received</h3>
                <p className={`${textStyle.bodyMedium} max-w-[300px] mx-auto`}>
                    We've received your quote request. Our team will contact you within 24 hours.
                </p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className={`mt-8 ${textStyle.buttonLabel} text-accent underline`}
                >
                    Send another request
                </button>
            </div>
        )
    }

    return (
        <div className={`p-8 md:p-12 ${radiusStyle.card} ${colorStyle.bgWhite} shadow-card border border-black/[0.03]`}>
            <div className="mb-10 text-center">
                <h3 className={`${textStyle.heading3} mb-2`}>Ready to Go Digital?</h3>
                <p className={textStyle.bodyMedium}>Fill out the form below to get a custom quote for your business.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Business Name */}
                    <div className="space-y-2">
                        <label className={`${textStyle.bodySmall} font-medium text-ink`}>Business Name</label>
                        <input
                            {...register('businessName')}
                            className={`w-full px-4 py-3 bg-[#F8FAFF] border ${errors.businessName ? 'border-red-500' : 'border-transparent'} rounded-[10px] focus:border-accent outline-none transition-all ${textStyle.bodyMedium}`}
                            placeholder="e.g. Suman's Cafe"
                        />
                        {errors.businessName && <p className="text-xs text-red-500">{errors.businessName.message}</p>}
                    </div>

                    {/* Contact Person */}
                    <div className="space-y-2">
                        <label className={`${textStyle.bodySmall} font-medium text-ink`}>Contact Person</label>
                        <input
                            {...register('contactName')}
                            className={`w-full px-4 py-3 bg-[#F8FAFF] border ${errors.contactName ? 'border-red-500' : 'border-transparent'} rounded-[10px] focus:border-accent outline-none transition-all ${textStyle.bodyMedium}`}
                            placeholder="Full Name"
                        />
                        {errors.contactName && <p className="text-xs text-red-500">{errors.contactName.message}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                        <label className={`${textStyle.bodySmall} font-medium text-ink`}>Email Address</label>
                        <input
                            {...register('email')}
                            className={`w-full px-4 py-3 bg-[#F8FAFF] border ${errors.email ? 'border-red-500' : 'border-transparent'} rounded-[10px] focus:border-accent outline-none transition-all ${textStyle.bodyMedium}`}
                            placeholder="hello@business.com"
                        />
                        {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <label className={`${textStyle.bodySmall} font-medium text-ink`}>Phone Number</label>
                        <input
                            {...register('phone')}
                            className={`w-full px-4 py-3 bg-[#F8FAFF] border ${errors.phone ? 'border-red-500' : 'border-transparent'} rounded-[10px] focus:border-accent outline-none transition-all ${textStyle.bodyMedium}`}
                            placeholder="+977 9801..."
                        />
                        {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                    </div>
                </div>

                {/* Details */}
                <div className="space-y-2">
                    <label className={`${textStyle.bodySmall} font-medium text-ink`}>Tell us about your business</label>
                    <textarea
                        {...register('details')}
                        rows={4}
                        className={`w-full px-4 py-3 bg-[#F8FAFF] border border-transparent rounded-[12px] focus:border-accent outline-none transition-all resize-none ${textStyle.bodyMedium}`}
                        placeholder="Special requirements, number of locations, etc."
                    />
                </div>

                {error && (
                    <div className="p-4 rounded-[10px] bg-red-50 text-red-600 text-sm">
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 py-4 px-8 rounded-pill bg-primary text-white hover:bg-dark transition-all active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100 ${textStyle.buttonLabel}`}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Processing...
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5" />
                            Submit Request
                        </>
                    )}
                </button>
            </form>
        </div>
    )
}
