"use client"
import { HiOutlineSwitchHorizontal } from 'react-icons/hi'
import { useState } from 'react'

export default function TranslateText() {
    const [chinese, setChinese] = useState(false)
    const [text, setText] = useState('')
    const [translation, setTranslation] = useState('')
    const handleTranslate = async (text: string, target: string) => {
        const response = await fetch('/api/translate', {
            method: 'POST',
            body: JSON.stringify({ text, target }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setTranslation(await response.json())
    }
    return (
        <div className="h-80 w-[clamp(500px,90vw,1200px)] rounded-md border-gray-300 border-[1px] bg">
            <div className="flex flex-row h-16 w-full border-b-[1px] border-gray-300">
                <div className="w-full px-4 flex items-center justify-between">
                    <h2 data-testid="heading-left">{!chinese ? "English" : "Chinese"}</h2>
                    <HiOutlineSwitchHorizontal class="w-6 h-6 cursor-pointer"
                        data-testid="toggle-language"
                        onClick={() => setChinese(!chinese)}
                    />
                </div>
                <div className="w-full px-4 flex items-center">
                    <h2 data-testid="heading-right">
                        {chinese ? "English" : "Chinese"}
                    </h2>
                </div>
            </div>
            <div className='w-full flex flex-col md:flex-row h-64'>

                <div className='relative w-full'>
                    <textarea
                        data-testid="text-input"
                        onChange={(e) => { setText(e.target.value), console.log(text) }}
                        value={text}
                        autoComplete='false' className='w-full h-full active:border-p-3 resize-none p-4' />
                    {text == "" &&
                        <div className='pointer-events-none absolute z-10 top-0 left-0 p-4 flex-col flex gap-2 w-full h-full border-r-[1px] border-gray-300 rounded-bl-md'>
                            <h2>{!chinese ? "Type to Translate" : "键入翻译"}</h2>
                            <p>{!chinese ? "Drag and drop to translate PDF, Word .docx, and Powerpoint .pptx files with our document translator" : "使用我们的文档翻译器拖放翻译 PDF、Word .docx 和 Powerpoint .pptx 文件"}</p>
                        </div>}
                </div>
                <textarea data-testid="text-output" className='w-full h-full active:border-p-3 resize-none p-4' value={translation} onChange={(e) => { setTranslation(e.target.value), console.log(translation) }} />
            </div>
            <div className='w-full flex justify-center py-2'>
                {!chinese ?
                    <button
                        data-testid="translate-button-chinese"
                        className=' bg-p-3 py-2 px-4 rounded-md text-white hover:bg-p-5 trans'
                        onClick={() => handleTranslate(text, "zh")}>Translate</button> :
                    <button
                        data-testid="translate-button-english"
                        className=' bg-p-3 py-2 px-4 rounded-md text-white hover:bg-p-5 trans'
                        onClick={() => handleTranslate(text, "en")}>Translate</button>}
            </div>
        </div>
    )
}