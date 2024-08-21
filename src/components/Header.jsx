import { Link } from "react-router-dom"
import Logo from "../assets/images/logo.svg"

export default function Header(){
    return(
        <header>
            <nav className="w-full flex items-center justify-between shadow px-6 py-2">
                    <div className="flex items-center gap-x-8">
                        <img src={Logo}/>
                        <h1 className="text-xl">MyPeace</h1>
                    </div>
                    <div className="flex items-center gap-x-8">
                        <Link to="">Perfil</Link>
                        <Link to="">Homes</Link>
                    </div>
            </nav>
        </header>
    )
}