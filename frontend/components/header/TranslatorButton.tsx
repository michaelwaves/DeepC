"use client"
import { useState } from 'react'
import Link from 'next/link'
import { BiChevronDown } from "react-icons/bi"
import Popup from './Popup'
export default function TranslatorButton() {
    const [open, setOpen] = useState(false)
    return (
        <div className='relative'>
            <button
                onClick={() => setOpen(!open)}
                className='flex flex-row items-center gap-2 p-2 rounded-md bg-red-100 trans hover:bg-red-300 text-p-4'>
                <h2 className='font-bold '>
                    Translator
                </h2>
                <BiChevronDown class="w-6 h-6" />

            </button>
            {open && <Popup>
                <div className='flex flex-col gap-2 w-40 text-start'>
                    <p className='px-2'>Switch to</p>
                    <Link href='/' className='hover:bg-gray-100 trans rounded-md p-2 text-start'>
                        <p className='text-[1rem]'>DeepC <b className='font-bold'>Write</b> <span className='px-2 text-white text-xs bg-green-500 rounded-md'>BETA</span></p>
                        <p>Improve your Chinese writing in seconds</p>
                    </Link>
                </div>
            </Popup>}
        </div>
    )
}