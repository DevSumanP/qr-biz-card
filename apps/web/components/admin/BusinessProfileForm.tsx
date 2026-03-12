'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { CheckCircle2, Loader2, Save } from 'lucide-react'
import { onboardingSchema, type OnboardingFormData } from '@/lib/validations'
import { textStyle, radiusStyle } from '@/lib/styles'

export default function BusinessProfileForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<OnboardingFormData>({
    })

    const onSubmit = async (data: OnboardingFormData) => {
        setIsSubmitting(true)
        setError(null)
        try {
            // In production: POST to /api/business
            const resp = await fetch('/api/business', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...data, ownerId: 'admin' })
            })

            if (!resp.ok) throw new Error('Failed to create profile')

            setIsSuccess(true)
            reset()
        } catch (err: any) {
            setError(err.message)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className={`p-8 bg-white ${radiusStyle.card} border border-slate-200`}>
            <h3 className={`${textStyle.heading4} mb-8`}>Create New Business Profile</h3>

            <form onSubmit={handleSubmit((data) => onSubmit(data as any))} className="space-y-6">
                {/* Basic Info Section */}
                <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700">Business Name</label>
                            <input
                                {...register('name')}
                                placeholder="e.g. Suman's Cafe"
                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                            />
                            {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700">Category</label>
                            <input
                                {...register('category')}
                                placeholder="Hospitality, Retail, etc."
                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                            />
                            {errors.category && <p className="text-xs text-red-500">{errors.category.message}</p>}
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-slate-700">Description (Tagline)</label>
                        <textarea
                            {...register('description')}
                            rows={3}
                            placeholder="Tell us what this business does..."
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all resize-none"
                        />
                        {errors.description && <p className="text-xs text-red-500">{errors.description.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700">Specific Role/Subtitle (Optional)</label>
                            <input
                                {...register('role')}
                                defaultValue="Professional"
                                placeholder="e.g. Women's Boutique"
                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700">Established Year (Optional)</label>
                            <input
                                {...register('estYear')}
                                placeholder="e.g. 2018"
                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-3 py-2">
                        <input type="checkbox" id="isVerified" {...register('isVerified')} className="w-4 h-4 accent-sky-500" />
                        <label htmlFor="isVerified" className="text-sm font-medium text-slate-700 select-none">Verify this profile (Blue Badge)</label>
                    </div>
                </div>

                {/* Contact Info Section */}
                <div className="pt-4 border-t border-slate-100 space-y-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Contact Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700">Email (Optional)</label>
                            <input
                                {...register('email')}
                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                                placeholder="business@email.com"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700">Phone (Optional)</label>
                            <input
                                {...register('phone')}
                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                                placeholder="+977..."
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700">Website URL (Optional)</label>
                            <input
                                {...register('website')}
                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                                placeholder="https://business.com"
                            />
                            {errors.website && <p className="text-xs text-red-500">{errors.website.message}</p>}
                        </div>
                    </div>
                </div>

                {error && (
                    <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                        {error}
                    </div>
                )}

                {isSuccess && (
                    <div className="p-3 bg-green-50 text-green-700 text-sm rounded-lg border border-green-100 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        Profile created and ready for QR stand!
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all active:scale-[0.99] disabled:opacity-50 font-sans font-bold"
                >
                    {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                        <>
                            <Save className="w-5 h-5" />
                            Save Business Profile
                        </>
                    )}
                </button>
            </form>
        </div>
    )
}
