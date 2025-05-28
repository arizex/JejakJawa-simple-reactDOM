import {Globe, Clock} from "lucide-react";

export default function Home(){
    
        
    return(
        <main id="home" className="min-h-screen justify-center flex items-center pt-16 w-full px-6 bg-[#d9cbb4]">
            <div className="py-12 md:py-23 lg:py-31 xl:py-47 flex flex-col items-center text-center space-y-4">
                <div className="space-y-4">
                    <h1 className="text-black text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Jelajahi Sejarah Jawa</h1>
                    <p className="text-gray-600 mx-auto max-w-[700px] text-muted-foreground md:text-xl">temukan kisah-kisah menakjubkan dari peradaban kuno hingga era sekarang, pelajari bagaimana masalalu membentuk jawa yang kita kenal sekarang ini</p>
                    <div className="space-x-4 flex justify-center  ">
                        <a href="#article" className="
                        bg-amber-700/80 
                        text-stone-100 
                        backdrop-blur-sm 
                        border border-stone-500/20 
                        px-2 py-1 
                        flex
                        gap-2
                        items-center
                        rounded-lg
                        text-xs
                        transition-all 
                        duration-300
                        hover:bg-amber-800/90 
                        hover:shadow-lg 
                        hover:shadow-amber-800/20 
                        hover:border-stone-400/30 
                        hover:translate-y-[-2px]
                        ">
                            <Globe></Globe>
                            Eksplorasi
                        </a>
                        <a href="#timeline" className="
                        bg-amber-700/80 
                        text-stone-100 
                        backdrop-blur-sm 
                        border border-stone-500/20 
                        px-2 py-1 
                        flex
                        gap-2
                        items-center
                        rounded-lg
                        text-xs
                        transition-all 
                        duration-300
                        hover:bg-amber-800/90 
                        hover:shadow-lg 
                        hover:shadow-amber-800/20 
                        hover:border-stone-400/30 
                        hover:translate-y-[-2px]
                        ">
                            <Clock></Clock>
                            Lihat Timeline
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}