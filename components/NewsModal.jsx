"use client";

import {
  X,
  Calendar,
  MapPin,
  User,
  Share2,
  Heart,
  MessageCircle,
} from "lucide-react";

const NewsModal = ({ news, isOpen, onClose }) => {
  if (!isOpen || !news) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-blue-500/30">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                news.category === "Agenda Harian"
                  ? "bg-green-600"
                  : news.category === "Acara"
                  ? "bg-purple-600"
                  : news.category === "Pesta"
                  ? "bg-orange-600"
                  : "bg-blue-600"
              } text-white`}
            >
              {news.category}
            </span>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>{news.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin size={16} />
                <span>{news.location}</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Featured Image */}
          <div className="mb-6">
            <img
              src={news.image || "/placeholder.svg?height=400&width=800"}
              alt={news.title}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {news.title}
          </h1>

          {/* Author & Meta */}
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                <User size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">Admin Fareast MC</p>
                <p className="text-gray-400 text-sm">{news.date}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors">
                <Heart size={20} />
                <span>24</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                <MessageCircle size={20} />
                <span>8</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors">
                <Share2 size={20} />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {news.excerpt}
            </p>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              {news.category === "Agenda Harian" && (
                <>
                  <p>
                    Jumat malam kemarin, komunitas Far East Classic Motorcycle
                    kembali menggelar kumpul rutin di titik biasa kami di Bambu
                    Runcing, Surabaya. Seperti biasa, suasana hangat dan penuh
                    semangat kebersamaan langsung terasa sejak para anggota
                    mulai berdatangan dengan motor-motor klasik andalan mereka.
                    Kegiatan diawali dengan riding santai keliling kota,
                    menikmati malam Surabaya sambil menyalakan mesin-mesin tua
                    yang masih penuh tenaga. Dentuman khas motor klasik seolah
                    menjadi musik pengiring yang menyatukan langkah kami malam
                    itu. Setelah riding, kami duduk bersama membahas beberapa
                    hal penting seputar internal klub, mulai dari evaluasi
                    kegiatan sebelumnya, pembahasan iuran, hingga rencana event
                    mendatang. Tak hanya itu, sesi literasi motor tua juga jadi
                    bagian utama malam itu—dimana kami saling berbagi ilmu
                    tentang perawatan motor klasik, berburu suku cadang langka,
                    serta cerita di balik setiap motor yang kami kendarai. Malam
                    itu bukan sekadar kumpul biasa—itu adalah momen memperkuat
                    solidaritas, menumbuhkan semangat komunitas, dan menjaga api
                    kecintaan terhadap motor tua tetap menyala. Far East bukan
                    hanya soal mesin, tapi soal persaudaraan.
                  </p>
                </>
              )}

              {news.category === "Acara" && (
                <>
                  <p>
                    Momentum setelah Idulfitri menjadi waktu yang tepat bagi
                    keluarga besar Far East Classic Motorcycle untuk saling
                    bersilaturahmi dalam acara Halal Bihalal yang digelar penuh
                    kehangatan dan kebersamaan. Acara dimulai dengan riding
                    bareng dari titik kumpul menuju lokasi halal bihalal.
                    Deretan motor klasik dari berbagai era kembali mengaspal
                    bersama, menciptakan pemandangan khas yang tak pernah gagal
                    menarik perhatian di jalan.
                  </p>
                  <p>
                    Setibanya di lokasi, suasana semakin akrab dengan sesi makan
                    bersama. Duduk melingkar, saling bertukar cerita, dan
                    menikmati hidangan sederhana menjadi simbol kebersamaan yang
                    tak ternilai. Tidak hanya itu, momen spesial malam itu juga
                    diisi dengan pertukaran kado antaranggota, yang menambah
                    keseruan dan mempererat hubungan satu sama lain. Halal
                    bihalal ini bukan sekadar tradisi tahunan—ini adalah momen
                    untuk memperkuat ikatan, mempererat rasa persaudaraan, dan
                    mengingatkan kembali bahwa Far East dibangun atas dasar
                    kebersamaan dan cinta terhadap budaya motor klasik.
                  </p>
                </>
              )}

              {news.category === "Pesta" && (
                <>
                  <p>
                    Perayaan Anniversary Far East Classic Motorcycle tahun ini
                    kembali menjadi ajang penuh semangat dan kebersamaan antar
                    sesama pecinta motor klasik. Digelar dengan meriah, acara
                    ini tak hanya menjadi peringatan hari jadi komunitas, tetapi
                    juga momen mempererat solidaritas lintas klub. Kegiatan
                    diawali dengan Rolling Thunder, di mana para biker dari
                    berbagai kota dan komunitas berkumpul dan riding bersama.
                    Deru mesin klasik bergema serempak, menciptakan energi yang
                    khas dan menggambarkan kekuatan persaudaraan antar bikers.
                    Setelah riding, acara dilanjutkan dengan pertukaran vandel
                    dan plakat antar komunitas sebagai bentuk penghormatan dan
                    solidaritas satu sama lain. Simbol kecil, tapi sarat makna:
                    saling menghargai dan terus menjalin hubungan antar
                    komunitas motor tua di seluruh penjuru kota. Malam itu
                    ditutup dengan semangat HIGAM – Hidup Gembira Awet Muda,
                    semboyan khas Far East yang mencerminkan gaya hidup para
                    anggotanya: selalu ceria, aktif, dan penuh semangat meski
                    mengendarai motor yang usianya puluhan tahun. Bagi kami,
                    usia hanyalah angka, tapi semangat tetap muda selamanya.
                  </p>

                  <p>
                    Selain memberikan bantuan materi, para anggota juga
                    mengadakan berbagai aktivitas bersama anak-anak seperti
                    games, storytelling, dan sharing motivasi. Antusiasme
                    anak-anak sangat tinggi, terutama ketika melihat koleksi
                    motor klasik yang dibawa para anggota.
                  </p>
                </>
              )}

              <h3 className="text-xl font-bold text-white mt-6 mb-3">
                ----------------
              </h3>

              <p>
                Terima kasih kepada seluruh anggota yang telah berpartisipasi
                dan membuat kegiatan ini sukses. Mari kita terus jaga semangat
                persaudaraan dan berkontribusi positif untuk komunitas dan
                masyarakat.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <h4 className="text-white font-semibold mb-3">Tags:</h4>
            <div className="flex flex-wrap gap-2">
              {["komunitas", "motor-klasik", "fareast-mc", "adventure"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Related Articles */}
        </div>
      </div>
    </div>
  );
};

export default NewsModal;
