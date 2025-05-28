
import {Link} from 'react-router-dom'
import { BookOpen } from "lucide-react";

export default function Navbar(){
    return (
        <nav className="w-full z-50 fixed shadow top-0 px-6 py-4 bg-transparent backdrop-blur">
            <div className="flex justify-between items-center">
                <h1 className="text-black text-xl font-bold flex items-center gap-2"><BookOpen/>Jejak Jawa</h1>
                <ul className="flex space-x-5 text-sm font-medium">
                    <li><Link href="#home" to="/" className="hover:text-amber-900">Home</Link></li>
                    <li><Link to="/Article" className="hover:text-amber-900">Artikel</Link></li>
                </ul>
            </div>
        </nav>
    )
}