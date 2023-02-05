import { Link } from "react-router-dom"

const li = 'font-semibold text-primary hover:text-white hover:bg-primary px-5 py-2 rounded-md duration-300'

export const Nav = () => {

    return (
        <nav className="flex justify-between px-16 py-6 bg-secondary">
            <div className="flex items-center">
                Logo
            </div>
            <ul className="flex gap-x-4">
                <li>
                    <Link className={li} to='/'>Adotar</Link>
                </li>
                <li>
                    <Link className={li} to='/login'>Entrar</Link>
                </li>
                <li>
                    <Link className={li} to='/register'>Cadastrar</Link>
                </li>
            </ul>
        </nav>
    )
}