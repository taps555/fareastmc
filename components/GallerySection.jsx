"use client";

import { useState } from "react";
import { Camera, Video, Heart, MessageCircle } from "lucide-react";

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("photos");

  const photos = [
    {
      id: 1,
      src: "/logofe.png?height=300&width=400",
      title: "Foto motor anggota dan event",
      likes: "-",
      comments: "-",
    },
    // {
    //   id: 2,
    //   src: "/placeholder.svg?height=300&width=400",
    //   title: "Yamaha RX King - Bro Dedi",
    //   likes: 38,
    //   comments: 8,
    // },
    // {
    //   id: 3,
    //   src: "/placeholder.svg?height=300&width=400",
    //   title: "Suzuki Thunder - Sis Maya",
    //   likes: 52,
    //   comments: 15,
    // },
    // {
    //   id: 4,
    //   src: "/placeholder.svg?height=300&width=400",
    //   title: "Kawasaki Ninja R - Bro Andi",
    //   likes: 41,
    //   comments: 9,
    // },
    // {
    //   id: 5,
    //   src: "/placeholder.svg?height=300&width=400",
    //   title: "Honda Tiger - Bro Rudi",
    //   likes: 33,
    //   comments: 6,
    // },
    // {
    //   id: 6,
    //   src: "/placeholder.svg?height=300&width=400",
    //   title: "Yamaha Scorpio - Bro Hendra",
    //   likes: 47,
    //   comments: 11,
    // },
  ];

  const videos = [
    {
      id: 1,
      thumbnail: "/logofe.png?height=200&width=300",
      title: "Touring Bromo 2024",
      duration: "15:30",
      views: "2.5K",
    },
    {
      id: 2,
      thumbnail: "/logofe.png?height=200&width=300",
      title: "Meet Up Jakarta",
      duration: "8:45",
      views: "1.8K",
    },
    {
      id: 3,
      thumbnail: "/logofe.png?height=200&width=300",
      title: "Review Honda CB",
      duration: "12:20",
      views: "3.2K",
    },
    {
      id: 4,
      thumbnail: "/logofe.png?height=200&width=300",
      title: "Halal Bihalal 2024",
      duration: "22:15",
      views: "4.1K",
    },
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

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-400">{video.views} views</p>
                </div>
              </div>
            ))}
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
