export default function Overlay({ onClick }: { onClick: () => void }) {
    return (
        <div
            onClick={onClick}
            className='z-20 bg-gray-400 opacity-50 w-full h-screen absolute top-0 left-0'>
        </div>
    )
}