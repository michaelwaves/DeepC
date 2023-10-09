"use client"

import { SiFoodpanda } from 'react-icons/si'
import { GrDocumentText } from 'react-icons/gr'
import { HiOutlinePencil } from 'react-icons/hi'
import { useState } from 'react'
import Link from 'next/link'

export default function TranslateNavbar() {
    const [index, setIndex] = useState(0)
    const pages = [
        {
            title: "Translate Text",
            description: "1 language",
            icon: <SiFoodpanda class="h-8 w-8" />,
            href: "/translator"
        },
        {
            title: "Translate Files",
            description: ".pdf, .docx, .pptx",
            icon: <GrDocumentText class="text-p-3 h-8 w-8" />,
            href: "/translator/files"
        },
        {
            title: "DeepC Write",
            description: "AI-powered edits",
            icon: <HiOutlinePencil class=" h-8 w-8" />,
            href: "/translator/write"
        },
    ]
    const navComponents = pages.map((page, i) => {
        return (
            <Link href={page.href} key={i}>
                <div className='bg relative flex flex-row gap-2' key={i}
                    onClick={() => setIndex(i)}
                >
                    <div className={` flex flex-row w-40 py-2 h-16 rounded-md border-[1px] border-gray-300`}>
                        <div className='m-2 w-1/4'>
                            {page.icon}
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className={`${index === i ? 'text-black' : ''}`}>{page.title}</h2>
                            <p>{page.description}</p>
                        </div>
                        {index == i && <div className='h-[5px] w-full absolute bottom-[1px] right-0 bg-p-3'></div>}
                    </div>
                </div>
            </Link>
        )
    })
    return (
        <div className='relative flex flex-row gap-2 w-[clamp(500px,90vw,1200px)]'>
            {navComponents}
        </div>
    )
}