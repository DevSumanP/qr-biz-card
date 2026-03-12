import React from 'react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-slate-50">
            <nav className="bg-white border-b border-slate-200 px-8 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold text-slate-900 font-sans">QRBizCard Admin</h1>
                    <div className="text-sm text-slate-500 font-medium">Platform Owner Mode</div>
                </div>
            </nav>
            <main className="max-w-7xl mx-auto py-10 px-8">
                {children}
            </main>
        </div>
    )
}
