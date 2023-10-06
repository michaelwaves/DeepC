import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineLightBulb } from 'react-icons/hi'
import TranslatorButton from './TranslatorButton'
import AccountSelector from './AccountSelector'
export default function Header() {
    return (
        <div id="header" className='h-16 w-full md:w-[clamp(500px,90vw,1200px)] p-2 flex justify-between items-center'>
            <Link href='/' className='hover:underline flex flex-row gap-2 items-center justify-center'>
                <Image src='/logo_red.svg' alt='logo' width={50} height={50} />
                <h1 className=''>DeepC</h1>
            </Link>
            <div className='flex flex-row'>
                <TranslatorButton />
                <button className='bg-p-3 py-2 px-4 rounded-md'>
                    <h2 className='text-white'>Start free trial</h2>
                </button>
                <button className='mx-2 px-2 py-2 rounded-md trans hover:bg-gray-100'>
                    <HiOutlineLightBulb class="w-6 h-6 " />
                </button>
                <AccountSelector />

            </div>
        </div>
    )
}