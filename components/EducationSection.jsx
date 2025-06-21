import { Play, Clock, Eye, X } from "lucide-react";
import { useState, useEffect } from "react";
import supabase from "../supabaseClient";

const EducationSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoCategories, setVideoCategories] = useState([]);

  // const videoCategories = [
  //   {
  //     videos: [
  //       {
  //         title: "Tutorial restorasi motor klasik",
  //         duration: "04:21",
  //         views: "-",
  //         thumbnail: "/restorasi.png",
  //         videoUrl: "https://www.youtube.com/embed/dJPB_mSNW2I",
  //       },
  //       {
  //         title: "Tutorial merawat motor klasik agar tetap prima",
  //         duration: "04:26",
  //         views: "-",
  //         thumbnail: "/image.png?height=150&width=200",
  //         videoUrl: "https://www.youtube.com/embed/P770sb5gt6o",
  //       },
  //     ],
  //   },
  //   // {
  //   //   videos: [
  //   //     {
  //   //       title: "Tips menghadapi kerusakan darurat",
  //   //       duration: "-",
  //   //       views: "-",
  //   //       thumbnail: "/logofe.png?height=150&width=200",
  //   //     },
  //   //   ],
  //   // },
  //   // {
  //   //   title: "Modifikasi",
  //   //   videos: [
  //   //     {
  //   //       title: "Custom Exhaust System",
  //   //       duration: "22:10",
  //   //       views: "18K",
  //   //       thumbnail: "/placeholder.svg?height=150&width=200",
  //   //     },
  //   //     {
  //   //       title: "Upgrade Sistem Kelistrikan",
  //   //       duration: "16:45",
  //   //       views: "11K",
  //   //       thumbnail: "/placeholder.svg?height=150&width=200",
  //   //     },
  //   //   ],
  //   // },
  //   // {
  //   //   title: "Safety Riding",
  //   //   videos: [
  //   //     {
  //   //       title: "Teknik Cornering yang Aman",
  //   //       duration: "14:20",
  //   //       views: "20K",
  //   //       thumbnail: "/placeholder.svg?height=150&width=200",
  //   //     },
  //   //     {
  //   //       title: "Persiapan Touring Jarak Jauh",
  //   //       duration: "19:35",
  //   //       views: "13K",
  //   //       thumbnail: "/placeholder.svg?height=150&width=200",
  //   //     },
  //   //   ],
  //   // },
  // ];

  const fetchVideos = async () => {
    const { data, error } = await supabase.from("videos").select("*");

    if (error) {
      console.error("❌ Supabase fetch error:", error);
      return;
    }

    // Grup berdasarkan category_name
    const grouped = data.reduce((acc, video) => {
      const category = video.category_name;
      if (!acc[category]) acc[category] = [];
      acc[category].push(video);
      return acc;
    }, {});

    const categories = Object.entries(grouped).map(([title, videos]) => ({
      title,
      videos,
    }));

    setVideoCategories(categories);
  };

  // Jalankan fetchVideos saat pertama kali render
  useEffect(() => {
    fetchVideos();
  }, []);

  // console.log("videoCategories", videoCategories);

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Konten <span className="text-blue-400">Edukasi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Pelajari berbagai tips dan trik dari para ahli untuk merawat dan
            memodifikasi motor klasik Anda
          </p>
        </div>

        <div className="space-y-12">
          {(videoCategories || []).map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">
                {category.title}
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {(category.videos || []).map((video, videoIndex) => (
                  <div
                    key={videoIndex}
                    className="bg-black/50 rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-500/60 transition-all hover:transform hover:scale-105 group"
                  >
                    <div
                      className="relative cursor-pointer"
                      onClick={() => setSelectedVideo(video)}
                    >
                      <img
                        src={video.thumbnail} // pastikan thumbnail diawali slash dan file ada di public folder server
                        alt={video.title}
                        className="w-full h-40 object-cover"
                      />

                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-blue-600 rounded-full p-3">
                          <Play className="text-white" size={24} fill="white" />
                        </div>
                      </div>

                      <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>

                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                        {video.title}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Eye size={16} />
                          <span>{video.views} views</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={16} />
                          <span>{video.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {selectedVideo && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
              <div className="relative w-full max-w-3xl mx-4">
                <button
                  className="absolute top-2 right-2 text-white z-50"
                  onClick={() => setSelectedVideo(null)}
                >
                  <X size={32} />
                </button>

                <div
                  className="relative"
                  style={{ paddingTop: "56.25%" /* 16:9 aspect ratio */ }}
                >
                  <iframe
                    src={selectedVideo.video_url}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                  />
                </div>

                <h2 className="text-white text-xl mt-4 text-center">
                  {selectedVideo.title}
                </h2>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          {/* <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all">
            Lihat Semua Video
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
