"use client"
import { HiOutlineSwitchHorizontal } from 'react-icons/hi'
import { useState } from 'react'

export default function TranslateFiles() {
    const [chinese, setChinese] = useState(false)
    return (
        <div className="h-80 w-[clamp(500px,90vw,1200px)] rounded-md border-gray-300 border-[1px]">
            <div className="flex flex-row h-16 w-full border-b-[1px] border-gray-300">
                <div className="w-full px-4 flex items-center justify-between">
                    <h2>{!chinese ? "English" : "Chinese"}</h2>
                    <HiOutlineSwitchHorizontal class="w-6 h-6 cursor-pointer"
                        onClick={() => setChinese(!chinese)}
                    />
                </div>
                <div className="w-full px-4 flex items-center">
                    <h2>
                        {chinese ? "English" : "Chinese"}
                    </h2>
                </div>
            </div>
            <div className='w-full flex flex-row h-64'>

                <div className='relative w-full'>
                    <textarea autoComplete='false' className='w-full h-full active:border-p-3 resize-none p-4' />
                    <div className='pointer-events-none absolute z-10 top-0 left-0 p-4 flex-col flex gap-2 w-full h-full border-r-[1px] border-gray-300 rounded-bl-md'>
                        <h2>{!chinese ? "Type to Translate" : "键入翻译"}</h2>
                        <p>{!chinese ? "Drag and drop to translate PDF, Word .docx, and Powerpoint .pptx files with our document translator" : "使用我们的文档翻译器拖放翻译 PDF、Word .docx 和 Powerpoint .pptx 文件"}</p>
                    </div> :

                </div>
                <input className='w-full' />
            </div>
        </div>
    )
}