"use client"

import Link from 'next/link'
import { BiChevronDown } from "react-icons/bi"
import Popup from './Popup'
import { useState } from 'react'

export default function AccountSelector() {
    const [open, setOpen] = useState(false)
    return (
        <div className='relative'>
            <button
                onClick={() => setOpen(!open)}
                className='h-10 flex flex-row items-center gap-2 p-2 rounded-md border-[1px] border-gray-300 trans hover:bg-red-100'>
                <p>
                    thisisafakeemail@gmail.com
                </p>
                <BiChevronDown class="w-6 h-6" />
            </button>
            {open && <Popup>
                <div className='flex flex-col gap-2 w-44 text-start'>

                    <Link href='/account' className='text-md hover:text-p-3 trans rounded-md text-start font-normal'>
                        Account
                    </Link>
                    <button>
                        <h2 className='font-normal text-black text-md hover:text-p-3 text-start'>Log out</h2>
                    </button>
                </div>
            </Popup>}
        </div>
    )
}