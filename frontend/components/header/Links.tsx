import Link from 'next/link'
import { HeaderData } from '@/data/HeaderData'
export default function Links() {
    const links = HeaderData.map((link) => {
        return (
            <Link href={link.link}>
                <h3>{link.text}</h3>
            </Link>
        )
    })
    return (
        <div className='fixed top-0 left-0 z-30'>
            <div className='fixed top-0 left-0 overflow-y-scroll'>
                <div className='z-20 h-full w-60 flex relative flex-col gap-4 bg-white rounded-xl'>
                    {links}
                </div>
            </div>
        </div>
    )
}