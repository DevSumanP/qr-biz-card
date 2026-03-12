import { textStyle } from '@/lib/styles'

export default function StatsCard({ stats }: { stats: { likes: number; posts: number; views: number } }) {
    if (!stats) return null

    return (
        <div className="bg-white/80 backdrop-blur-xl rounded-[24px] p-6 shadow-sm border border-black/[0.03]">
            <div className="flex justify-around items-center">
                <div className="text-center">
                    <div className={`${textStyle.heading4} text-ink font-bold`}>{stats.likes}</div>
                    <div className={`${textStyle.bodyXSmall} text-muted font-medium`}>Likes</div>
                </div>
                <div className="w-[1px] h-8 bg-black/5" />
                <div className="text-center">
                    <div className={`${textStyle.heading4} text-ink font-bold`}>{stats.posts}</div>
                    <div className={`${textStyle.bodyXSmall} text-muted font-medium`}>Posts</div>
                </div>
                <div className="w-[1px] h-8 bg-black/5" />
                <div className="text-center">
                    <div className={`${textStyle.heading4} text-ink font-bold`}>{stats.views}</div>
                    <div className={`${textStyle.bodyXSmall} text-muted font-medium`}>Views</div>
                </div>
            </div>
        </div>
    )
}
