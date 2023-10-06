import { CiMenuBurger } from 'react-icons/ci'
import { HeaderData } from '@/data/HeaderData'
import Link from 'next/link'

export default function MenuButton() {
    const links = HeaderData.map((link) => {
        return (
            <Link href={link.link}>
                <h3>{link.text}</h3>
            </Link>
        )
    })
    return (
        <div className=''>
            <button>
                <CiMenuBurger class="mx-4 w-8 h-8 my-auto" />
            </button>
            <div className='fixed top-0 left-0 overflow-y-scroll'></div>
            <div className='z-20 h-full w-60 flex relative flex-col gap-4 bg-white rounded-xl'>
                {links}
            </div>
            <div className='z-10 bg-gray-400 opacity-50 w-full h-full absolute'>

            </div>
        </div>
    )
}