import { Link } from "react-router-dom"
import Logo from "../assets/images/logo.svg"

export default function Header(){
    return(
        <header>
            <nav className="max-w-[1440px] flex items-center justify-between px-6 py-2">
                    <div className="flex items-center gap-x-8">
                        <img src={Logo}/>
                        <h1 className="text-xl">MyPeace</h1>
                    </div>
                    <div className="flex items-center gap-x-8">
                        <Link className="cursor-pointer hover:opacity-95 relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to="">Login</Link>
                        <Link className="cursor-pointer hover:opacity-95 relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to="/cadastroPsicologo">Cadastro</Link>
                    </div>
            </nav>
        </header>
    )
}