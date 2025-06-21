// "use client";

// import { Calendar, MapPin, ArrowRight } from "lucide-react";
// import { useState } from "react";
// import NewsModal from "./NewsModal";
// import AllNewsPage from "./AllNewsPage";

// const NewsSection = () => {
//   const newsData = [
//     {
//       id: 1,
//       title: "Kumpul rutin jumat malam",
//       excerpt:
//         "Hal ini bertujuan untuk merekatkan kebersamaan dari setiap anggota FAR EAST MC INDONESIA",
//       date: "-",
//       location: "Surabaya",
//       image: "/placeholder.svg?height=200&width=300",
//       category: "Agenda Harian",
//     },
//     {
//       id: 2,
//       title: "Workshop Restorasi Motor Klasik",
//       excerpt:
//         "Pelatihan intensif restorasi motor klasik bersama master restorer terbaik Indonesia.",
//       date: "8 Maret 2024",
//       location: "Jakarta",
//       image: "/placeholder.svg?height=200&width=300",
//       category: "Workshop",
//     },
//     {
//       id: 3,
//       title: "Charity Ride untuk Anak Yatim",
//       excerpt:
//         "Kegiatan sosial touring sambil berbagi dengan anak-anak yatim di Panti Asuhan Kasih Sayang.",
//       date: "1 Maret 2024",
//       location: "Bandung",
//       image: "/placeholder.svg?height=200&width=300",
//       category: "Charity",
//     },
//   ];

//   const [selectedNews, setSelectedNews] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isAllNewsOpen, setIsAllNewsOpen] = useState(false);

//   const handleNewsClick = (news) => {
//     setSelectedNews(news);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedNews(null);
//   };

//   const handleShowAllNews = () => {
//     setIsAllNewsOpen(true);
//   };

//   const handleCloseAllNews = () => {
//     setIsAllNewsOpen(false);
//   };

//   return (
//     <section id="news" className="py-20 bg-black">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Berita & <span className="text-blue-400">Artikel</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto"></div>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {newsData.map((news) => (
//             <article
//               key={news.id}
//               className="bg-gray-900 rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-500/60 transition-all hover:transform hover:scale-105"
//             >
//               <div className="relative">
//                 <img
//                   src={news.image || "/placeholder.svg"}
//                   alt={news.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="absolute top-4 left-4">
//                   <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
//                     {news.category}
//                   </span>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
//                   {news.title}
//                 </h3>
//                 <p className="text-gray-300 mb-4 line-clamp-3">
//                   {news.excerpt}
//                 </p>

//                 <div className="flex items-center text-sm text-gray-400 mb-4 space-x-4">
//                   <div className="flex items-center space-x-1">
//                     <Calendar size={16} />
//                     <span>{news.date}</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <MapPin size={16} />
//                     <span>{news.location}</span>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => handleNewsClick(news)}
//                   className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
//                 >
//                   <span>Baca Selengkapnya</span>
//                   <ArrowRight size={16} />
//                 </button>
//               </div>
//             </article>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <button
//             onClick={handleShowAllNews}
//             className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all"
//           >
//             Lihat Semua Berita
//           </button>
//         </div>
//       </div>
//       <NewsModal
//         news={selectedNews}
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//       />

//       <AllNewsPage
//         isOpen={isAllNewsOpen}
//         onClose={handleCloseAllNews}
//         onNewsClick={handleNewsClick}
//       />
//     </section>
//   );
// };

// export default NewsSection;

"use client";

import { useState, useRef } from "react";
import {
  Calendar,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import NewsModal from "./NewsModal";

const NewsSection = () => {
  const newsData = [
    {
      id: 1,
      title: "Kumpul rutin jumat malam",
      excerpt:
        "Hal ini bertujuan untuk merekatkan kebersamaan dari setiap anggota FAR EAST MC INDONESIA",
      date: "-",
      location: "Surabaya",
      image: "/placeholder.svg?height=200&width=300",
      category: "Agenda Harian",
    },
    {
      id: 2,
      title: "Halal bihalal FAR EAST MC INDONESIA",
      excerpt:
        "Agenda yang wajib di laksanakan yaitu Halal Bihalal bersama seluruh anggota",
      date: "-",
      location: "Surabaya",
      image: "/placeholder.svg?height=200&width=300",
      category: "Acara",
    },
    {
      id: 3,
      title: "Anniversary FAR EAST MC INDONESIA",
      excerpt: "Kegiatan merayakan hari jadi FAR EAST MC INDONESIA",
      date: "1 Maret 2024",
      location: "Surabaya",
      image: "/placeholder.svg?height=200&width=300",
      category: "Pesta",
    },
    {
      id: 4,
      title: "Meet Up Chapter Surabaya - Februari 2024",
      excerpt:
        "Gathering bulanan chapter Surabaya dengan agenda diskusi rencana touring dan sharing pengalaman.",
      date: "25 Februari 2024",
      location: "Surabaya",
      image: "/placeholder.svg?height=200&width=300",
      category: "Event",
    },
    {
      id: 5,
      title: "Tips Perawatan Motor di Musim Hujan",
      excerpt:
        "Panduan lengkap merawat motor klasik agar tetap prima saat musim penghujan tiba.",
      date: "20 Februari 2024",
      location: "Surabaya",
      image: "/placeholder.svg?height=200&width=300",
      category: "Tips",
    },
    {
      id: 6,
      title: "Launching Chapter Baru di Medan",
      excerpt:
        "Fareast MC Indonesia resmi membuka chapter baru di Medan dengan 25 anggota pendiri.",
      date: "15 Februari 2024",
      location: "MedSurabayaan",
      image: "/placeholder.svg?height=200&width=300",
      category: "Announcement",
    },
    {
      id: 7,
      title: "Review Honda CB 1978 - Legenda yang Tak Lekang Waktu",
      excerpt:
        "Ulasan mendalam tentang Honda CB 1978, salah satu motor klasik paling ikonik di Indonesia.",
      date: "10 Februari 2024",
      location: "Surabaya",
      image: "/placeholder.svg?height=200&width=300",
      category: "Review",
    },
    {
      id: 8,
      title: "Workshop Safety Riding untuk Pemula",
      excerpt:
        "Pelatihan dasar safety riding khusus untuk anggota baru dan pengendara pemula.",
      date: "5 Februari 2024",
      location: "Surabaya",
      image: "/placeholder.svg?height=200&width=300",
      category: "Workshop",
    },
  ];

  const [selectedNews, setSelectedNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllNews, setShowAllNews] = useState(false);
  const sliderRef = useRef(null);

  const handleNewsClick = (news) => {
    setSelectedNews(news);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNews(null);
  };

  const handleToggleAllNews = () => {
    setShowAllNews(!showAllNews);
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Determine which news to display
  const displayedNews = showAllNews ? newsData : newsData.slice(0, 3);

  const getCategoryColor = (category) => {
    switch (category) {
      case "Event":
        return "bg-green-600";
      case "Workshop":
        return "bg-purple-600";
      case "Charity":
        return "bg-orange-600";
      case "Tips":
        return "bg-yellow-600";
      case "Review":
        return "bg-red-600";
      case "Announcement":
        return "bg-indigo-600";
      default:
        return "bg-blue-600";
    }
  };

  return (
    <section id="news" className="py-20 bg-black">
      <div className="container mx-auto px-10 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Berita & <span className="text-blue-400">Artikel</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto"></div>
        </div>

        {/* News Slider Controls */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">
            {showAllNews ? "Semua Berita" : "Berita Terbaru"}
            <span className="ml-2 text-sm font-normal text-gray-400">
              ({newsData.length} artikel)
            </span>
          </h3>
          <div className="flex space-x-2">
            <button
              onClick={scrollLeft}
              className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable News */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto pb-6 space-x-6 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {newsData.map((news) => (
            <article
              key={news.id}
              className="flex-shrink-0 w-full sm:w-[350px] md:w-[320px] lg:w-[350px] snap-start bg-gray-900 rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-500/60 transition-all hover:transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={news.image || "/placeholder.svg"}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`${getCategoryColor(
                      news.category
                    )} text-white px-3 py-1 rounded-full text-sm font-semibold`}
                  >
                    {news.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {news.excerpt}
                </p>

                <div className="flex items-center text-sm text-gray-400 mb-4 space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{news.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>{news.location}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleNewsClick(news)}
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-6 space-x-1">
          {Array.from({ length: Math.ceil(newsData.length / 3) }).map(
            (_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-600 hover:bg-blue-500 cursor-pointer transition-colors"
                onClick={() => {
                  if (sliderRef.current) {
                    const scrollAmount = index * sliderRef.current.offsetWidth;
                    sliderRef.current.scrollTo({
                      left: scrollAmount,
                      behavior: "smooth",
                    });
                  }
                }}
              ></div>
            )
          )}
        </div>

        <div className="text-center mt-8">
          {/* <button
            onClick={handleToggleAllNews}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all"
          >
            {showAllNews ? "Tampilkan Lebih Sedikit" : "Lihat Semua Berita"}
          </button> */}
        </div>
      </div>
      <NewsModal
        news={selectedNews}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default NewsSection;
