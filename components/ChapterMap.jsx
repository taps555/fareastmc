import { MapPin, Phone, Mail, Users } from "lucide-react";
import supabase from "../supabaseClient";
import { useEffect, useState } from "react";

const ChapterMap = () => {
  // const chapters = [
  //   {
  //     id: 1,
  //     name: "Jakarta Chapter",
  //     coordinator: "Mas Baskoro",
  //     phone: "+62 815-5263-753",
  //     email: "jakarta@gmail.com",
  //     members: "-",
  //     location: "Jakarta Pusat",
  //     address: "Jl. .....",
  //   },
  //   {
  //     id: 2,
  //     name: "Surabaya Chapter",
  //     coordinator: "Mas Hanafi",
  //     phone: "+62 878-5125-2575",
  //     email: "bandung@gmail.com",
  //     members: "-",
  //     location: "Bandung",
  //     address: "Suko Sumolowaru, 105 surabaya",
  //   },
  //   {
  //     id: 3,
  //     name: "Sidoarjo Chapter",
  //     coordinator: "Mas Budi",
  //     phone: "+62 814-5678-9012",
  //     email: "surabaya@gmail.com",
  //     members: "-",
  //     location: "Surabaya",
  //     address: "Jl. .....",
  //   },
  // ];
  const [chapterData, setChapterData] = useState([]);
  const fetchVideos = async () => {
    const { data, error } = await supabase.from("chapters").select("*");

    setChapterData(data);
    if (error) {
      console.error("❌ Supabase fetch error:", error);
      return;
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <section id="chapter" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Peta <span className="text-blue-400">Chapter</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-4"></div>
          <p className="text-gray-300 text-2xl mx-auto">
            Jaringan chapter Fareast MC Indonesia tersebar di kota
          </p>
        </div>

        {/* Map Placeholder */}
        <div className="bg-gray-900 rounded-xl p-8 mb-12 border border-blue-500/30">
          <a href="https://maps.app.goo.gl/UhAufbvStga6bZBbA" target="_blank">
            <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-blue-400 mx-auto mb-4" size={48} />

                <p className="text-gray-300 text-lg">Interactive Map</p>

                <p className="text-gray-400 text-sm">
                  Buka Lokasi Fareast MC Indonesia di sini!!
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Chapters Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapterData.map((chapter) => (
            <div
              key={chapter.id}
              className="bg-gray-900 rounded-xl p-6 border border-blue-500/30 hover:border-blue-500/60 transition-all hover:transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{chapter.name}</h3>
                <div className="flex items-center space-x-1 text-blue-400">
                  <Users size={16} />
                  <span className="text-sm">{chapter.members}</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-2">
                  <MapPin
                    size={16}
                    className="text-blue-400 mt-1 flex-shrink-0"
                  />
                  <div>
                    <p className="text-gray-300 text-sm">{chapter.address}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Phone size={16} className="text-blue-400" />
                  <p className="text-gray-300 text-sm">{chapter.phone}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <Mail size={16} className="text-blue-400" />
                  <p className="text-gray-300 text-sm">{chapter.email}</p>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-4">
                <p className="text-gray-400 text-sm mb-2">
                  Koordinator Chapter:
                </p>
                <p className="text-white font-semibold">
                  {chapter.coordinator}
                </p>
              </div>

              {/* <div className="mt-4 flex space-x-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all">
                  Hubungi
                </button>
                <button className="flex-1 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all">
                  Info Chapter
                </button>
              </div> */}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all">
            Buka Chapter Baru
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default ChapterMap;
