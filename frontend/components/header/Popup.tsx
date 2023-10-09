export default function Popup({ children }: { children: React.ReactNode }) {
    return (
        <div className='z-40 bg absolute translate-y-full bottom-0 left-0 rounded-xl shadow-lg p-4'>
            {children}
        </div>
    )
}