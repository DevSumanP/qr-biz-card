import { textStyle } from '@/lib/styles'
import { prisma } from '@repo/database'

export default async function AdminDashboard() {
    // In production, we'd fetch actual requests. Using a safe fallback for now.
    let requests: any[] = []
    try {
        requests = await (prisma as any).quoteRequest.findMany({
            orderBy: { createdAt: 'desc' },
            take: 10
        })
    } catch (e) {
        // Fail silently if DB not connected
    }

    return (
        <div className="space-y-8">
            <div>
                <h2 className={textStyle.heading2}>Admin Dashboard</h2>
                <p className={textStyle.bodyMedium}>Manage quote requests and business profiles.</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <div className={`p-8 bg-white rounded-[20px] shadow-sm border border-slate-200`}>
                    <h3 className={`${textStyle.heading4} mb-6`}>Recent Quote Requests</h3>

                    {requests.length === 0 ? (
                        <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                            <p className={textStyle.bodyMedium}>No requests found yet. Once customers fill the form on the landing page, they will appear here.</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-slate-100">
                                        <th className="pb-4 font-medium text-slate-500 text-xs uppercase tracking-wider">Business</th>
                                        <th className="pb-4 font-medium text-slate-500 text-xs uppercase tracking-wider">Contact</th>
                                        <th className="pb-4 font-medium text-slate-500 text-xs uppercase tracking-wider">Email</th>
                                        <th className="pb-4 font-medium text-slate-500 text-xs uppercase tracking-wider">Date</th>
                                        <th className="pb-4 text-right"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {requests.map((req: any) => (
                                        <tr key={req.id} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="py-4 font-semibold text-slate-900">{req.businessName}</td>
                                            <td className="py-4 text-slate-600">{req.contactName}</td>
                                            <td className="py-4 text-slate-500 text-sm">{req.email}</td>
                                            <td className="py-4 text-slate-400 text-sm whitespace-nowrap">{new Date(req.createdAt).toLocaleDateString()}</td>
                                            <td className="py-4 text-right">
                                                <button className="px-4 py-1.5 bg-accent/10 text-accent rounded-full text-xs font-bold hover:bg-accent hover:text-white transition-all">
                                                    Create Profile
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
