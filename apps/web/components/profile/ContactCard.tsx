'use client'
import { Instagram, Facebook, Mail, MapPin, Phone, MessageCircle, ArrowUpRight } from 'lucide-react'
import { textStyle } from '@/lib/styles'
import Link from 'next/link';

const ICONS: Record<string, React.ElementType> = {
    Instagram, Facebook, Mail, MapPin, Phone, MessageCircle, ArrowUpRight,
}

interface ContactLink {
    id: string;
    label: string;
    url: string;
    icon: string;
}

const dummyContacts: ContactLink[] = [
    {
        id: '1',
        label: 'Phone',
        url: '+9779840121389',
        icon: 'Phone',
    },
    {
        id: '2',
        label: 'Email',
        url: 'hello@business.com',
        icon: 'Mail',
    },
    {
        id: '3',
        label: 'Location',
        url: '12, MG Road, Koramangala, Bangalore',
        icon: 'MapPin',
    },
]

export default function ContactCard({ links }: { links: ContactLink[] }) {


    return (
        <div className="w-full px-4"> {/* 16px left & right spacing */}

            <div className="bg-white shadow-md py-[10px] rounded-xl border border-black/[0.04] overflow-hidden flex flex-col">

                {dummyContacts.map((action) => {
                    const Icon = ICONS[action.icon ?? ''] ?? MapPin
                    return (
                        <Link
                            key={action.label}
                            href={action.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-[16px] py-[12px] hover:bg-gray-50 transition-all cursor-pointer"
                        >
                            {/* LEFT */}
                            <div className="flex items-center gap-3 shrink-0">
                                <Icon className="w-5 h-5 text-[#333333]" />
                                <span className={`${textStyle.bodyMedium} text-[#333333] font-medium`}>
                                    {action.url}
                                </span>
                            </div>


                        </Link>
                    )
                })}

            </div>
        </div>

    )
}