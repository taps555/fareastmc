"use client";

import { useState } from "react";
import {
  Camera,
  Video,
  Heart,
  MessageCircle,
  Clock,
  Eye,
  X,
} from "lucide-react";

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("photos");
  const [selectVideo, setSelectedVideo] = useState(null);

  const photos = [
    {
      id: 1,
      src: "/touring.jpg?height=300&width=400",
      title: "Touring bersama anggota FAR EAST MC INDONESIA",
      likes: "1K",
      comments: "2",
    },
    {
      id: 2,
      src: "/touring2.jpg?height=300&width=400",
      title: "Touring bersama anggota FAR EAST MC INDONESIA",
      likes: 38,
      comments: 8,
    },
    {
      id: 3,
      src: "/touring3.jpg?height=300&width=400",
      title: "Touring bersama anggota FAR EAST MC INDONESIA",
      likes: 52,
      comments: 15,
    },
    {
      id: 4,
      src: "/wingday.jpg?height=300&width=400",
      title:
        "Satu aspal, satu persaudaraan! Wingday FARE AST MC INDONESIA adalah bukti kuatnya ikatan kekeluargaan kita di setiap perjalanan.",
      likes: 41,
      comments: 9,
    },
    {
      id: 5,
      src: "/wingday2.jpg?height=300&width=400",
      title:
        "Selamat Wingday FARE AST MC INDONESIA! Terbang lebih tinggi, brother!",
      likes: 33,
      comments: 6,
    },
    {
      id: 6,
      src: "/wingday3.jpg?height=300&width=400",
      title:
        "Setiap kilometer adalah cerita, setiap tikungan adalah pengalaman. Selamat merayakan Wingday FARE AST MC INDONESIA",
      likes: 47,
      comments: 11,
    },
    {
      id: 7,
      src: "/triwulan1.jpg?height=300&width=400",
      title:
        "Wingday Triwulan FARE AST MC INDONESIA: Sebuah perayaan dedikasi, soliditas, dan perjalanan kita bersama di setiap aspal. Terus maju, Brothers!",
      likes: 47,
      comments: 11,
    },
    {
      id: 8,
      src: "/triwulan2.jpg?height=300&width=400",
      title:
        "Rayakan Wingday Triwulan FARE AST MC INDONESIA! Momen untuk mengukuhkan ikatan, berbagi cerita, dan melangkah lebih jauh dalam persaudaraan sejati.",
      likes: 47,
      comments: 11,
    },
    {
      id: 9,
      src: "/triwulan3.jpg?height=300&width=400",
      title:
        "Selamat Wingday Triwulan FARE AST MC INDONESIA! Mari kobarkan semangat, jaga kebersamaan, dan wujudkan setiap visi bersama di jalanan.",
      likes: 47,
      comments: 11,
    },
  ];

  const videos = [
    {
      id: 1,
      thumbnail: "/ritualmalamjumat.png?height=200&width=300",
      title: "KOPDAR RUTIN RITUAL JUMAT MALAM DI BAMBU RUNCING",
      duration: "2:27",
      views: "-",
      videoUrl: "https://www.youtube.com/embed/cGdlK29KegM",
    },
    {
      id: 2,
      thumbnail: "/meetup.png?height=200&width=300",
      title: "TEMPAT KUMPUL FAR EAST",
      duration: "2:15",
      views: "-",
      videoUrl: "https://www.youtube.com/embed/eQyqvdqyFVY",
    },
    // {
    //   id: 3,
    //   thumbnail: "/logofe.png?height=200&width=300",
    //   title: "Review Honda CB",
    //   duration: "12:20",
    //   views: "3.2K",
    // },
    // {
    //   id: 4,
    //   thumbnail: "/logofe.png?height=200&width=300",
    //   title: "Halal Bihalal 2024",
    //   duration: "22:15",
    //   views: "4.1K",
    // },
  ];

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Konten <span className="text-blue-400">Visual</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Dokumentasi perjalanan dan kegiatan komunitas dalam bentuk foto dan
            video
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900 rounded-lg p-1 border border-blue-500/30">
            <button
              onClick={() => setActiveTab("photos")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-all ${
                activeTab === "photos"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <Camera size={20} />
              <span>Foto Motor</span>
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-all ${
                activeTab === "videos"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <Video size={20} />
              <span>Video Dokumenter</span>
            </button>
          </div>
        </div>

        {/* Photos Tab */}
        {activeTab === "photos" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="bg-gray-900 rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-500/60 transition-all hover:transform hover:scale-105 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {photo.title}
                  </h3>
                  <div className="flex items-center justify-between text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Heart size={16} />
                        <span>{photo.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle size={16} />
                        <span>{photo.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-gray-900 rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-500/60 transition-all hover:transform hover:scale-105 group"
              >
                <div className="relative">
                  <div
                    className="relative cursor-pointer"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-blue-600 rounded-full p-4">
                        <Video className="text-white" size={32} fill="white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {video.title}
                  </h3>
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
        )}
        {selectVideo && (
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
                  src={selectVideo.videoUrl}
                  title={selectVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                />
              </div>

              <h2 className="text-white text-xl mt-4 text-center">
                {selectVideo.title}
              </h2>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          {/* <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all">
              Upload Konten
            </button> */}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
