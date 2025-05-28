import {Copyright, BookOpen, Instagram, Github, Phone} from "lucide-react";

export default function Footer(){
    return(
        <footer className="w-full mt-50">
            <div className="flex bg-amber-600 h-auto justify-between gap-10">
                <div className="flex flex-col  p-4 w-200">
                    <div className="flex gap-2 font-bold">
                        <BookOpen/>
                        <p>Jejak Jawa</p>
                    </div>
                    <div className=" pt-2">
                        <p className="text-gray-800">Website yg membahasa sejarah jawa dan bagaiamana peradaban jawa dari jawa kuno hingga jawa modern yang kita kenal saat ini.</p>
                    </div>
                </div>
                <div className="flex flex-col p-4 w-100">
                    <p className="font-bold text-1xl ">Contact Me</p>
                    <div className="flex flex-col pt-2 space-y-2 text-gray-800">
                        <div className="flex items-center gap-2">
                            <Instagram className="w-4 h-4" />
                            <a href="">@arizrmdn</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Github className="w-4 h-4" />
                            <a href="">github.com/arizex</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <a href="">085138039373</a>
                        </div>
                    </div>
                </div>
            </div>
                <div className="flex justify-center text-white bg-black border-amber-700 gap-2 border-t-1 p-3">
                    <Copyright />
                    <p className="font-bold">2025 arisdev</p>
                </div>
        </footer>
    )
}