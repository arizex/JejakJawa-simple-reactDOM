import { Calendar, BookOpen} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {

   

    const article = [
    {
      title: "Raden Wijaya: Pendiri Majapahit yang Licik dan Jenius",
      excerpt: "Strategi politik Raden Wijaya memanfaatkan pasukan Mongol untuk mendirikan kerajaan terbesar Nusantara...",
      readTime: "8 menit",
      category: "Kerajaan Jawa",
      date: "25 Januari 2025",
    },
    {
      title: "Pemberontakan Trunajaya: Perlawanan Madura terhadap Mataram",
      excerpt: "Kisah pangeran Madura yang hampir meruntuhkan kekuasaan Amangkurat I di Jawa Tengah...",
      readTime: "7 menit",
      category: "Konflik Kerajaan",
      date: "23 Januari 2025",
    },
    {
      title: "Babad Tanah Jawi: Sejarah atau Mitos?",
      excerpt: "Membedah akurasi naskah Babad Tanah Jawi sebagai sumber sejarah Jawa Kuno...",
      readTime: "9 menit",
      category: "Sastra Jawa",
      date: "20 Januari 2025",
    },
    {
      title: "Candi Sukuh: Misteri Arsitektur 'Pagan' di Era Islam",
      excerpt: "Alasan di balik pembangunan candi Hindu kontroversial abad ke-15 di lereng Gunung Lawu...",
      readTime: "6 menit",
      category: "Arkeologi",
      date: "18 Januari 2025",
    },
    {
      title: "Perang Paregreg: Perang Saudara yang Melemahkan Majapahit",
      excerpt: "Konflik internal keluarga kerajaan yang menjadi awal keruntuhan Majapahit...",
      readTime: "7 menit",
      category: "Kerajaan Jawa",
      date: "15 Januari 2025",
    },
    {
      title: "Tradisi Nyepi di Jawa sebelum Ada Bali",
      excerpt: "Praktik Catur Brata penyepian ternyata sudah ada dalam masyarakat Jawa Kuno...",
      readTime: "5 menit",
      category: "Budaya Jawa",
      date: "12 Januari 2025",
    },
    {
      title: "Konglomerat Jawa Abad ke-17: Kisah Kaya-raya Tan Goan Kong",
      excerpt: "Siapa kapitan Cina pertama di Batavia yang menguasai perdagangan gula Jawa?...",
      readTime: "6 menit",
      category: "Sejarah Ekonomi",
      date: "10 Januari 2025",
    },
    {
      title: "Makam Tionghoa Kuno di Lasem: Bukti Akulturasi yang Terlupakan",
      excerpt: "Kompleks makam abad ke-16 dengan arsitektur Jawa-Tionghoa yang unik...",
      readTime: "5 menit",
      category: "Budaya Jawa",
      date: "8 Januari 2025",
    },
    {
      title: "Gending Jawa Kuno: Musik untuk Ritual atau Hiburan?",
      excerpt: "Fungsi alat musik seperti gong, kendang, dan suling dalam masyarakat Jawa abad ke-9...",
      readTime: "6 menit",
      category: "Kesenian Jawa",
      date: "5 Januari 2025",
    },
    {
      title: "Prasasti Kamalagyan: Sistem Pajak Zaman Airlangga",
      excerpt: "Catatan tertua tentang tata kelola pajak dan irigasi di Jawa abad ke-11...",
      readTime: "7 menit",
      category: "Sejarah Ekonomi",
      date: "3 Januari 2025",
    }
    ]

    const timeline = [
    { year: "5000 SM", event: "Migrasi Austronesia ke Jawa", civilization: "Prasejarah Jawa" },
    { year: "800 SM", event: "Budaya Dongson & Perunggu", civilization: "Jawa Kuno" },
    { year: "400 M", event: "Berdirinya Kerajaan Tarumanagara", civilization: "Jawa Hindu-Buddha" },
    { year: "732 M", event: "Prasasti Canggal (Mataram Kuno)", civilization: "Mataram Hindu" },
    { year: "825 M", event: "Pembangunan Candi Borobudur", civilization: "Wangsa Syailendra" },
    { year: "929 M", event: "Pindahnya Pusat Kerajaan ke Jawa Timur", civilization: "Medang" },
    { year: "1222 M", event: "Berdirinya Kerajaan Singhasari", civilization: "Jawa Timur" },
    { year: "1293 M", event: "Pendirian Majapahit", civilization: "Nusantara" },
    { year: "1478 M", event: "Runtuhnya Majapahit", civilization: "Jawa Islam" },
    { year: "1527 M", event: "Kesultanan Demak Menguasai Jawa", civilization: "Jawa Islam" },
    { year: "1755 M", event: "Perpecahan Mataram (Giyanti)", civilization: "Jawa Kolonial" },
    { year: "1825 M", event: "Perang Diponegoro", civilization: "Hindia Belanda" },
    { year: "1945 M", event: "Proklamasi Kemerdekaan Indonesia", civilization: "Jawa Modern" },
    ]

    return(
        <section id="about" className="min-h-screen w-full py-12 bg-[#d9cbb4]">
            <div className="container px-4 md:px-4 py-12 flex justify-center">
                <div className="flex flex-col space-y-4 items-center">
                    <h2 className="text-black text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl lg:text-4xl/none">Timeline Sejarah Jawa</h2>
                    <p className="text-center">Perjalanan waktu peristiwa penting dalam sejarah jawa</p>
                </div>
            </div>
            <div id="timeline" className="mx-auto max-w-4xl p-6">
                <div className="relative">
                    <div className=" absolute left-4 md:left-1/2 md:transform md:-translate-x-px bottom-0 top-0 bg-border"></div>
                    {timeline.map((item, index) => (
                        <div key={index} className="px-2 relative flex items-center mb-8 border-l-2 pl-2 border-gray-700" >
                            <div className="flex items-center w-full">
                                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                                    <Calendar className=" h-7 w-7"/>
                                </div>
                                <div className="ml-4 md:ml-8 flex-1">
                                    <div className="p-4">
                                    <div className="flex border-1 p-2 rounded-sm shadow-lg flex-col md:flex-row md:items-center md:justify-between">
                                        <div>
                                        <h3 className="font-semibold text-md">{item.event}</h3>
                                        <p className="text-muted-foreground">{item.civilization}</p>
                                        </div>
                                        <span className="bg-amber-600 w-30 text-center border-1 shadow p-2 rounded-full mt-2 md:mt-0">
                                        {item.year}
                                        </span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div id="article" className="w-full py-12 md:py-24 lg:py-32 pt-50">
                <div className="container px-4 md:px-6 flex flex-col items-center">
                    <h2 className="text-3xl font-bold">Artikel</h2>
                    <p className="text-center mx-auto max-w[700px] md:text-xl">Baca mendalam tentang peristiwa dan tokoh sejarah</p>
                </div>
                <div className="max-w-6xl mx-auto px-4 py-8">
               
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {article.slice(0, 3).map((article, index) => (
                    <div 
                        key={index} 
                        className="hover:shadow-lg transition-shadow border border-gray-200 p-4 rounded-lg flex flex-col h-full"
                    >
                       
                        <div className="flex-grow">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-semibold uppercase tracking-wide text-amber-600">
                            {article.category}
                            </span>
                        </div>
                        <h3 className="text-1xl font-semibold mb-2 leading-snug">
                            {article.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-3 mb-4">
                            {article.excerpt}
                        </p>
                        </div>
                    </div>
                    ))}
                </div>

             
                <div className="text-center mt-10">
                    <Link to="/Article" className="inline-flex items-center px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Baca Semua Artikel Disini
                    </Link>
                </div>
                </div>
          </div>
        </section>
    )
}