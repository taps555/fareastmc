"use client";

import { useState } from "react";
import { Search, Filter, Calendar, MapPin, ArrowLeft, Eye } from "lucide-react";

const AllNewsPage = ({ isOpen, onClose, onNewsClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const allNews = [
    {
      id: 1,
      title: "Touring Lintas Jawa 2024 - Sukses Digelar",
      excerpt:
        "Perjalanan epik selama 7 hari melintasi pulau Jawa dengan 150 anggota berhasil diselesaikan dengan lancar.",
      date: "15 Maret 2024",
      location: "Jakarta - Bali",
      image: "/placeholder.svg?height=200&width=300",
      category: "Event",
      views: 1250,
      readTime: "5 min",
    },
    {
      id: 2,
      title: "Workshop Restorasi Motor Klasik",
      excerpt:
        "Pelatihan intensif restorasi motor klasik bersama master restorer terbaik Indonesia.",
      date: "8 Maret 2024",
      location: "Jakarta",
      image: "/placeholder.svg?height=200&width=300",
      category: "Workshop",
      views: 890,
      readTime: "3 min",
    },
    {
      id: 3,
      title: "Charity Ride untuk Anak Yatim",
      excerpt:
        "Kegiatan sosial touring sambil berbagi dengan anak-anak yatim di Panti Asuhan Kasih Sayang.",
      date: "1 Maret 2024",
      location: "Bandung",
      image: "/placeholder.svg?height=200&width=300",
      category: "Charity",
      views: 675,
      readTime: "4 min",
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
      views: 445,
      readTime: "2 min",
    },
    {
      id: 5,
      title: "Tips Perawatan Motor di Musim Hujan",
      excerpt:
        "Panduan lengkap merawat motor klasik agar tetap prima saat musim penghujan tiba.",
      date: "20 Februari 2024",
      location: "Jakarta",
      image: "/placeholder.svg?height=200&width=300",
      category: "Tips",
      views: 1120,
      readTime: "6 min",
    },
    {
      id: 6,
      title: "Launching Chapter Baru di Medan",
      excerpt:
        "Fareast MC Indonesia resmi membuka chapter baru di Medan dengan 25 anggota pendiri.",
      date: "15 Februari 2024",
      location: "Medan",
      image: "/placeholder.svg?height=200&width=300",
      category: "Announcement",
      views: 780,
      readTime: "3 min",
    },
    {
      id: 7,
      title: "Review Honda CB 1978 - Legenda yang Tak Lekang Waktu",
      excerpt:
        "Ulasan mendalam tentang Honda CB 1978, salah satu motor klasik paling ikonik di Indonesia.",
      date: "10 Februari 2024",
      location: "Jakarta",
      image: "/placeholder.svg?height=200&width=300",
      category: "Review",
      views: 1450,
      readTime: "8 min",
    },
    {
      id: 8,
      title: "Workshop Safety Riding untuk Pemula",
      excerpt:
        "Pelatihan dasar safety riding khusus untuk anggota baru dan pengendara pemula.",
      date: "5 Februari 2024",
      location: "Bandung",
      image: "/placeholder.svg?height=200&width=300",
      category: "Workshop",
      views: 620,
      readTime: "4 min",
    },
  ];

  const categories = [
    { value: "all", label: "Semua Kategori" },
    { value: "Event", label: "Event" },
    { value: "Workshop", label: "Workshop" },
    { value: "Charity", label: "Charity" },
    { value: "Tips", label: "Tips" },
    { value: "Review", label: "Review" },
    { value: "Announcement", label: "Pengumuman" },
  ];

  const filteredNews = allNews.filter((news) => {
    const matchesSearch =
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedNews = [...filteredNews].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === "oldest") {
      return new Date(a.date) - new Date(b.date);
    } else if (sortBy === "popular") {
      return b.views - a.views;
    }
    return 0;
  });

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="min-h-screen bg-gray-900">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-blue-500/30 z-10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                >
                  <ArrowLeft size={24} />
                </button>
                <div>
                  <h1 className="text-3xl font-bold text-white">
                    Semua Berita
                  </h1>
                  <p className="text-gray-400">Fareast MC Indonesia</p>
                </div>
              </div>
              <div className="text-gray-400">
                {sortedNews.length} artikel ditemukan
              </div>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Cari berita..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-8 py-3 text-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
              >
                <option value="newest">Terbaru</option>
                <option value="oldest">Terlama</option>
                <option value="popular">Terpopuler</option>
              </select>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="container mx-auto px-4 py-8">
          {sortedNews.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-4">
                Tidak ada berita yang ditemukan
              </div>
              <p className="text-gray-500">
                Coba ubah kata kunci pencarian atau filter kategori
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedNews.map((news) => (
                <article
                  key={news.id}
                  onClick={() => onNewsClick(news)}
                  className="bg-black/50 rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-500/60 transition-all hover:transform hover:scale-105 cursor-pointer group"
                >
                  <div className="relative">
                    <img
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          news.category === "Event"
                            ? "bg-green-600"
                            : news.category === "Workshop"
                            ? "bg-purple-600"
                            : news.category === "Charity"
                            ? "bg-orange-600"
                            : news.category === "Tips"
                            ? "bg-yellow-600"
                            : news.category === "Review"
                            ? "bg-red-600"
                            : news.category === "Announcement"
                            ? "bg-indigo-600"
                            : "bg-blue-600"
                        } text-white`}
                      >
                        {news.category}
                      </span>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {news.readTime}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{news.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{news.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye size={16} />
                        <span>{news.views}</span>
                      </div>
                    </div>

                    <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors text-sm">
                      Baca Selengkapnya →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {sortedNews.length > 0 && (
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                Muat Lebih Banyak
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllNewsPage;
