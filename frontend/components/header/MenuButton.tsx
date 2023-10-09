import { CiMenuBurger } from 'react-icons/ci'

export default function MenuButton({ onClick }: { onClick: () => void }) {

    return (

        <button
            onClick={onClick}
        >
            <CiMenuBurger class="mx-4 w-8 h-8 my-auto" />
        </button>

    )
}