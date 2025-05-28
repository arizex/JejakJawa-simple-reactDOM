import  { useState } from "react";
import { ArrowRight, Minimize2 } from "lucide-react";
import { article } from "../data/ArticleData";


export default function Article(){



  const [isOpen, setIsOpen] = useState(false)
  const [selectArticle, setSelectArticle] = useState(false)

  const openModal = (article) => {
    setSelectArticle(article)
    setIsOpen(true)
  }

  const closeModal = () => {
    setSelectArticle(null)
    setIsOpen(false)
  }


    return(
        <article className="w-full min-h-screen bg-[#d9cbb4] pt-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-xl font-bold">ARTIKEL</h1>
                    <p>Selamat membaca</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 gap-6">
                    {article.map((article, index) => (
                    <div 
                        key={index} 
                        className="hover:shadow-lg transition-shadow border border-gray-200 p-4 rounded-lg flex flex-col h-full"
                    >
                        {/* Article Content */}
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
                        <div className="mt-auto">
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                            <span className="text-sm text-gray-500">
                            {article.date}
                            </span>
                            <button className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-800 transition-colors" onClick={() => openModal(article)}>
                            Baca
                            <ArrowRight className="ml-1 h-4 w-4" />
                            </button>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                {isOpen && selectArticle && (
                  <div className="fixed inset-0 z-50 bg-white p-8 overflow-auto" >
                    <button
                      onClick={closeModal}
                      className="text-gray-500 text-3xl"
                    >
                      <Minimize2 />

                    </button>
                    <div className="max-w-4xl mx-auto">
                      <h2 className="text-3xl font-bold">{selectArticle.title}</h2>
                      <p className="text-sm text-gray-500">{selectArticle.date}</p>
                      <div className="text-lg text-gray-800 whitespace-pre-line">{selectArticle.content ||"konten belum tersedia"}</div>
                    </div>
                  </div>
                )}
        </article>
    )
}