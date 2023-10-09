import Link from 'next/link'
import { HeaderData } from '@/data/HeaderData'
export default function Links({ onClick }: { onClick: () => void }) {
    const links = HeaderData.map((link) => {
        return (
            <Link href={link.link}>
                <h3>{link.text}</h3>
            </Link>
        )
    })
    return (
        <div className='fixed top-0 left-0 z-30'
            onClick={onClick}
        >
            <div className='fixed top-0 left-0'>
                <div className='z-20 h-full w-60 overflow-y-scroll flex relative flex-col gap-4 bg-white rounded-md p-4'>
                    {links}
                </div>
            </div>
        </div>
    )
}